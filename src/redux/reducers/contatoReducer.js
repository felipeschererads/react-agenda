//recebe um novo estado e atualiza a store
//a action que chaa o reducer

import { GET_CONTATO, ADD_CONTATO } from "../actions/actionTypes";
import { defineState } from "redux-localstore";

const defaultState = {
  contatos: [
    {
      nome: "Felipe",
      email: "felipescherer@gmail.com",
      telefone: "(54) 99123-3114"
    },
    {
      nome: "Karin",
      email: "karin@gmail.com",
      telefone: "(54) 99123-3114"
    }
  ]
};

const initialState = defineState(defaultState)("contatoReducer");

export const contatoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTATO:
      return {
        ...state,
        contatos: action.contatos
      };
    case ADD_CONTATO:
      console.log("ADD_CONTATO:" + action.contatos);
      return {
        ...state,
        contatos: [...state.contatos, action.contatos]
      };
    default:
      return state;
  }
};
