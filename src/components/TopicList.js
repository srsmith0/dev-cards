import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTopics, resetCards } from "../actions";
import NewTopicForm from "./TopicForm";


class TopicList extends React.Component {

  componentDidMount(){
    this.props.getTopics();
    this.props.resetCards();
  }
  
  renderTopicList = () => {
    return this.props.topics.map((t) => (
      <Link to={`/topics/${t.id}`} key={t.id}>
        <div>{t.topic}</div>
      </Link>
    ));
  };
  
  render() {
    return (
      <div>
        {this.renderTopicList()}
        <NewTopicForm getTopics={getTopics} />
      </div>
    );
    };
  };
  const mapStateToProps = (state) => {
    return {
      topics: state.topics,
    };
  };

export default connect(mapStateToProps, { getTopics, resetCards })(TopicList);
