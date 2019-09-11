import { createHook } from "react-sweet-state";
import Store from "../ImagesStore";
import Selector from "../selectors/ImagesSelector";

export default createHook(Store, {
  selector: Selector
});
