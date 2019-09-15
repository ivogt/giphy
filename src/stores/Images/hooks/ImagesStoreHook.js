import { createHook } from "react-sweet-state";
import Store from "../index";
export default createHook(Store, {
  selector: ()=>null // prevent rerender
});
