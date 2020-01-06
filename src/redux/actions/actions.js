import { GET_CONTATO, ADD_CONTATO } from "./actionTypes";

//será chamado o método add contato e será passado um novo contato para ele
export const getContato = contatos => ({
  type: GET_CONTATO,
  contatos
});

export const addContato = contatos => ({
  type: ADD_CONTATO,
  contatos
});
