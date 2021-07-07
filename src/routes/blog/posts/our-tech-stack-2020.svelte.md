---
title: Our tech stack for 2020
dateCreated: 2020-11-14
dateLastUpdated: 2021-07-02
description: "We learned a lot of new technologies this year.
Here are the technologies we used this year to build our products."
tags:
	- tech stack
---

**TL;DR:** We use **FastAPI** with **Python** on the Backend, **Nuxt.JS** with **Typescript** on the Frontend,
run our code on **Google Cloud**, and use MongoDB as our Database of choice.

Want to know how it worked out for us? Read on!

**Note:** We've **updated our tech stack for 2021**, and we also wrote [an article about it](./our-tech-stack-2021)

## Code

### Backend: Python + FastAPI + MongoDB

At [PRGM.dev](/), we have a common history of Data Science work. As such, Python is our de-facto language,
and the common denominator between us all.
We chose Python for our Backend as it meant we could all be quite efficient at it

We use [FastAPI](https://fastapi.tiangolo.com) for our Backend, using MongoDB as its storage layer.
It is a simpler, more modern approach to REST API designs in Python.
Its use of type annotation makes it very elegant, and an excellent match with MyPy that we integrated in
our CI/CD pipelines. Basically, you define Python classes with their expected fields and types,
provide them as arguments to your endpoints, and FastAPI performs automatic validation of inputs,
error formatting, and just reduces the amount of boilerplate code you have to write.

On server start, FastAPI compiles and exposes an [OpenAPI](https://www.openapis.org)
specification that we then use as documentation for frontend development,
or use to straight up generate client code for many client-side languages
like TypeScript or Swift, using tools like [OpenAPI generator](https://openapi-generator.tech).

In all, **FastAPI allowed us to design and experiment with new ideas faster**, while keeping a
clean and unambiguous specification that everyone could follow,
making for a nice development pace.

## Frontend: Nuxt.JS + Typescript

We chose [Nuxt.JS](https://nuxtjs.org) as our Frontend framework
as it combines many of the good parts from [Vue.js](https://vuejs.org)
and [React](https://reactjs.org)
-- namely, their reactive state management --
while avoiding their limitations and pitfalls.

[Nuxt.JS](https://nuxtjs.org) is mostly just [Vue.js](https://vuejs.org),
but with a much better integration with
server-side rendering for SEO/speed, and with support for ES6 modules out of the box.

On top of that, it allows you to easily integrate with Vue's native app-wide store, [Vuex],
and integrates with other packages like [Axios](https://axios-http.com), that our OpenAPI generator
outputed when provided with our FastAPI-built specification.
Overall, Nuxt provides a lot of flexibility when it comes to the design of your application,
while natively implementing boilerplate stuff like a service-worker, a progress bar
when navigating in the web app, and even a progressive web app that could work offline.

On top of that, we use Typescript to check our code for
undefined variables and other common mistakes, while providing the types
that are essential to writing fast and efficient code.

When we're experimenting with rapidly changing API data models, TypeScript's type system
offers a nice safety net.

## DevOps

### Code management: GitLab

We use [GitLab](https://about.gitlab.com/features/) for our source code management
(SCM).

Even on the free starter plan, GitLab has a lot of great features, including:

- **A built in CI/CD pipeline** We can test our code locally before pushing it,
  and also automatically deploy our code on every pull request.
- **An issue tracker** We use it to keep track of bugs, feature requests, and
  other issues that we want to tackle in the future.
- **A wiki** We use it to store documentation about our project,
  as well as for some snippets of our code.
- **A place where we can ask questions** We use it to discuss our code, and
  ask for help if needed.
- **It's open source** GitLab is open-source and we can host our own instance if we wish to.

### Code Quality: MyPy

This year, we integrated a static type checker for Python
in all our CI/CD pipelines.
At the time of writing, we're using [MyPy](https://github.com/python/mypy),
a static type checker that works with our code.

The major benefit of a static type checker is that it allows us to catch
many common mistakes at compile time,
like undefined variables or incorrect arguments passed to functions.

These errors can be caught when they happen, and the tests will fail,
avoiding a lot of headaches later.
With MyPy, we can also get some nice typesafety in Python, computers understand us better,
and auto-completion in IDEs is just all the more relevant.

And although MyPy does not avoid all the issues, it does catch a lot of them,
while not slowing down the development process.

### Servers: Google Cloud

This year, we finally gave a try to the serverless world.
The idea is to be able to scale dynamically, so that you don't have to provision servers and
then resize them later.
Instead, you can just define your code, its dependencies, and some properties,
and Google Cloud will handle the rest.

Here are some of the benefits we observed:

- **"It's cheaper."** Thanks to the autoscaling and the free tier,
  we don't need to worry about the cost of our servers.
  This means we can focus more on the code, and not worry about raising
  funds to pay for servers every month. This is ideal for MVPs, and means
  we can deploy as many previews of the code we want,
  improving our review feedback efficiency.
- **"The deployment process is faster."** Since we don't need to rely on
  a DevOps person to deploy our code, we can deploy it on every pull request.
- **"It allows us to focus more on the code."** As we don't need to worry about
  the servers, we can focus on the code by writing more tests, and
  integrating with libraries like FastAPI directly in the application.

### Databases: Mongo on Cloud Atlas

We use MongoDB as our database of choice, as it is simple, easy to use, and
really efficient in the way it stores data. We also use it for its high availability
and scalability features.

We've used a lot of other databases, and while they often have more advanced features,
MongoDB is the one that works best for us.

## Conclusion

We've been using all these tools for the past year, and we're really happy with them.

We're now more productive than ever, and we're working on new projects that will allow us to
increase our growth rate even further.

There's a lot about our stack that we were not able to touch on,
so if you want to know more about how we did it, or simply want to get in touch,
you can reach us at [contact@prgm.dev](mailto:contact@prgm.dev).
