import React from "react";

const TopicCards = (props) => {
  //use match.params.id
  return <div>{props.match.params.id}</div>;
};

export default TopicCards;
