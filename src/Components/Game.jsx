import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Game = ( {score,myChoice,setScore} ) => {
  const [house,setHouse]=useState("");
  const [playerWin,setPlayerWin]=useState("");
  const [counter, setCounter] = useState(1);

  const newHousePick=()=>{
    const choices=['rock','paper', 'scissors' ];
    setHouse( choices[Math.floor(Math.random()*3 )  ] )
  }
 
  useEffect( ()=>{
newHousePick();
} ,[]  )
const Result = () => {
  if (myChoice === "rock" && house === "scissors") {
    setPlayerWin("win");
    setScore(score + 1);
  } else if (myChoice === "rock" && house === "paper") {
    setPlayerWin("lose");
    setScore(score - 1);
  } else if (myChoice === "scissors" && house === "paper") {
    setPlayerWin("win");
    setScore(score + 1);
  } else if (myChoice === "scissors" && house === "rock") {
    setPlayerWin("lose");
    setScore(score - 1);
  } else if (myChoice === "paper" && house === "rock") {
    setPlayerWin("win");
    setScore(score + 1);
  } else if (myChoice === "paper" && house === "scissors") {
    setPlayerWin("lose");
    setScore(score - 1);
  } else {
    setPlayerWin("draw");
  }
};

useEffect(() => {
  const timer =
    counter > 0
      ? setInterval(() => {
          setCounter(counter - 1);
        }, 1000):
       Result();

  return () => {
    clearInterval(timer);
  };
}, [counter, house]);



  return( <div className='game' > 
my choice : {myChoice } <br/>
house choice : { house }<br/>
Result :
 {playerWin=="win"&& <h2>winner is here</h2>  }
 {playerWin=="draw"&& <h2>none is here</h2>  }
 {playerWin=="lose"&& <h2>losser is here</h2>  }
 <Link to='/'   >
   Play Again
 </Link>
  </div>)

};

export default Game;
