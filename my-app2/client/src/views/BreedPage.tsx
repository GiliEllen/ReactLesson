import React, { FC, useState } from "react";
import Main from "../components/Main";
import { useParams, useLocation } from "react-router-dom";
import BreedCard from "./../components/BreedCard";

interface BreedPageProps {
  setBreeds: any;
}

const BreedPage: FC<BreedPageProps> = ({ setBreeds }) => {
  const { breed } = useParams();
  if (!breed) console.log("NO BREED");

  setBreeds("Breed")

  return <div className="breed">{<BreedCard src={breed} />}</div>;
}

export default BreedPage;
