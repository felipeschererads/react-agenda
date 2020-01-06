import React, { useState } from "react";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addContato } from "../../redux/actions/actions";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  FormControl,
  makeStyles
} from "@material-ui/core";
import "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const Header = props => {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const {
    addContato,
    contatos: { nome, email, telefone }
  } = props;

  // const classes = useStyles();

  /**********************************/
  const clickAdicionar = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const salvar = () => {
    addContato({ nome: newnome, email, telefone });
    setOpen(false);
  };

  inputChange = event => {
    setState({
      newnome: event.target.value
    });
  };

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
            onClose={handleClose}
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
                onChange={inputChange}
                type="text"
                value={nome}
              />

              <TextField
                margin="dense"
                id="email"
                label="E-mail"
                type="email"
                fullWidth
              />
              <TextField
                margin="dense"
                id="telefone"
                label="Fone"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={salvar} color="primary">
                Salvar
              </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addContato }, dispatch);

const mapStateToProps = store => ({
  contatos: store.contatoReducer.contatos
});

//export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
