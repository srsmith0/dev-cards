import React, { useState } from 'react'
import { connect } from 'react-redux';
import api from "../apis/cards";
import { getTopics } from "../actions"
import { Button, Icon, IconButton } from '@material-ui/core';

const NewTopicForm = ({getTopics}) => {
  const [topic, setTopic] = useState('')
  const [ showInput, setShowInput] = useState(false)
  
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
      <IconButton style={{color: "green"}} onClick={() => setShowInput(!showInput)}><Icon fontSize="large">add_circle</Icon></IconButton>
      {showInput ? 
       <form onSubmit={onSubmit}>
       <label>Topic:</label>
        <input 
       required
       label="topic"
       name="topic"
       value={topic}
       onChange={(e) => setTopic(e.target.value)}
       />
      </form>   
      : null
    }
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