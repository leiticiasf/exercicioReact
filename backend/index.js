const express = require('express');
const { useState } = require('react');
const app = express();
const port = 3000;

app.use(express.json())

const users = [
    {
    name: 'larissa',
    email: 'ele_123@gmail.com',
    idade: 83,
    sexo: 'masculino'
    }
]


app.get('/usuarios', (req, res) => {
    res.json(users)
})

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.status(201).json(users)
})

app.listen(port, () =>{
    console.log("Servidor rodando")
})