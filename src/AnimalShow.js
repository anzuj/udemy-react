import "./AnimalShow.css";
import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  //same as bird: bird
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};

export default function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div onClick={handleClick} className="animal">
      <div>
        <strong>{type}</strong>
      </div>
      <img src={svgMap[type]} width="150" alt="animal" />
      <img src={heart} style={{ width: 10 + 10 * clicks + "px" }} alt="heart" />
    </div>
  );
}
