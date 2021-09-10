import React, {Component, useEffect, useState} from 'react';
import '../assets/css/App.css';

const Tugas10 = () =>{
    
    const [date, setDate] = useState(new Date().toLocaleTimeString())
    const [count, setCount] = useState(100)
    const [display, setDisplay] = useState(true)
    

    useEffect(() =>{
        
        if (count != 0 ){

            let result = setInterval(() =>{
                setCount(count - 1)
                setDate(new Date().toLocaleTimeString())
            },1000)
        
            return () => clearInterval(result)
        }

        
        
        
       
        if(count == 0){
            setDisplay(false)
        }
        
    },[count])

    return(
        <>
            {display == true ?
            <>
                <h1 className="jam"> Now At : {date}</h1>
                <p className="countdown">countdown : {count}</p>
            </>:null}
        </>
    );
    
}

export default Tugas10;