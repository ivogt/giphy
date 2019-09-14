import { BaseURL, DefaultTimeout, ApiKey } from './constants';
import Request from './httpRequest';
import axios from 'axios';
import Giphy from './service';
const instance = Request(
  axios.create({
    baseURL: BaseURL,
    timeout: DefaultTimeout
  })
);

export default Giphy(instance,ApiKey);
