import React, { useState } from 'react';

function Calculadora() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState('');


  return (
    <>
    <br/>
    <h1>Calculadora</h1>
      <input type='number'
        value={num1}
        onChange={(event) => {
          setNum1(parseFloat(event.target.value));
        }}
       />
        <input
        value={num2} type='number'
        onChange={(event) => {
          setNum2(parseFloat(event.target.value));
        }}
       />
       <br/> <br/> 

       <button onClick={() => setResultado (num1 + num2)}>+</button> &nbsp;
       <button onClick={() => setResultado (num1 - num2)}>-</button> &nbsp;
       <button onClick={() => setResultado (num1 * num2)}>x</button> &nbsp;
       <button onClick={() => setResultado (num1 / num2)}>÷</button>
       <br/>  <br/> 

      <strong>    {resultado}  </strong>
    </>
  );}

export default Calculadora;