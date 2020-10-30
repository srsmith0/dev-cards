import React from "react";
import "../style/topicCardsStyle.css";
import api from "../apis/cards";
import {connect} from 'react-redux'
import {getCards, deleteCard} from '../actions'
import ShowCard from "./ShowCard";
import NewCardForm from "./NewCardForm";
import { Button } from "@material-ui/core";

class TopicCards extends React.Component {

  setTopicTitle = (id) => {
    return this.props.topics.map(topic => topic.id === id ? topic.topic : null);
  }

  componentDidMount() {
    this.props.getCards(this.props.match.params.id)
  }
    
  removeCard = async (id) => {
    this.props.deleteCard(id);
    await api.delete(`/cards/${id}`);
  }


  renderCards = (cards) => {
    return cards.map(card => <ShowCard key={card.id} card={card} removeCard={this.removeCard} />)
  }

  render() {
      const {id} = this.props.match.params;
      const {getCards} = this.props;
  return (
    <>
    <h1 className="topic-header">{this.setTopicTitle(this.props.match.params.id)}</h1>
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
    topics: state.topics,
  };
};

export default connect(mapStateToProps, {getCards, deleteCard})(TopicCards);
