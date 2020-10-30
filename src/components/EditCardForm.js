import React, { useState } from 'react'
import "../style/editCardStyle.css";
import api from "../apis/cards";
import { Button } from '@material-ui/core';


const EditCardForm = (props) => {
  const {question, answer, id, topicId } = props.location.state
  const [editQuestion, setEditQuestion] = useState(question)
  const [ editAnswer, setEditAnswer] = useState(answer)

  const content = {answer: editAnswer, question: editQuestion}

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.patch(`cards/${id}`, content)
    props.history.push(`/topics/${topicId}`)
  }

  const formInput = () => {
    return (
    <div className="edit-form">
    <form onSubmit={handleSubmit}>
    <div className="card-input">
    <label>Question: </label>
     <textarea 
    required
    cols="40"
    label="question"
    name="question"
    value={editQuestion}
    onChange={(e) => setEditQuestion(e.target.value)}
    />
    </div>
    <br />
    <div className="card-input">
    <label id="answer">Answer: </label>
    <textarea 
    required
    rows="10"
    cols="40"
    label="answer"
    name="answer"
    value={editAnswer}
    onChange={(e) => setEditAnswer(e.target.value)}
    />
    </div>
    <br />
   <Button type="submit">Update</Button>
   </form>
   <Button onClick={() => props.history.push(`/topics/${topicId}`)}>Go Back</Button>
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