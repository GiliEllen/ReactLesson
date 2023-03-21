// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import axios from "axios";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import CounterClass from "./views/CounterClass";
// import Counter from "./views/CounterFunnc";
// import ColorChange from "./views/ColourSquars";
// import Card from "./views/Card";
// import Dog from "./views/Dog";
// import { text } from "body-parser";
// import { useState } from "react";
// import NavBar from "./views/NavBarImg";

// // const trivia = [
// //   {
// //     question: `2+2`,
// //     answer: 4,
// //   },

// //   {
// //     question: `3*3`,
// //     answer: 9,
// //   },

// //   {
// //     question: `10/5`,
// //     answer: 2,
// //   },
// // ];

// function App() {
//   const [dogArray, setDogArray] = useState([]);
//   const [breed, setBreed] = useState<string>();

//   async function handleGetDogImg() {
//     try {
//       // const breedInput = document.querySelector("input");
//       // setBreed(breedInput!.value)
//       console.log(breed);
//       const { data } = await axios.get(
//         `https://dog.ceo/api/breed/${breed}/images`
//       );

//       const { message } = data;
//       setDogArray(message);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className="App">
//       {/* <p>
//       Hello my name is Albert
//     </p>
//     <CounterClass />
    
//     <Counter />

//     <ColorChange /> */}

//       {/* {trivia.map((h3) => {return <Card question={h3.question} answer={h3.answer}/>})} */}
//       <input
//         onBlur={(ev) => {
//           setBreed(ev.target.value);
//         }}
//         type={"text"}
//         placeholder={`enter amount`}
//       />
//       <button onClick={handleGetDogImg}>Dog</button>
//       {dogArray.map((dog, index) => {
//         return <Dog key={index} src={dog} />;
//       })}

//       {/* <NavBar /> */}
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Card from "./views/Card";
import "./App.scss";
import { UserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Paragraph from "./views/Paragraph";

function App() {
  const [user, setUser] = useState<any>()
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data)
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/no-user-needed" element={<Paragraph />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
