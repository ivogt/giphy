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
    component: PhotosPage,
    exact: true
  }
};
