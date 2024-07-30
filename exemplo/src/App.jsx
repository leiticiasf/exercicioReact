import { useState } from 'react';
import Mensagem from "./components/Mensagem";
import Frase from "./components/Frase";
import Calculadora from "./components/Calculadora";


import "./App.css"


function Saudacao(){
  return <h1>Hello World!</h1>;
}

function App() {
  
  return (
    <>
       <Saudacao/>
       <Mensagem texto="Mensagem" />
       <Frase />
       <Calculadora />
       </>
  );
}

export default App
