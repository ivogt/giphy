import {
  VIEW_OPTIONS,
  ANIMATE_OPTIONS,
} from '../constants';

export default {
  setView: (value) => ({ setState, getState }) => {
    if(!VIEW_OPTIONS.filter(([x])=>x===value).length){
      throw  new Error("Invalid view options!");
    }
    setState({
      view: value
    });
  },
  setAnimate: (value) => ({ setState, getState }) => {
    if(!ANIMATE_OPTIONS.filter(([x])=>x===value).length){
      throw  new Error("Invalid view options!");
    }
    setState({
      animate: value
    });
  }
};
