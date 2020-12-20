import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js';

function App() {
  let [count, setcount]= useState(0)
  let [isMorning, setMorning]=useState(true)
  return (
    <div className={`box ${isMorning ? 'Daylight' : ''}`}>
      <h1>Have a good {isMorning ? 'Morning': 'Night'} by Zeeshan Haleem </h1>
      <Message counter={count} />
     <br />
     <button onClick={()=> setcount(count +1)}>
Update Counter
     </button>
     <button onClick={()=> setMorning(!isMorning)}>
     Update Daylight</button>
    </div>
  );
}

export default App;
