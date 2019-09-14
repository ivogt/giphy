import React from 'react';
import { ServiceContainer, ServiceSubscriber } from '../../stores/Service';
import { LoadingSubscriber, ImagesContainer } from './stores/Images';

import Spinner from '../../components/Spinner';
import ListContainer from './components/ListPhotosContainer';
import Search from './components/Search';

const Home = props => {
  return (
    <div>
      <ServiceContainer service="giphy">
        <ServiceSubscriber>
          {({ service }) => (
            <ImagesContainer api={service}>
              <div className="hero">
                <h1 className="title">Giphy Photo Stream</h1>
                <p className="description">
                  <Search />
                </p>
                <ListContainer />
                <LoadingSubscriber>{loading =>loading &&  (<Spinner />)}</LoadingSubscriber>
              </div>
            </ImagesContainer>
          )}
        </ServiceSubscriber>
      </ServiceContainer>
    </div>
  );
};

export default Home;
