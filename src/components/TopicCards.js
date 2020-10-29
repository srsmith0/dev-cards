import React from "react";
import "../style/topicCardsStyle.css";
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


  renderCards = (cards) => {
    return cards.map(card => <ShowCard card={card} removeCard={this.removeCard} />)
  }

  render() {
      const {id} = this.props.match.params;
      const {getCards} = this.props;
  return (
    <>
    <h1 className="topic-header">{this.props.location.state.topic}</h1>
    <div className="topic-card-buttons">
    <Button onClick={() => this.props.history.push('/')}>Go Back</Button>
    <Button onClick={() => this.props.getCards(id)}>Reset Cards</Button>
    </div>
    <NewCardForm topicId={this.props.match.params.id} getCards={getCards}/>
    <div className="card-grid">
    {this.renderCards(this.props.cards)}
    </div>
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
