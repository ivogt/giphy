import React from 'react';
import HomePage from '../pages/HomePage';
import PhotosPage from '../pages/PhotosPage';

export default {
  home: {
    path: '/',
    component: HomePage,
    exact: true
  },
  photos: {
    path: '/photos',
    component: props => <PhotosPage {...props} defaultQuery="kittens" />,
    exact: true
  },
  photos2: {
    path: '/another-photos',
    component: props => <PhotosPage {...props} defaultQuery="puppies" />,
    exact: true
  }
};
