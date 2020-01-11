import { createStore } from "redux";
//centraliza todos os reducers da aplicação
import Reducers from "./ducs/reducers";
import storeSynchronize from "redux-localstore";

//extensão para monitorar o estado do Redux (REDUX_DEVTOOLS_EXTENSION)

export const Store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

storeSynchronize(Store);
