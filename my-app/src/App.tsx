import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterClass from './views/CounterClass';
import Counter from './views/CounterFunnc';
import ColorChange from './views/ColourSquars';
import Card from './views/Card';

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
  return (
    <div className='App'>
      {/* <p>
      Hello my name is Albert
    </p>
    <CounterClass />
    
    <Counter />

    <ColorChange /> */}

    {trivia.map((h3) => {return <Card question={h3.question} answer={h3.answer}/>})}
    </div>
  );
}

export default App;
