import React, { useState } from 'react'
import { connect } from 'react-redux';
import api from "../apis/cards";
import { getTopics } from "../actions"

const NewTopicForm = ({getTopics}) => {
  const [topic, setTopic] = useState('')
  
  const newTopic = {
    topic
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await api.post(`topics/`, newTopic)
    setTopic('')
    getTopics()
  }

  const topicFormInput = () => {
    return (
    <div>
    <form onSubmit={onSubmit}>
    <label>Topic:</label>
     <input 
    required
    label="topic"
    name="topic"
    value={topic}
    onChange={(e) => setTopic(e.target.value)}
    />
   <button>Add</button>
   </form>
   </div>
  )
}

  return (
    <>
    {topicFormInput()}
    </>
  )
}

export default connect(null, { getTopics } )(NewTopicForm);