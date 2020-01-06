import React from "react";
import {
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

const Contato = props => {
  const [open, setOpen] = React.useState(false);
  // const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const setModalShow = () => {
    setOpen(true);
  };

  /**********************************/
  //aplicar mask de fone

  return (
    <Dialog
      {...props}
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Criar novo contato</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nome"
          type="text"
          fullWidth
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
          id="fone"
          label="Fone"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleClose} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Contato;
