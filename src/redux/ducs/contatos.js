import { defineState } from "redux-localstore";

export const Types = {
  ADD: "contato/ADD"
};

const defaultState = {
  data: [
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

//actions
const INITIAL_STATE = defineState(defaultState)("contatoReducer");

export const contatoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD:
      console.log("ADD_CONTATO:" + action.payload);

      return {
        ...state,
        data: [...state.data, action.payload.contato]
      };
    default:
      return state;
  }
};

export const Creators = {
  addContato: contato => ({
    type: Types.ADD,
    payload: {
      contato
    }
  })
};
