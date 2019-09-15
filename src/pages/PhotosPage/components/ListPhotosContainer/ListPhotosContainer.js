import React from 'react';
import { ImagesSubscriber, useImagesStore } from '../../store';
import PhotoCard from '../PhotoCard';
import useInfiniteScroll from '../../../../components/useInfiniteScroll';

const ListContainer = () => {
  const [, { load }] = useImagesStore(); // loads only actions
  const ref = useInfiniteScroll(load);
  return (
    <div ref={ref} className="row">
      <ImagesSubscriber>
        {images =>
          images.map((img, i) => <PhotoCard key={`${i}` + img.id} {...img} />)
        }
      </ImagesSubscriber>
    </div>
  );
};

export default ListContainer;
