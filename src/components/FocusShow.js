import React from "react";
import "../style/focusShowStyle.css";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
import { toggleAnswer, correctAnswer, getFocus, clearFocus } from "../actions";
import ShowCard from "./ShowCard";

class FocusShow extends React.Component {
  renderCards = (cards) => {
    return cards.map(card => <ShowCard card={card} removeCard={this.removeCard} />)
  }

  render() { 
    return (
      <>
        <h1 className="focus-header">Focus List</h1>
        <div className="topic-card-buttons">
        <Button onClick={() => this.props.clearFocus()}>Clear Cards</Button>
        <Button onClick={() => this.props.history.push('/')}>Go Back</Button>
        </div>
        <div className="card-grid">
          {this.props.cards.length > 0 ?  this.renderCards(this.props.cards) : <p>No cards to focus on</p>}
        </div>
      </>
    );
  };
};

const mapStateToProps = state => {
  return {
    cards: state.focus
  }
}

export default connect(mapStateToProps, { correctAnswer, toggleAnswer, getFocus, clearFocus })(FocusShow)
