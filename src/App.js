import React, {useState} from 'react';

import './App.css';

function App() {
  
  const[Count,setCount] = useState(1);
  const[isMorning,setMorning]=useState(true);
  return (
    
    <div className={`box ${isMorning ? 'daylight' : ''}`}>

    <h3>value of the variable is:{Count}</h3>
    <button onClick={()=>setCount(Count+1)}>Update Value</button>
    <br/>
    <h3>Have A Good {isMorning ? 'Morning':'Night'}</h3>
    <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    </div>
   
  );
  
}

export default App;
