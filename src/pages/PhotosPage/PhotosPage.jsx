import React from 'react';
import { LoadingSubscriber, ImagesContainer, ImagesSubscriber } from './store';

import Spinner from '../../components/Spinner';
import Search from './components/Search';
import PhotoCard from './components/PhotoCard';
import InfiniteScroll from '../../components/InfiniteScroll';

const Home = () => {
  return (
    <ImagesContainer>
      <div className="hero">
        <h1 className="title">Giphy Photo Stream</h1>
        <Search />
        <div className="row">
          <ImagesSubscriber>
            {(images, actions) => (
              <InfiniteScroll onBottom={actions.load}>
                {images.map((img, i) => (
                  <PhotoCard key={`${i}` + img.id} {...img} />
                ))}
              </InfiniteScroll>
            )}
          </ImagesSubscriber>
        </div>
        <div className="loading">
          <LoadingSubscriber>
            {loading => loading && <Spinner />}
          </LoadingSubscriber>
        </div>
      </div>
    </ImagesContainer>
  );
};

export default Home;
