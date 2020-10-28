import React from "react";
import api from "../apis/cards";
import { connect } from 'react-redux';
import { toggleAnswer, correctAnswer, addToFocus, deleteCard } from "../actions";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ShowCard = ({ toggleAnswer, cards, correctAnswer, addToFocus, deleteCard }) => {

  const hideAnswer = ({showAnswer, answer}) => {
    return <h4>{showAnswer ? answer : "..."}</h4>;
  };

  const removeCard = async (id) => {
    deleteCard(id);
    await api.delete(`/cards/${id}`);
  }

  const renderCard = () => {
      return (
        cards.map((card => (
        <div key={card.id} className="card-container">
          <h3>{card.question}</h3>
          {hideAnswer(card)}
          <Button onClick={() => toggleAnswer(card.id)}>
            {card.showAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
          <Button onClick={() => correctAnswer(card.id)}>Correct</Button>
          <Button onClick={() => addToFocus(card)}>Add to Focus</Button>
          <Link to={{
            pathname:`/edit/${card.id}`,
            state:{id: card.id, question: card.question, answer: card.answer, topicId: card.topicId}
          }}>Edit</Link>
          <Button onClick={() => removeCard(card.id)}>Delete</Button>
        </div>
        )))
      );
  };

  return <div className="cards-view">{renderCard()}</div>;
};

export default connect(null, { correctAnswer, toggleAnswer, addToFocus, deleteCard })(ShowCard)
