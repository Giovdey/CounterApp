import React, {useState} from "react";
import PropTypes from 'prop-types';

const CounterApp=({value})=>{
    
    const [counter,setCounter]=useState(value);

    const handleAdd=(e)=>{
        
        setCounter(counter+1);
    }
    const handleAdd2=(e)=>{
        
        setCounter(value);
    }
    const handleAdd3=(e)=>{
        
        setCounter(counter-1);
    }
    const handleAdd4=(e)=>{
        
        setCounter(counter**(counter+1));
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleAdd2}>reset</button>
            <button onClick={handleAdd3}>-1</button>
            <button onClick={handleAdd4}>value^(value+1)</button>
        </>
    );
}
CounterApp.propTypes={
    value:PropTypes.number.isRequired,
}
CounterApp.defaultProps={
    value: 2
}
export default CounterApp;