---
title: On Cardano staking rewards...
longTitle: Understanding the math behind Cardano staking rewards.
dateCreated: 2021-06-21
description: 'Debunking the complex dynamics behind Cardano
							staking rewards through the protocol’s formulas.'
usesKatex: true
---

## Foreword

The goal of this post is to inform clients of [Stake.Green](/) staking service or of any other staking service on how staking rewards are calculated and distributed on the Cardano (ADA) blockchain.

First of all, it is worth mentioning that reward computation and distribution is fully **automatised** by the Cardano blockchain. It means that by delegating your ADA to a pool you are **100%** assured to receive you share of the mining rewards that the pool is entitled to.

However, maximising the amount of rewards that the pool is entitled to is subject to state-of-the-art pool management and monitoring. At [Stake.Green](/) we make our mission to provide this high standard of mining pool management in order to deliver the best possible APY to our clients.

In the rest of this article you will find complete and transparent information on Cardano rewards and on how the quality of pool management affects those rewards (follow the _⚠️_).

If you are mainly interested by the actual reward that you will get by delegating to [Stake.Green](https://stake.green) feel free to directly jump to [this section](#reward-calculator).

## Total amount of reward

At the end of each epoch (currently [5 days](#)) Cardano allocates a total reward amount $R_\text{tot}$ of ADA that will be split between all mining pools and treasury. The value of this total reward is computed as follows:

$$
R_\text{tot} = \text{min}(\eta,1) \cdot \rho \cdot \text{reserve} + \text{fees}
$$

Where:

- $\text{reserve}$: the amount of ADA that have not been issued yet. The Cardano blockhain sets a maximum attainable supply of **45 billion ADA**. Hence, at any time the following equation holds: $\text{reserve}+\text{total ADA supply} = \text{maximum ADA supply}$. The current value of the ADA reserve is given on our [ADA Live Data](#) page.

- $\rho$: a [Protocol Parameter](#) indicating how much of the reserve should be allocated to rewards at each epoch. Hence, due to reward distribution, the ADA $\text{reserve}$ diminishes with time and the total ADA supply increases.

- $\eta$: the ratio between the number of blocks that were actually minted in the epoch over the ideal number of blocks that should have been minted during the epoch. The ideal number of blocks that should have been minted during the epoch is given by the following formula: $\text{activeSlotsCoeff}\times\text{epochLength}$ where $\text{activeSlotsCoeff}$ and $\text{epochLength}$ are [Protocol Parameters](#). The current ideal number of blocks per epoch is [$21 600$](#) which represents one block every 20s.

- $\text{fees}$: the sum of all the transaction fees of the epoch. ADA imposes a minimum transaction fee per transaction of: $\text{minFeeA}\times\text{size(tx)}+\text{minFeeB}$ with $\text{size(tx)}$ the size of the transaction in bytes where $\text{minFeeA}$ and $\text{minFeeB}$ are [Protocol Parameters](#).

## Treasury tax

The first thing to come off the total reward is the **treasury tax**. A fraction $\tau$ of $R_{\text{tot}}$ is directly distributed to the Treasury whose goal is to:

> Provision funds to develop Cardano activities through a voting process.

Hence, you can think of it as a traditional state tax. Fraction $\tau$ is a [Protocol Parameter](#).

After the treasury tax, the epoch's reward amount $R$ which remains for mining pools is:

$$
R = (\text{min}(\eta,1) \cdot \rho \cdot \text{reserve} + \text{fees}) \cdot (1-\tau)
$$

The fraction of $R$ that each mining pool will receive depends on two factors: the stake pledged my the managing entity of the pool and the total stake delegated stake to the pool (including the pledge).

**Stake pledged.** The pool's pledge is an amount of ADA that is owned and pledged by the pool managing entity. [Stake Green](https://stake.green)'s current pledge can be found on our [ADA Pool Specification](#) page.

_⚠️_ If a pool does not provide proof of its declared pledge rewards for the epoch will automatically be set to $0$. Hence the pool's clients wont receive any reward for that epoch.

**Stake delegated.** The pool's total amount of delegated ADA (including the pledge). This total is the sum of all the ADA that the pool's clients delegate to the pool plus the pool's pledge. [Stake Green](https://stake.green)'s current delegated stake can be found on our [ADA Pool Specification](#) page.

## Pool reward in theory

The pool's theoretical reward for the epoch is given by the following formula which we are going to understand step by step:

$$
f(s,\sigma) := \frac{R}{{1+a_0}} \left ( \sigma' + s' \cdot a_0 \cdot \frac{\sigma' - s' \frac{z_0-\sigma'}{z_0}}{z_0} \right )
$$

With:

- $s$: the **relative pledged stake**. The value of $s$ is the stake pledged by the pool **relative to** the total amount of ADA supply (i.e. the amount of ADA that were supplied to date). In other words: $s = \frac{\text{Total amount of ADA pledged by the pool}}{\text{Total ADA supply}}$ and we have $0 \leq s \leq 1$.

- $\sigma$: the **relative delegated stake** (including the pledge). The value of $\sigma$ is the stake delegated to the pool **relative to** the total amount of ADA supply. In other words: $\sigma = \frac{\text{Total amount of ADA delegated to the pool}}{\text{Total ADA supply}}$ and we have $0 \leq \sigma \leq 1$.

Current values of $s$ and $\sigma$ for Stake.Green are given on our [ADA Pool Specification](#) page.

- $R$: the after tax total amount of rewards available for mining pools (see above), which is: $R = (\text{min}(\eta,1) \cdot \rho \cdot \text{reserve} + \text{fees}) * (1-\tau)$

- $z_0$: the pool saturation threshold, between $0$ and $1$. In the interest of decentralization, Cardano does not want a pool to have a delegated stake of more than $z_0 = 1/k$ of the current total amount of ADA supply with $k$ a [Protocol Parameter](#) also referred to as $\text{nOpt}$. In practice, the way of enforcing this is to disallow $s$ and $\sigma$ to be bigger than $z_0$ in reward calculation, which motivates the introduction of $s'$ and $\sigma'$ below. That way a mining pool will not get extra rewards once it has reached saturation (i.e. $\sigma = z_0$) and so, it is not in the pool interest to be saturated.

- $s' = \text{min}(s,z_0)$: $s'$ caps the value of the relative pledge to the saturation threshold $z_0$.

- $\sigma' = \text{min}(\sigma,z_0)$: $\sigma'$ caps the relative pool's delegated stake to the saturation threshold $z_0$.

- $a_0$: the pledge influence factor, between $0$ and $+\infty$. This parameters controls how important is the influence of the pledge on the total reward. As described below if $a_0 = 0$ pools with equal stake are not favorised by how big their pledge is while if $a_0 = +\infty$ only the pool's pledge has an influence on the reward of the pool (and not the pool's delegated stake!).

### Ignoring pledge influence

Most of the complexity of the above formula for $f(s,\sigma)$ comes from the fact that the Cardano blockchain wishes to give some importance to the pledge that a mining pool is providing during the mining process. Having a high pledge gives more credit to a mining pool entity who is willing to temporarily freeze that pledge before the epoch to ensure optimal mining.

Let say for now that we ignore the pledge influence factor and set $a_0 = 0$. Then the formula of $f(s,\sigma)$ simply becomes:

$$
f(s,\sigma) := R \sigma'
$$

This formula makes perfect sense! The pool will get a proportion of the total available reward $R$ equal to its relative delegated stake in the blockchain (capped by the saturation threshold).

### Pledge influence in a saturated pool

Now, if we wish to add some weight to the pledge we have to consider the full formula of f. However, we can note that the factor $\frac{\sigma' - s' \frac{z_0-\sigma'}{z_0}}{z_0}$ is always between $0$ and $1$ (this is because $0 \leq s' \leq \sigma' \leq z_0$) and that it is equal to $1$ when $\sigma' = z_0$, i.e. when the pool is saturated. Hence, if the pool is saturated, i.e. its relative delegated stake represents more than $1/k$ of the current total ADA supply, we have:

$$
f(s,\sigma) := R \frac{ \sigma' + s' \cdot a_0}{{1+a_0}}
$$

In this case, we have that $\text{lim}_{a_0 = +\infty} f(s, \sigma) = Rs'$. Meaning that the _only_ thing that matters when $a_0 = +\infty$ is the pledge and that someone looking for delegating her coins would always go to the non-saturated pool with the highest pledge in order to maximise staking rewards. This would be bad news for miners as organic growth of the delegated stake would be useless: only initial wealth, materialised in the pool's pledged would matter.

Hence, we understand how the value of $0 \leq a_0 \leq \infty$ allows to compromise between "only delegated stake matters" and "only pledged stake matters" scenarios.

### Pledge influence in a non-saturated pool

The last thing that we need to understand in the expression of $f(s,\sigma) := \frac{R}{{1+a_0}} \left ( \sigma' + s' \cdot a_0 \cdot \frac{\sigma' - s' \frac{z_0-\sigma'}{z_0}}{z_0} \right )$ is this factor:

$$
0 \leq \frac{\sigma' - s' \frac{z_0-\sigma'}{z_0}}{z_0} \leq 1
$$

Let's rewrite things a bit, we have:

$$
\frac{\sigma' - s' \frac{z_0-\sigma'}{z_0}}{z_0} = \frac{\sigma' - s' (1-\sigma'/z_0)}{z_0}
$$

Note that $0 \leq (1-\sigma'/z_0) \leq 1$ represents how far from saturation the pool is. In the hypothesis of a pool far from saturation, we'll approximate $(1-\sigma'/z_0) \simeq 1$.

In that case the factor becomes:

$$
\frac{\sigma' - s' \frac{z_0-\sigma'}{z_0}}{z_0} = \frac{\sigma' - s'}{z_0}
$$

And the expression of $f(s,\sigma)$:

$$
f(s,\sigma) := \frac{R}{{1+a_0}} \left ( \sigma' + s' \cdot a_0 \cdot \frac{\sigma' - s'}{z_0} \right )
$$

We understand that $\frac{\sigma' - s'}{z_0}$ plays the role of an **incentive to get delegated stake**. Indeed, if the pool has no delegated stake we have $\sigma' = s'$ hence $\frac{\sigma' - s'}{z_0} = 0$ and no matter how high the pool's pledge is, the multiplicative effect of $a_0$ is set to $0$: $f(s,\sigma) := \frac{R}{{1+a_0}}  \sigma' = \frac{R}{{1+a_0}}  s'$.

Hence this factor makes it more beneficial for a pool with high pledge to actually get delegated stake instead of closing the door and only capitilising on their pledge, as delegated stake will activate the influence of $a_0$ on the reward and make high pledges be more beneficial.

Finally, this influence of delegated stake on the reward diminishes as the pool gets closer to saturation because of the factor $(1-\sigma'/z_0)$.

We now hopefully have a more complete understanding of the theoretical reward formula $f(s,\sigma)$ and it is now time to talk about the actual pool's reward.

## Pool reward in practice

The formula of $f(s,\sigma)$ gives the theoretical maximum amount of reward that the pool is entitled to for the epoch. However, in practice, this amount is ponderated by the **pool performance factor**.

**Pool performance factor.** The probability for a mining pool to be chosen to mint a block is $\tilde{\sigma}$ where $\tilde{\sigma}$ is the delegated staking of the pool **relative to the total of staked ADA**. Note this subtlety, $\sigma$ was defined by $\sigma = \frac{\text{Total amount of ADA delegated to the pool}}{\text{Total ADA supply}}$ but $\tilde{\sigma} = \frac{\text{Total amount of ADA delegated to the pool}}{\text{Total delegated ADA supply}}$. At the date of this article, approximatively [**70%**](#) of the total ADA supply was delegated.

However, the realised fraction of block minted during the period is $\beta = \frac{\text{Number of blocks minted by the pool}}{\text{Number of blocks minted during the epoch}}$.

The pool’s perfomance factor is the ratio $\beta/\tilde{\sigma}$ which gives a metric of **how ideally** the pool performed during the epoch.

Due to the randomness of the pool selection process, the ratio $\beta/\tilde{\sigma}$ will fluctuate from epochs to epochs: sometimes it will be greater than 1 as the pool was lucky and minted more blocks than expected, and sometimes it will be lower than $1$, the pool was unlucky and minted less blocks than expected. But, in average, the ratio $\beta/\tilde{\sigma}$ should be equal to 1 (in practice, extremely close to 1).

_⚠️_ If a pool does not operate correctly and has downtime during a mining period, the performance indicator $\beta/\tilde{\sigma}$ will be **biased negatively** and will be **lower than 1 in average**. At [Stake.Green](https://stake.green) we commit to the best standards of pool management and to having an average performance indicator the closest to **1**. You can check our current average performance indicator on our [ADA Pool Specification](#) page.

## The influence of non-delegated stake

As mentionned above, roughly **30%** of the total ADA supply is not currently being delegated. This imply that: $\sum_{\text{mining pools}} f(s,\sigma) < R$, meaning that not all the available reward is distributed at each epoch. The remaning rewards go back to the reserve. Hence, it is in the best collective interest to delegate one's ADA as it increases the amount of reward received by all. If you have not delegated your ADA yet, we would be happy to welcome you on [Stake.Green](https://stake.green) ADA delegation service!

## Customer reward

We can finally characterise the actual reward that the pool's customers will receive for the epoch!

As we established, the total reward for the pool is $R_\text{pool} = \beta/\tilde{\sigma} \cdot f(s,\sigma)$. Before $R_\text{pool}$ being redistributed to customers, the following are substracted from it:

1. The declared operating costs of the pool, find ours [here](#)
2. The declared margin of the pool, find our margin [here](#)

Finally, the remaining amount of reward is redistributed to customers proportionally to their stake in the pool.

## Stake.Green reward calculator

Use our [Reward Calculator](#) to get a prediction of the rewards and APY that you will be getting by delegating to us!

## Conclusion

Hopefully, in this article, we will have convinced you that the Cardano blockchain provides a very transparent staking rewards system.

However, although that system attributes rewards automatically, the technical quality of the pool management **is key** in delivering the highest possible return for the pool's customers.

This is why, at [Stake.Green](https://stake.green) we focus all our efforts in maintaining a state-of-the-art Cardano mining pool and we would be more than happy to welcome you aboard!
