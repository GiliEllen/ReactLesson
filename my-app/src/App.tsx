import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CounterClass from './views/CounterClass';
import Counter from './views/CounterFunnc';
import ColorChange from './views/ColourSquars';
import Card from './views/Card';
import Dog from './views/Dog';
import { text } from 'body-parser';
import { useState } from 'react';

const trivia = [
  {
    question: `2+2`,
    answer: 4,
  },

  {
    question: `3*3`,
    answer: 9,
  },

  {
    question: `10/5`,
    answer: 2,
  },
];

function App() {
  const [dogArray, setDogArray] = useState([]);

  async function handleGetDogImg() {
    try {
      const breed = document.querySelector("input");

      const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);

      const { message } = data;
      setDogArray(message);
      
    } catch (error){
      console.error(error);
    }
  }

  return (
    <div className='App'>
      {/* <p>
      Hello my name is Albert
    </p>
    <CounterClass />
    
    <Counter />

    <ColorChange /> */}

    {/* {trivia.map((h3) => {return <Card question={h3.question} answer={h3.answer}/>})} */}
      <input type={"text"} placeholder={`enter amount`} />
      <button onClick={handleGetDogImg}>Dog</button>
      {dogArray.map((dog, index) => {
        return <Dog key={index} src = {dog} />
      })}
    </div>
  );
}

export default App;
