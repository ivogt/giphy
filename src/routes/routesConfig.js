import React from 'react';
import HomePage from '../pages/HomePage';
import GifsPage from '../pages/GifsPage';

export default {
  home: {
    path: '/',
    component: HomePage,
    exact: true
  },
  photos: {
    path: '/gifs',
    component: props => <GifsPage {...props} defaultQuery="kittens" />,
    exact: true
  },
  photos2: {
    path: '/other-gifs',
    component: props => <GifsPage {...props} defaultQuery="puppies" />,
    exact: true
  }
};
