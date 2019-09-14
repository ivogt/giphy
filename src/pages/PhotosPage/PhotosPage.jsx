import React, { Component } from 'react';
import { ServiceContainer, ServiceSubscriber } from '../../stores/Service';
import {
  LoadingSubscriber,
  ImagesSubscriber,
  ImagesContainer
} from './stores/Images';

import PhotoCard from './components/PhotoCard';
import Spinner from '../../components/Spinner';

const Home = props => {
  return (
    <div>
      <ServiceContainer service="giphy">
        <ServiceSubscriber>
          {({ service }) => (
            <ImagesContainer api={service}>
              <div className="hero">
                <h1 className="title">Giphy Photo Stream</h1>
                <p className="description" />
                <ImagesSubscriber>
                  {images => {
                    return images.map(img=><PhotoCard key={img.id} {...img}/>);
                  }}
                </ImagesSubscriber>
                <LoadingSubscriber>
                  {(loading)=> loading ? <Spinner /> : ""}
                </LoadingSubscriber>
              </div>
            </ImagesContainer>
          )}
        </ServiceSubscriber>
      </ServiceContainer>
    </div>
  );
};

export default Home;
