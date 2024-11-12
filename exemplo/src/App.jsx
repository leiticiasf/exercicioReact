import { useEffect, useState } from 'react';

import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3000'
})

function App(){
  const [users, setUsers] = useState([]) //permite  declarar uma variável de estado  
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [idade, setIdade] = useState([])
  const [sexo, setSexo] = useState([])

  useEffect(() => {  
  api.get('/usuarios'.then((res) =>{
    console.log(res.data)
    setUsers(res.data)
}))
}, [])


  
  return (
   <div>
    <h1>
      <ul>
        {users.map((user) => { //transforma os dados 
          <li key = {user.name}>
            Nome: {user.name} - Email:{user.email}
          </li>
        })}
      </ul>
    </h1>
   </div>
  );


export default App
