import { Button } from "@material-ui/core";
import React from "react";
import { connect } from 'react-redux';
import { toggleAnswer, correctAnswer, getFocus, clearFocus } from "../actions";
import ShowCard from "./ShowCard";

class FocusShow extends React.Component {

  render() { 
    return (
      <>
        <Button onClick={() => this.props.clearFocus()}>Clear Cards</Button>
        <Button onClick={() => this.props.history.push('/')}>Go Back</Button>
        <div>
          {this.props.cards.length > 0 ?  <ShowCard cards={this.props.cards} /> : "No cards to focus on"}
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
