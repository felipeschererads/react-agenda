import React from "react";
import { connect } from "react-redux";
import ContatoList from "../../components/ContatoList/ContatoList";
import SearchContato from "../../components/SearchContato/SearchContato";

const Home = props => {
  const { contatos } = props;

  console.log(contatos);

  return (
    <>
      <SearchContato />
      <ContatoList contatos={contatos} />
    </>
  );
};

const mapStateToProps = store => ({
  contatos: store.contatoReducer.contatos
});

export default connect(mapStateToProps)(Home);
