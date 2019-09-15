import { createContainer } from 'react-sweet-state';
import Store from '../index';

const Container = createContainer(Store, {
  onInit: () => ({ getState, actions:{ search }} , { query="" }) => {

    if(!getState().data.length) search(query);
  }
});
export default Container;
