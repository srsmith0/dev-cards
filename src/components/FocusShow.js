import React from "react";
import { connect } from 'react-redux';
import { toggleAnswer, correctAnswer, getFocus} from "../actions";
import { Button } from "@material-ui/core";

class FocusShow extends React.Component {

  componentDidMount() {
    this.props.getFocus()
  }


  hideAnswer = ({showAnswer, answer}) => {
    return <h4>{showAnswer ? answer : "..."}</h4>;
  };

  renderFocusCards = () => {
      return (
        this.props.cards.map((card => (
        <div key={card.id} className="card-container">
          <h3>{card.question}</h3>
          {this.hideAnswer(card)}
          <Button onClick={() => this.props.toggleAnswer(card.id)}>
            {card.showAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
          <Button onClick={() => this.props.correctAnswer(card.id)}>Correct</Button>
        </div>
        )))
      );
  };

  render() { 
  return (
  <div className="cards-view">
    {this.props.cards.length > 0 ? this.renderFocusCards() : "No cards to focus on"}
  </div>
  );
 };
};

const mapStateToProps = state => {
  return {
    cards: state.focus
  }
}

export default connect(mapStateToProps, { correctAnswer, toggleAnswer, getFocus })(FocusShow)
