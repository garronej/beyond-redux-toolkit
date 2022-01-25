<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/151054088-b21c1cd6-912a-4dcf-b54d-af74e8632620.png">  
</p>
<p align="center">
    <i>📐 Utilities for implementing <b>clean architecture</b> using <b>Redux</b> 📐</i>
    <br/>
    <i>🔩 Focuses on achieving great type inference 🔩</i>
    <br/>
    <i>🎯 Easy to navigate, easy to maintain 🎯</i>
    <br>
    <br>
    <a href="https://github.com/garronej/redux-clean-architecture/actions">
      <img src="https://github.com/garronej/redux-clean-architecture/workflows/ci/badge.svg?branch=main">
    </a>
    <a href="https://bundlephobia.com/package/redux-clean-architecture">
      <img src="https://img.shields.io/bundlephobia/minzip/redux-clean-architecture">
    </a>
    <a href="https://github.com/garronej/redux-clean-architecture/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/redux-clean-architecture">
    </a>
</p>

This repo aims to be a guide on how to implement Clean Architecture using [`@reduxjs/toolkit`](https://redux-toolkit.js.org).  
The NPM library `redux-clean-architecture` is a set of type-level utilities that you will need to achieve perfect type inference.

-   [Benefits](#benefits)
-   [Install / Import](#install--import)
-   [Examples setups](#examples-setups)
    -   [Canonical setup](#canonical-setup)
    -   [TODO List](#todo-list)
    -   [Enterprise grade app](#enterprise-grade-app)
-   [Opinionated restrictions](#opinionated-restrictions)
-   [Starting the demo app](#starting-the-demo-app)

# Benefits

-   Clears guideline about how to organize your code in accordance with the clean architecture principles.
-   No need to explicitly call `dispatch()` on the UI side.
-   Strict isolation between the UI and the core. Port your web app to React Native or switch to another
    UI framework without having to re-write a single line of the core logic.
-   Stop wondering about how things should be named. Thanks to the use of
    [TypeScript's template literal types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
    Name things once then let intellisense guide you.

https://user-images.githubusercontent.com/6702424/147381177-346293ec-8562-4aa4-ac62-45a5404d7ccc.mov

# Install / Import

```bash
$ yarn add @reduxjs/toolkit redux-clean-architecture
```

# Examples setups

## Canonical setup

A canonical setup can be found here: [👉 `src/test/demo-app`👈 ](https://github.com/garronej/redux-clean-architecture/tree/main/src/test/demo-app).

## TODO List

A todo list example can be found [👉**here**👈](https://github.com/garronej/redux-clean-example).  
Credit goes to [@leosuncin](https://github.com/leosuncin).

<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/151073421-4ec19603-b87c-4e68-a338-7baa7dea0be2.png">  
</p>

## Enterprise grade app

You can consult the source code of [onyxia-web](https://github.com/InseeFrLab/onyxia-web) to see how `redux-clean-architecture` is used in a real world complex application.

<p align="center">
  <a href="https://github.com/InseeFrLab/onyxia-web">
  <i>Onyxia: A data science-oriented container launcher.</i>
    <img src="https://user-images.githubusercontent.com/6702424/139264787-37efc793-1d55-4fa4-a4a9-782af8357cff.png">
  </a>
</p>

# Opinionated restrictions

Because a [programing paradigm work by removing a freedom of some kind](https://youtu.be/wyABTfR9UTU?t=109), this is what you **can't** do if you chose to use this toolkit:

-   The UI isn't allowed to dispatch action directly, the UI dispatch thunks (synchronous or asynchronous)
    that internally dispatches actions. This approach forces you to keep your reducers plain and simple and to think
    of your thunks as the API exposed to the UI.
-   I advise against using `createAsyncThunk()`. It's preferable to decide what
    actions get dispatched when a thunk start, when it fails and when it completes
    on a case-by-case basis, pending, rejected and fulfilled is a one-size-fits-**not**-all
    patterns.
    If you do choose to use it anyway, redux-clean-architecture will comply but you will loose some degree
    of type safety.

# Starting the demo app

```bash
git clone https://github.com/garronej/redux-clean-architecture
cd redux-clean-architecture
yarn
yarn build
yarn start-demo-app
```
