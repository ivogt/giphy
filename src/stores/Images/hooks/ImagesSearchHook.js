import { createHook } from 'react-sweet-state';
import Store from '../index';
import { ImagesSearchSelector } from '../selectors';
export default createHook(Store, {
  selector: ImagesSearchSelector
});
