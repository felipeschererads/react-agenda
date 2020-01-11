import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";

import { Creators as ContatoActions } from "../../redux/ducs/contatos";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from "@material-ui/core";
import "@material-ui/icons";

const Header = props => {
  const dispatch = useDispatch();

  //const contatos = useSelector(state => state.contatoReducer.data);

  const [open, setOpen] = useState(false);

  const [form, setState] = useState({
    nome: "",
    email: "",
    telefone: ""
  });

  const clickAdicionar = () => {
    setOpen(true);
  };

  const salvarContato = e => {
    e.preventDefault();
    if (form.nome.trim() === "") return null;
    dispatch(
      ContatoActions.addContato({
        nome: form.nome,
        email: form.email,
        telefone: form.telefone
      })
    );
    setOpen(false);
  };

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const classes = props.classes;

  /**********************************/
  //aplicar mask de fone

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Agenda</Typography>
          <Button color="inherit" onClick={clickAdicionar}>
            Adicionar
          </Button>

          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Criar novo contato</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="nome"
                label="Nome"
                type="text"
                fullWidth
                name="nome"
                value={form.nome}
                onChange={updateField}
              />

              <TextField
                margin="dense"
                id="email"
                label="E-mail"
                type="email"
                fullWidth
                name="email"
                value={form.email}
                onChange={updateField}
              />

              <TextField
                margin="dense"
                id="telefone"
                label="Fone"
                type="text"
                fullWidth
                name="telefone"
                value={form.telefone}
                onChange={updateField}
              >
                <InputMask mask="(99) 9 9999-9999" maskChar=" " />
              </TextField>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="primary">
                Cancelar
              </Button>
              <Button onClick={salvarContato} color="primary">
                Salvar
              </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </div>
  );
};
/*
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addContato }, dispatch);

const mapStateToProps = store => ({
  contatos: store.contatoReducer.contatos
});*/

//export default Header;
export default Header;
