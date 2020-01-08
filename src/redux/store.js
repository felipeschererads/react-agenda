import { createStore } from "redux";
//centraliza todos os reducers da aplicação
import Reducers from "./ducs/reducers";
import storeSynchronize from "redux-localstore";

export const Store = createStore(Reducers);

storeSynchronize(Store);
