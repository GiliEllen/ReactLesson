import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import DogCard from "./DogCard";

interface DogBreedsProps {
  breeds: any;
}

const DogBreeds: FC<DogBreedsProps> = ({ breeds }) => {
  const [dogArray, setDogArray] = useState<string[]>([""]);
  const breed = `^${breeds}`;

  async function handleGetSource() {
    try {
      if (breed == `^`) {
        const { data } = await axios.get(`https://dog.ceo/api/breeds/list/all`);
        const breedArray: string[] = Object.keys(data.message);
        setDogArray(breedArray);
      } else {
        const { data } = await axios.get(`https://dog.ceo/api/breeds/list/all`);
        const breedArray: string[] = Object.keys(data.message);
        const regex = new RegExp(`${breed}`);
        const re = regex.exec.bind(regex);
        const newArr = breedArray.filter(re);
        setDogArray(newArr);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleGetSource();
  }, [breed]);

  return (
    <div className="dogBreeds">
      {dogArray.map((dog, index) => {
        return <DogCard key={index} src={dog} />;
      })}
    </div>
  );
};

export default DogBreeds;
