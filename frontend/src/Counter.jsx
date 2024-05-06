import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import {Link} from "react-router-dom";



function Counter() {

    const [isRunning, setIsRunning] = useState(false);
    const [counter, setCounter] = useState(() => {
        const storedCounter = Cookies.get('counter');
        return storedCounter ? parseInt(storedCounter, 10) : 0;
    });
  


    const startCounter = () => {
        setIsRunning(true);
      
    };

    const pause = () => {
        setIsRunning(false);

    };
    const reset=()=>{
        setIsRunning(false);
        Cookies.remove('counter');
        
    }

    const incrementCounter = useCallback(() => {
        if (isRunning) {
            setCounter((prevCounter) => prevCounter + 1);
        }
    }, [isRunning]);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(incrementCounter, 1000); 
        } else if (interval) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning, incrementCounter]);
    Cookies.set('counter', counter);
   
    


   
const counterColor=counter % 2 === 0 ? "blue" : "black"
  return (
    <div style={{textAlign:"center",padding:'20px'}}>
     <h1 style={{color:counterColor}}>{`Counter: ${counter}`}</h1>
     <button onClick={startCounter} style={{marginRight:'10px'}}>
        Start
     </button>
     <button onClick={pause} >stop</button>
     <button onClick={reset}>Reset</button>
     <Link to='/Add'><button>Add</button></Link>
  

    </div>
  )
}

export default Counter;