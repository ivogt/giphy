import { createStore } from 'react-sweet-state';
import Actions from './actions';

const Store = createStore({
  // optional, mostly used for easy debugging
  name: 'GiphyImages',
  // value of the store on initialisation
  initialState: {
    loading: false,
    data: [],
    page:0,
    q:'kittens',
    pagination: {
      "total_count" : 0
    }
  },
  // actions that trigger store mutation
  actions: Actions
});

export default Store;
