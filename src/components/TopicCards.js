import React from "react";
import "../style/cardStyle.css";
import api from "../apis/cards";
import {connect} from 'react-redux'
import {getCards, deleteCard} from '../actions'
import ShowCard from "./ShowCard";
import NewCardForm from "./NewCardForm";
import { Button } from "@material-ui/core";

class TopicCards extends React.Component {

  componentDidMount() {
    this.props.getCards(this.props.match.params.id)
  }
    
  removeCard = async (id) => {
    this.props.deleteCard(id);
    await api.delete(`/cards/${id}`);
  }

  render() {
      const {id} = this.props.match.params;
      const {getCards} = this.props;
  return (
    <>
    <Button onClick={() => this.props.history.push('/')}>Go Back</Button>
    <Button onClick={() => this.props.getCards(id)}>Reset Cards</Button>
    <ShowCard cards={this.props.cards} removeCard={this.removeCard}/>
    <NewCardForm topicId={this.props.match.params.id} getCards={getCards}/>
    </>
  )
    }
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps, {getCards, deleteCard})(TopicCards);
