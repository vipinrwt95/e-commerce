import React from 'react';
import './App.css';
import CardTitle from './Components/UI/UI/CardTitle';
import LowerBar from './Components/UI/UI/LowerBar';
import MusicContainer from './Components/UI/UI/MusicContainer';
import UpperBar from './Components/UI/UI/UpperBar.js';


const App=()=> {
  return (
    <>
    <UpperBar></UpperBar>
    <CardTitle/>
    <MusicContainer />
    </>
  );
}

export default App;
