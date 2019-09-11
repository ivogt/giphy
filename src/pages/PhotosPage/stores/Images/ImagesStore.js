import { createStore, createSubscriber, createHook } from "react-sweet-state";
import Actions from "./actions";

const Store = createStore({
  // optional, mostly used for easy debugging
  name: "counter",
  // value of the store on initialisation
  initialState: {
    data: [],
  },
  // actions that trigger store mutation
  actions:Actions
});

export default Store;
