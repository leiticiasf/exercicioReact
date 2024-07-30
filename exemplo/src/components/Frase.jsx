import React, { useState } from 'react';

function Frase() {
  const [state, setState] = useState('Hello World');

  return (
    <>
      <input
        value={state}   placeholder='escreva algo'
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <p>
        <strong>O que você está escrevendo: </strong>
        {state}
      </p>
    </>
  );}

export default Frase;