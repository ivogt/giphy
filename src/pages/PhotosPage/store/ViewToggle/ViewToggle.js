import { createStore } from 'react-sweet-state';
import Actions from './actions';
import { COLMN_THREE , ANIMATE } from './constants';
export default createStore({
  // optional, mostly used for easy debugging
  name: 'ViewToggle',
  // value of the store on initialisation
  initialState: {
    animate : ANIMATE,
    view: COLMN_THREE
  },
  // actions that trigger store mutation
  actions: Actions
});
