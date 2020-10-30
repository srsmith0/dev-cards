import React from "react";
import "../style/topicListStyle.css";
import api from "../apis/cards";
import { connect } from "react-redux";
import { Button, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getTopics, resetCards } from "../actions";
import NewTopicForm from "./NewTopicForm";


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
        <div key={t.id} className="single-topic">
          <Link className="topic-link" to={{
            pathname: `/topics/${t.id}`,
            state: {topic: t.topic, }}}>
          {t.topic}
          </Link>
      <Button onClick={() => this.deleteTopic(t.id)}><Icon style={{color: "tomato"}}>delete</Icon></Button>
      </div>
      )
    });
  };
  
  render() {
    return (
      <div className="topic-page">
        <h1 className="topic-header-main">Topics</h1>
        <NewTopicForm getTopics={getTopics} />
        <Link className="focus-link" to="/focus"><p>Focus List</p></Link>
        {this.renderTopicList()}
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
