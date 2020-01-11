import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";

import { Creators as ContatoActions } from "../../redux/ducs/contatos";

const SearchContato = ({ dispatch }) => {
  const [form, setState] = useState({
    filtro: ""
  });

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
    dispatch(ContatoActions.filtroContato(e.target.value));
  };

  return (
    <form>
      <TextField
        id="standard-full-width"
        label="Contato"
        style={{ margin: 8 }}
        placeholder="Buscar..."
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        name="filtro"
        value={form.filtro}
        onChange={updateField}
      />
    </form>
  );
};

export default connect()(SearchContato);
