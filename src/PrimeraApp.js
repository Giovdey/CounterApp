//import React, {Fragment} from 'react';
import React from "react";
import PropTypes from 'prop-types';
const PrimeraApp=({saludo,subti})=>{
    
    return (
        <>
            <h1> { saludo } </h1>
            <p>{ subti }</p>
        </>
    );
}
PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired,
}
PrimeraApp.defaultProps={
    subti: 'Ninja'
}
export default PrimeraApp;