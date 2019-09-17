import { createSubscriber } from "react-sweet-state";
import Store from "../index";
import { ViewSelector } from "../selectors";

export default createSubscriber(Store, {
  selector: ViewSelector
});
