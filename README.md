# Giphy Photos

Giphy Photo is a single page web application used to display photos from Giphy API and optionally filter them by search input.

### [Live Demo](https://giphy-photos-ivo.netlify.com/)

## Overview

When thinking on the application's state management I've decided to
preset you the `Sweet-state` for React. It overlaps all the Redux features [Actions,Subscribers,Selector] and extends with Containers & Hooks out-of-the-box.

I've set two URLs _Photos_ and _Another Photos_ page which re-uses the PhotosPage component , however you may notice how state of the *Display:[list/single] and Animation:[still/animate] (ViewToggle store)* is global while *Search (GiphyImages store)* is per page. This is achieved simply by setting the Containers scope.

```js
//src/pages/PhotosPage.js (code omitted for brevity)

const Home = ({ location , defaultQuery }) => {
  /* this page renders only once */
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

## Used Technologies

- React
- React Router
- React Sweet state
- Ramda
- Jest
- Sass
