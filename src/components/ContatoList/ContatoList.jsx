import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ContatoList = props => {
  const { contatos } = props;
  return (
    <TableContainer component={Paper}>
      <Table className="table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Telefone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contatos.map(row => (
            <TableRow key={row.nome}>
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.telefone}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContatoList;
