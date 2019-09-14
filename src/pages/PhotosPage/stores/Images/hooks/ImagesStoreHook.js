import { createHook } from "react-sweet-state";
import Store from "../ImagesStore";
import Selector from "../subscribers/ImagesSubscriber";

export default createHook(Store, {
  selector: Selector
});
