import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTopics } from "../actions";

const TopicList = (props) => {
  const { getTopics, topics } = props;

  //have to add a dependency. or figure out a way around it
  useEffect(() => {
    getTopics();
  }, []);

  const renderTopicList = () => {
    return topics.map((t) => (
      <Link to={`/topics/${t.id}`} key={t.id}>
        <div>{t.topic}</div>
      </Link>
    ));
  };

  return <div>{renderTopicList()}</div>;
};

const mapStateToProps = (state) => {
  return {
    topics: Object.values(state.topics),
  };
};

export default connect(mapStateToProps, { getTopics })(TopicList);
