import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface DogCardProps {
  src: any;
}

const DogCard: FC<DogCardProps> = ({ src }) => {
  const [breed, setBreed] = useState<string>();

  async function handleGetDogImg() {
    try {
      const { data } = await axios.get(
        `https://dog.ceo/api/breed/${src}/images/random`
      );

      const { message } = data;
      setBreed(message);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleGetDogImg();
  }, []);

  return (
    <div className="dogCard">
      <Link
        className="dog"
        style={{ textDecoration: "none" }}
        to={`/breed/${src}`}
      >
        <img src={breed} />
        <h3>{src}</h3>
        <h4>for more information</h4>
      </Link>
    </div>
  );
};

export default DogCard;
