# Giphy

Giphy is a single page web application used to display animations from Giphy API and optionally filter them by search input. Animations can be still or active, also can change the layout from three columns to one.

### [Live Demo](https://giphy-photos-ivo.netlify.com/)

## Overview

When thinking on the application's state management I've decided to
preset you the `Sweet-state` for React. It overs all of the Redux features [Actions,Subscribers,Selector,Stores, Middlewares] and extends with Containers & Hooks out-of-the-box.

I've set two URLs _Gifs_ and _Other Gifs_ page which re-uses the GifsPage component , however you may notice how state of the *Display:[list/single] and Animation:[still/animate] (ViewToggle store)* is global while *Search (GiphyImages store)* is per page. This is achieved simply by setting the Containers scope.

```js
//src/pages/GifsPage.js (code omitted for brevity)

const GifsPage = ({ location , defaultQuery }) => {

  return (
    <ViewToggleContainer isGlobal>
      {/* remembers state across pages */}
      <ImagesContainer scope={`context-${location.pathname}`} query={defaultQuery}>
        {/* remembers state for scope */}

```

## Installing / Getting started

### 1. Download & extract or clone the repository

### 2. Open project directory to install the dependencies

```sh
    nvm use
    npm install
```

### 3. Run the app in the development mode

```sh
    npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing

```sh
    npm test
```

  > ^ Launches the test runner in the interactive watch mode.
## Known issues:
  Obviously wasn't able to cover all features with tests.

## Project structure
```
├── README.md
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── precache-manifest.[9a19a7b8c606446b4975c8206b85814c].js
│   ├── robots.txt
│   ├── service-worker.js
│   └── static
│       ├── css
│       │   ├── main.[26244c2d].chunk.css
│       │   └── main.[26244c2d].chunk.css.map
│       └── js
│           ├── main.[9f6894e8].chunk.js
│           ├── main.[9f6894e8].chunk.js.map
│           ├── runtime~main.[d7a43201].js
│           └── runtime~main.[d7a43201].js.map
├── netlify.toml
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── InfiniteScroll
    │   │   ├── InfiniteScroll.js
    │   │   └── index.js
    │   ├── Nav
    │   │   ├── Nav.js
    │   │   ├── Nav.scss
    │   │   └── index.js
    │   └── Spinner
    │       ├── Spinner.js
    │       ├── Spinner.scss
    │       └── index.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── pages
    │   ├── GifsPage
    │   │   ├── GifsPage.jsx
    │   │   ├── GifsPage.scss
    │   │   ├── components
    │   │   │   ├── PhotoCard
    │   │   │   │   ├── PhotoCard.js
    │   │   │   │   ├── PhotoCard.scss
    │   │   │   │   ├── index.js
    │   │   │   │   └── utils
    │   │   │   │       └── cropText.js
    │   │   │   ├── Search
    │   │   │   │   ├── Search.js
    │   │   │   │   ├── Search.scss
    │   │   │   │   └── index.js
    │   │   │   └── ViewSwitcher
    │   │   │       ├── ViewSwitcher.js
    │   │   │       ├── ViewSwitcher.scss
    │   │   │       └── index.js
    │   │   ├── constants
    │   │   │   ├── index.js
    │   │   │   └── search.js
    │   │   ├── index.js
    │   │   └── store
    │   │       ├── ViewToggle
    │   │       │   ├── ViewToggle.js
    │   │       │   ├── actions
    │   │       │   │   ├── actions.js
    │   │       │   │   └── index.js
    │   │       │   ├── constants
    │   │       │   │   ├── index.js
    │   │       │   │   └── options.js
    │   │       │   ├── containers
    │   │       │   │   ├── ViewToggleContainer.js
    │   │       │   │   └── index.js
    │   │       │   ├── index.js
    │   │       │   ├── selectors
    │   │       │   │   ├── ViewSelector.js
    │   │       │   │   └── index.js
    │   │       │   └── subscribers
    │   │       │       ├── ViewSubscriber.js
    │   │       │       └── index.js
    │   │       └── index.js
    │   └── HomePage
    │       ├── HomePage.jsx
    │       └── index.js
    ├── routes
    │   ├── Routes.jsx
    │   ├── index.js
    │   ├── routesConfig.js
    │   └── utils
    │       ├── createRoutes.js
    │       └── index.js
    ├── serviceWorker.js
    ├── services
    │   ├── Giphy
    │   │   ├── GiphyService.js
    │   │   ├── constants
    │   │   │   ├── constants.js
    │   │   │   └── index.js
    │   │   ├── httpRequest.js
    │   │   ├── index.js
    │   │   ├── service
    │   │   │   ├── giphy.js
    │   │   │   └── index.js
    │   │   └── utils
    │   │       └── normalizeImagesResponse.js
    │   └── index.js
    ├── stores
    │   ├── GiphyImages
    │   │   ├── ImagesStore.js
    │   │   ├── actions
    │   │   │   ├── ImagesStoreActions.js
    │   │   │   ├── ImagesStoreActions.test.js
    │   │   │   └── index.js
    │   │   ├── containers
    │   │   │   ├── ImagesContainer.js
    │   │   │   └── index.js
    │   │   ├── hooks
    │   │   │   ├── ImagesSearchHook.js
    │   │   │   ├── ImagesStoreHook.js
    │   │   │   └── index.js
    │   │   ├── index.js
    │   │   ├── selectors
    │   │   │   ├── ImagesSearchSelector.js
    │   │   │   ├── ImagesSelector.js
    │   │   │   ├── LoadingSelector.js
    │   │   │   └── index.js
    │   │   └── subscribers
    │   │       ├── ImagesSubscriber.js
    │   │       ├── LoadingSubscriber.js
    │   │       └── index.js
    │   ├── config.js
    │   └── index.js
    ├── styles
    │   ├── App.scss
    │   ├── index.scss
    │   └── variables.scss
    └── utils
        └── debounce.js
```
## Used Technologies

- React
- React Router
- React Sweet state
- Ramda
- Jest
- Sass
