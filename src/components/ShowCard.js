import React from "react";
import "../style/cardStyle.css";
import { connect } from 'react-redux';
import { toggleAnswer, correctAnswer, addToFocus } from "../actions";
import { Button, Card, CardActions, CardContent, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";

const ShowCard = ({ toggleAnswer, card, correctAnswer, addToFocus, removeCard}) => {

  const renderCard = () => {
      return (
        <div key={card.id} className="card-container">
          <Card className="card">
          <div className="card-crud">
          {removeCard ? 
            <Link to={{
              pathname:`/edit/${card.id}`,
              state:{id: card.id, question: card.question, answer: card.answer, topicId: card.topicId}
            }}>
              <Icon>edit</Icon>
            </Link> 
            : null}
          {removeCard ? <Button onClick={() => removeCard(card.id)}><Icon style={{color: "tomato"}}>delete</Icon></Button> : null}
          </div>
          <CardContent className="card-content">
          <p>{card.showAnswer ? card.answer : card.question}</p>
          </CardContent>
          <div className="card-buttons">
          <Button style={{ color: "mediumPurple" }} onClick={() => toggleAnswer(card.id)}>
            {card.showAnswer ? "Show Question" : "Show Answer"}
          </Button>
          <Button style={{ color: "mediumSeaGreen" }} onClick={() => correctAnswer(card.id)}>Correct</Button>
          {removeCard ? 
            <Button style={{ color: "teal" }} onClick={() => addToFocus(card)}>Add to Focus</Button> 
            : null}
          </div>
          </Card>
        </div>
      );
  };

  return <div className="cards-view">{renderCard()}</div>;
};

export default connect(null, { correctAnswer, toggleAnswer, addToFocus })(ShowCard)
