import React from "react";
import "../style/cardStyle.css";
import { connect } from 'react-redux';
import { toggleAnswer, correctAnswer, addToFocus } from "../actions";
import { Button, Card, CardActions, CardContent, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";

const ShowCard = ({ toggleAnswer, card, correctAnswer, addToFocus, removeCard }) => {

  const renderCard = () => {
      return (
          <Card className="card" key={card.id}>
          <div className="card-crud">
          {removeCard ? 
            <Link to={{
              pathname:`/edit/${card.id}`,
              state:{ 
                id: card.id, 
                question: card.question, 
                answer: card.answer, 
                topicId: card.topicId
              } 
            }}>
              <Icon>edit</Icon>
            </Link> 
            : null}
          {removeCard ? <Button onClick={() => removeCard(card.id)}><Icon style={{color: "tomato"}}>delete</Icon></Button> : null}
          </div>
          <CardContent>
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
      );
  };

  return renderCard();
};

export default connect(null, { correctAnswer, toggleAnswer, addToFocus })(ShowCard)
