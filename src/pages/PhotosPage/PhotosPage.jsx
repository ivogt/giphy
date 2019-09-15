import React from 'react';
import { GiphyService } from '../../services';
import { LoadingSubscriber, ImagesContainer } from './store';

import Spinner from '../../components/Spinner';
import ListContainer from './components/ListPhotosContainer';
import Search from './components/Search';

const Home = props => {
  return (
    <ImagesContainer api={GiphyService}>
      <div className="hero">
        <h1 className="title">Giphy Photo Stream</h1>
        <p className="description">
          <Search />
        </p>
        <ListContainer />
        <LoadingSubscriber>
          {loading => loading && <Spinner />}
        </LoadingSubscriber>
      </div>
    </ImagesContainer>
  );
};

export default Home;
