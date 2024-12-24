

import React from 'react';
import {useEffect,useState }from 'react';


export function App(props) {

    const [num, setnum] = useState(0);

useEffect( ()=>{

 setInterval(()=>{
    
    setnum(num +1);

 },1000)

})


const [resetCount, setresetCount] = useState(0);


let resetNum = ()=>{
    setnum (0);
    setresetCount(resetCount+1);
}
useEffect  (()=>{
    console.log(resetCount);
},[resetCount])
  return (
    <div className='App'>
      
      <div> {num}</div>
      <button onClick={resetNum}>Reset</button>
    </div>
  );
}


