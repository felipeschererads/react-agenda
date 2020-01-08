import React from "react";
import { TextField } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const SearchContato = props => {
  //const [open, setOpen] = React.useState(false);

  return (
    <TextField
      id="standard-full-width"
      label="Contato"
      style={{ margin: 8 }}
      placeholder="Digite..."
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};

export default SearchContato;
