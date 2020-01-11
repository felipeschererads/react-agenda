import { defineState } from "redux-localstore";

export const Types = {
  ADD: "contato/ADD",
  FILTRO: "contato/FILTRO"
};

const defaultState = {
  data: [
    {
      nome: "Contato 1",
      email: "contact1@gmail.com",
      telefone: "(54) 0000-0000"
    },
    {
      nome: "Contato 2",
      email: "contact2@gmail.com",
      telefone: "(54) 1111-1111"
    }
  ],
  filtro: ""
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

    case Types.FILTRO:
      return {
        ...state,
        filtro: action.payload.filtro,
        data: [...state.data]
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
  }),

  filtroContato: filtro => ({
    type: Types.FILTRO,
    payload: {
      filtro
    }
  })
};
