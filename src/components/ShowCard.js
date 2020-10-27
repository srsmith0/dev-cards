import { Button } from "@material-ui/core";
import React from "react";
import { connect } from 'react-redux';
import { toggleAnswer, correctAnswer, addToFocus } from "../actions";

const ShowCard = ({ toggleAnswer, cards, correctAnswer, addToFocus }) => {

  const hideAnswer = ({showAnswer, answer}) => {
    return <h4>{showAnswer ? answer : "..."}</h4>;
  };

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
        </div>
        )))
      );
  };

  return <div className="cards-view">{renderCard()}</div>;
};

export default connect(null, { correctAnswer, toggleAnswer, addToFocus })(ShowCard)
