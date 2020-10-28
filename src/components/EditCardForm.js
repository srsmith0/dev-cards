import React, { useState } from 'react'
import api from "../apis/cards";

const EditCardForm = (props) => {
  const {question, answer, id, topicId } = props.location.state
  const [editQuestion, setEditQuestion] = useState(question)
  const [ editAnswer, setEditAnswer] = useState(answer)

  const content = {answer: editAnswer, question: editQuestion}

  const onSubmit = async (e) => {
    e.preventDefault();
    await api.patch(`cards/${id}`, content)
    props.history.push(`/topics/${topicId}`)
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
    value={editQuestion}
    onChange={(e) => setEditQuestion(e.target.value)}
    />
    <label id="answer">Answer:</label>
    <input 
    required
    label="answer"
    name="answer"
    value={editAnswer}
    onChange={(e) => setEditAnswer(e.target.value)}
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

export default EditCardForm