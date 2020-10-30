import React, { useState } from 'react'
import { connect } from 'react-redux';
import api from "../apis/cards";
import { getCards } from "../actions"
import { Button, Icon, IconButton } from '@material-ui/core';

const NewCardForm = ({topicId, getCards}) => {
  const [question, setQuestion] = useState('')
  const [ answer, setAnswer] = useState('')
  const [showInput, setShowInput] = useState(false)
  
  const newCard = {
    question,
    answer,
    topicId,
    showAnswer: false,
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post(`topics/${topicId}/cards`, newCard)
    setQuestion('')
    setAnswer('')
    setShowInput(!showInput)
    getCards(topicId)
  }

  const formInput = () => {
    return (
    <div className="card-form">
      <IconButton style={{color: showInput ? "coral" : "green"}} onClick={() => setShowInput(!showInput)}><Icon fontSize="small">{showInput ? "remove_circle" : "add_circle"}</Icon></IconButton>
    {showInput ? 
    <form onSubmit={handleSubmit}>
    <div className="card-input">
    <label>Question: </label>
     <textarea
      required
      cols="30"
      label="question"
      name="question"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      />
    </div>
    <br />
    <div className="card-input">
    <label>Answer: </label>
      <textarea 
      required
      cols="30"
      rows="8"
      label="answer"
      name="answer"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      />
    </div>  
    <Button type="submit" style={{ color: "green"}}>Add Card</Button>
   </form>
   : null }
   </div>
  )
}

  return (
    <>
    {formInput()}
    </>
  )
}

export default connect(null, { getCards } )(NewCardForm);