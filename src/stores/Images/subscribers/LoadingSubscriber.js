import { createSubscriber } from "react-sweet-state";
import Store from "../index";
import { LoadingSelector } from "../selectors";

const LoadingSubscriber = createSubscriber(Store, {
  selector: LoadingSelector
});
export default LoadingSubscriber;
