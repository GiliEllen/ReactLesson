import { FC, useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";

interface BreedCardProps {
  src: any;
}

const BreedCard: FC<BreedCardProps> = ({ src }) => {
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
    <div className="BreedCard">
      <h2>{src}</h2>
      <img src={breed} />
      <a href={`https://en.wikipedia.org/wiki/${src}_(dog)`}>
        <h4>for more information</h4>
      </a>
    </div>
  );
};

export default BreedCard;
