import React, { useState } from "react";
import Header from "./components/Header";
  import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";
import { Switch, Route, Routes, BrowserRouter } from "react-router-dom";

const App=()=> {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
    <BrowserRouter>
    <Header score={score} />
         <Routes>
       
        <Route exact path="/" element={<Play setMyChoice={setMyChoice} />}></Route>
         <Route exact path="/game" element={<Game myChoice={myChoice} score={score} setScore={setScore}  />}></Route>

         
 
       
        </Routes>
        <Footer/>
        </BrowserRouter>

    </>
  );
}

export default App;

{/* <Route exact path="/" component={Play} >
 <Play setMyChoice={setMyChoice} /> 
</Route> */}
          // <Route path="/game" component={Game} >
          //    <Game myChoice={myChoice} score={score} setScore={setScore} /> 
          // </Route>