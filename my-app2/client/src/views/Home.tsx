import React, { FC, useEffect, useState } from "react";
import Main from "../components/Main";
import DogBreeds from "./../components/DogBreeds";
import DogCard from "../components/DogCard";
import Search from "../components/Search";

interface HomeProps {
  inputValue: any;
  setBreeds: any;
}

const Home: FC<HomeProps> = ({ inputValue, setBreeds }) => {
  setBreeds("Breeds");

  return (
    <div className="home">
      <DogBreeds breeds={inputValue} />
    </div>
  );
};

export default Home;
