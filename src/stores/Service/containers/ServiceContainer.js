import { createContainer } from 'react-sweet-state';
import Store from '../index';
import { GiphyService } from '../../../services';
const Container = createContainer(Store, {
  onInit: () => ({ setState }, { service }) => {
    switch (service) {
      case 'giphy':
        setState({ service: GiphyService });
        break;
      default:
        throw new Error('ServiceContext require service name to be provided!');
    }
  }
});

export default Container;
