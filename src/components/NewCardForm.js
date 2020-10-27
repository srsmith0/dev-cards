import React, { useState } from 'react'
import { connect } from 'react-redux';
import api from "../apis/cards";
import { getCards } from "../actions"

const NewCardForm = ({topicId, getCards}) => {
  const [question, setQuestion] = useState('')
  const [ answer, setAnswer] = useState('')
  
  const newCard = {
    question,
    answer,
    topicId,
    showAnswer: false,
    focus: false,
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await api.post(`topics/${topicId}/cards`, newCard)
    setQuestion('')
    setAnswer('')
    getCards(topicId)
  }

  const formInput = () => {
    return (
    <div>
    <form onSubmit={onSubmit}>
    <label>Question:</label>
     <input 
    required
    label="question"
    name="question"
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
    />
    <label id="answer">Answer:</label>
    <input 
    required
    label="answer"
    name="answer"
    value={answer}
    onChange={(e) => setAnswer(e.target.value)}
    />
   <button>Add</button>
   </form>
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