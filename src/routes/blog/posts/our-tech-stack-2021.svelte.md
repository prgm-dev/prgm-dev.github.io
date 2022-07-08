---
title: Our tech stack for 2021
dateCreated: 2021-07-06
description: "Through our experience building many projects in the span of a few months,
we’ve completely revamped our 2020 stack to improve our efficiency at
testing new ideas faster than before."
---

**TL;DR:** This year, we are trying **Apollo GraphQL** on the Backend, and **Svelte Kit** on the Frontend,
both with **Typescript**.

Want to know how it's working out for us? Read on!

**Note:** If you're more into REST APIs, our tech stack last year achieved that very efficiently with Python's **FastAPI**.
See our [article here](./our-tech-stack-2020)

## Backend: GraphQL + Apollo Server

In our quest to find a faster way to build Backend APIs, we came across
[Apollo GraphQL](https://www.apollographql.com).

[GraphQL](https://graphql.org) is great because it allows you to build your APIs in a schema-first manner.
This allows you to describe all of your data models (and their relationships) in one place,
which is great for backend and frontend developers alike as it provides a clear and concise reference
of all the data your API will expose.

Additionally, GraphQL allows you to **organize your data in a way that makes sense to you**,
rather than trying to shoe-horn it into your database.

GraphQL also **works very well with the type system of Typescript**, improving developer
experience with tools like auto-completion, auto-documentation, and type-checkers,
helping to catch bugs and design errors early.

[Apollo Server](https://www.apollographql.com/docs/apollo-server/)
is great too, because it provides a developer-efficient way of implementing resolvers.
Resolvers are the actual functions that take in a GraphQL query and return the appropriate data.
Apollo allows you to organize your resolvers in a modular way. It then figures out relationships
in your schema, **implements the boring boilerplate resolvers for you** and lets you implement the few complex
one, all while making it super easy to test them.

Similarly to a REST API backend, the bulk of your GraphQL implementation will be in your resolvers,
which makes Apollo Server feel like a breath of fresh air.

## Frontend: SvelteKit

Nuxt.JS from [our stack last year](./our-tech-stack-2020) was great, but we wanted something faster to iterate.

We are eagerly [waiting for Nuxt 3 to come out](https://unofficial-nuxt3-countdown.netlify.app),
as it would leverage the many improvements of Vue 3, like the improved
support for Typescript. Unfortunately, at the time of writing (July 2021), it's not even in Beta yet.

After researching and trying different alternatives, we found [SvelteKit](https://kit.svelte.dev),
which is a framework around [Svelte](https://svelte.dev).

The promise of Svelte is to provide the developer with an experience to the likes of reactive frameworks like
Vue and React, but instead of relying on a virtual DOM like its counterpart, **Svelte applies diffing algorithms
directly on the Browser's DOM**, using vanilla JS and human-readable HTML and CSS.

While the speed improvements are noticeable sometimes and appreciable, they were not our main
concern as Nuxt, and more particularly Vue was already quite efficient. But Svelte conquered us
through its very elegant design, requiring code that more closely resembles native JS,
which means less documentation to read, less edge cases, and simpler developer onboarding.

## What's next

We're lucky to have many projects to try many different technologies, and
so far this year, this is what we have decided to go with. We'll keep this article updated
as we get more familiar with the technologies.

In the meantime, you can find out more about our [2020 Tech Stack](./our-tech-stack-2020), which focuses on REST APIs
and uses Nuxt.JS on the frontend.
