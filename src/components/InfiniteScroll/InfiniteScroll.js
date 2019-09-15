import React,{ useEffect, useRef } from 'react';
import Debounce from '../../utils/debounce';
const noop = ()=>{};

export default ({children,onBottom=noop}) => {
  const ref = useRef(),
    isBottom = () => {
      return (
        Math.abs(ref.current.getBoundingClientRect().bottom) <=
        window.innerHeight
      );
    },
    trackScrolling = Debounce(e => {
      if (ref.current && isBottom()) return onBottom();
    }, 20);

  useEffect(() => {
    trackScrolling();
    document.addEventListener('scroll', trackScrolling, false);
    return () => {
      document.removeEventListener('scroll', trackScrolling, false);
    };
  });

  return (<div ref={ref}>{children}</div>);
};
