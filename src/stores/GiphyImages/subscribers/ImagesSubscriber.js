import { createSubscriber } from "react-sweet-state";
import Store from "../index";
import Selector from "../selectors/ImagesSelector";

const ImagesSubscriber = createSubscriber(Store, {
  selector: Selector
});
export default ImagesSubscriber;
