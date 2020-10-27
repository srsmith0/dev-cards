import React from "react";
import "../style/cardStyle.css";
import {connect} from 'react-redux'
import {getCards} from '../actions'
import ShowCard from "./ShowCard";
import NewCardForm from "./NewCardForm";

class TopicCards extends React.Component {

    componentDidMount() {
      this.props.getCards(this.props.match.params.id)
    }

    render() {
      const {id} = this.props.match.params;
      const {getCards} = this.props;
  return (
    <>
    <button onClick={() => this.props.getCards(id)}>Reset Cards</button>
    <ShowCard cards={this.props.cards} />
    <NewCardForm topicId={this.props.match.params.id} getCards={getCards}/>
    </>
  )
    }
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps, {getCards})(TopicCards);
