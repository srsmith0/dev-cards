import React from "react";
import { connect } from 'react-redux';
import { toggleAnswer, correctAnswer, addToFocus } from "../actions";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ShowCard = ({ toggleAnswer, cards, correctAnswer, addToFocus, removeCard}) => {

  const hideAnswer = ({showAnswer, answer}) => {
    return <h4>{showAnswer ? answer : "..."}</h4>;
  };

  const renderCards = () => {
      return (
        cards.map((card => (
        <div key={card.id} className="card-container">
          <h3>{card.question}</h3>
          {hideAnswer(card)}
          <Button onClick={() => toggleAnswer(card.id)}>
            {card.showAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
          <Button onClick={() => correctAnswer(card.id)}>Correct</Button>
          {removeCard ? 
            <Button onClick={() => addToFocus(card)}>Add to Focus</Button> 
            : null}
          {removeCard ? 
            <Link to={{
              pathname:`/edit/${card.id}`,
              state:{id: card.id, question: card.question, answer: card.answer, topicId: card.topicId}
            }}>
              Edit</Link> 
            : null}
          {removeCard ? <Button onClick={() => removeCard(card.id)}>Delete</Button> : null}
        </div>
        )))
      );
  };

  return <div className="cards-view">{renderCards()}</div>;
};

export default connect(null, { correctAnswer, toggleAnswer, addToFocus })(ShowCard)
