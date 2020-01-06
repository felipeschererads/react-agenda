import React from "react";
import { connect } from "react-redux";
//import { withRouter } from "react-router-dom";
import ContatoList from "../../components/ContatoList/ContatoList";

const Home = props => {
  const { contatos } = props;

  console.log(contatos);

  return (
    <>
      <ContatoList contatos={contatos} />
    </>
  );
};

const mapStateToProps = store => ({
  contatos: store.contatoReducer.contatos
});

export default connect(mapStateToProps)(Home);
