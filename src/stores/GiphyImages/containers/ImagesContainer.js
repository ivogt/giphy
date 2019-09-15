import { createContainer } from 'react-sweet-state';
import Store from '../index';

const Container = createContainer(Store, {
  onInit: () => ({ actions:{ load }}) => {
    load();
  }
});
export default Container;
