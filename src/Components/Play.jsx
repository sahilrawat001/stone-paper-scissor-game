import React from 'react';
import { Link } from 'react-router-dom';
import Triangle from "../images/bg-triangle.svg";

const Play = ({setMyChoice}) => {

  const setChoice=(e)=>{
    setMyChoice(e.target.dataset.id);
  }
  console.log(setChoice +"choice is");
  return(
    <div className="play">
            <img src={Triangle} alt="" className="triangle" />

    <div className="items">
        <Link to="/game">
          <div
            data-id="paper"
            onClick={setChoice}
            className="icon icon--paper"
          >
            paper
          </div>
        </Link>
        <Link to="/game">
          <div
            data-id="scissors"
            onClick={setChoice}
            className="icon icon--scissors"
          >

            scissor
          </div>
        </Link>
        <Link to="/game">
          <div
            data-id="rock"
            onClick={setChoice}
            className="icon icon--rock"
          >

          rocl
          </div>
        </Link>
      </div>
    </div>

  )
};

export default Play;

    