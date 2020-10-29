import React from "react";
import api from "../apis/cards";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getTopics, resetCards } from "../actions";
import NewTopicForm from "./TopicForm";


class TopicList extends React.Component {

  componentDidMount(){
    this.props.getTopics();
    this.props.resetCards();
  }

  deleteTopic = async (id) => {
    await api.delete(`/topics/${id}`)
    this.props.getTopics()
  }
  
  renderTopicList = () => {
    return this.props.topics.map((t) => {
      return (
        <div key={t.id}>
      <Link to={`/topics/${t.id}`}>
        <div>{t.topic}</div>
      </Link>
      <Button onClick={() => this.deleteTopic(t.id)}>Delete</Button>
      </div>
      )
    });
  };
  
  render() {
    return (
      <div>
        {this.renderTopicList()}
        <NewTopicForm getTopics={getTopics} />
        <Link to="/focus">Focus List</Link>
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
