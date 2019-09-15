import React from 'react';
import {
  ViewToggleContainer,
  LoadingSubscriber,
  ImagesContainer,
  ImagesSubscriber,
  ViewSubscriber
} from './store';

import Spinner from '../../components/Spinner';
import Search from './components/Search';
import PhotoCard from './components/PhotoCard';
import ViewSwitcher from './components/ViewSwitcher';
import InfiniteScroll from '../../components/InfiniteScroll';
import './PhotosPage.scss';

const Home = ({ location , defaultQuery }) => {
  /* this page renders only once */
  return (
    <ViewToggleContainer isGlobal>
      {/* remembers state across pages */}
      <ImagesContainer scope={`context-${location.pathname}`} query={defaultQuery }>
        {/* remembers state for this page only */}
        <div className="hero">
          <h1 className="title">Giphy Photo Stream</h1>
          <ViewSwitcher />
          <Search />
          <ViewSubscriber>
            {/* updates only if view changes */}
            {([{ view }, isLarge , isAnimating]) => (
              <div className={`row ${view}`}>
                <ImagesSubscriber>
                  {/* only hot section updates with ImagesStore  */}
                  {({images}, actions) => (
                    <InfiniteScroll onBottom={actions.load}>
                      {images.map((img, i) => (
                        <PhotoCard
                          key={`${i}${img.id}`}
                          {...img}
                          useLarge={isLarge}
                          animate={isAnimating}
                        />
                      ))}
                    </InfiniteScroll>
                  )}
                </ImagesSubscriber>
              </div>
            )}
          </ViewSubscriber>

          <div className="loading">
            <LoadingSubscriber>
              {loading => loading && <Spinner />}
            </LoadingSubscriber>
          </div>
        </div>
      </ImagesContainer>
    </ViewToggleContainer>
  );
};

export default Home;
