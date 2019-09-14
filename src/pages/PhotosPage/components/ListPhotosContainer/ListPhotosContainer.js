import React from 'react';
import { ImagesSubscriber, useImagesStore } from '../../stores/Images';
import PhotoCard from '../PhotoCard';
import useInfiniteScroll from '../../../../components/useInfiniteScroll';

const ListContainer = () => {
  const [, { load }] = useImagesStore(); // loads only actions
  const ref = useInfiniteScroll(load);
  console.log('ListContainer');
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
