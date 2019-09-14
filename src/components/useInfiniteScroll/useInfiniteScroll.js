import { useEffect, useRef } from 'react';
import Debounce from '../../utils/debounce';

export default cb => {
  const ref = useRef(),
    isBottom = () => {
      return (
        Math.abs(ref.current.getBoundingClientRect().bottom) <=
        window.innerHeight
      );
    },
    trackScrolling = Debounce(e => {
      if (!!cb && ref.current && isBottom()) return cb();
    }, 100);

  useEffect(() => {
    trackScrolling();
    document.addEventListener('scroll', trackScrolling, false);
    return () => {
      document.removeEventListener('scroll', trackScrolling, false);
    };
  });

  return ref;
};
