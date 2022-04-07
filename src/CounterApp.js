import React, { useState } from 'react';
import PropTypes from "prop-types";


export default function CounterApp({value}) {

  // Asi funcionan los hooks de estado
  const [counter, setCounter] = useState(value);

  /**
   * Handlers de los botones:
   * Suma, resta y reseteo
   * No generará números negativos
   */

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleReset = () => {
    setCounter(value);
  }

  const handleSubtract = () => {
    if(value > 0 && counter > 0)
      setCounter(counter - 1);
    else
      setCounter(0);
  }

  return (
    <div>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>+1</button>
    </div>
    
  )
}

CounterApp.propTypes = {
    value : PropTypes.number
}

CounterApp.defaultProps = {
    value : 123
}
