
import React, {FC} from 'react'
import { useState } from 'react';

interface CardProps {
    question: string,
    answer: number
}
const Card:FC<CardProps> = ({question, answer}) => {
  const [visible, setVisible] = useState(true)

  function handleToogle() {
    setVisible(!visible)
  }

  return (
    <div className='trivia'>
        <h3 id={`question`} style={visible ? {display: 'block'} : {display :'none'}} onClick={handleToogle}>{question}</h3>
        <h3 id={`answer`}  style={!visible ? {display: 'block'} : {display :'none'}} onClick={handleToogle} >{answer}</h3>
    </div>
  )
}

export default Card