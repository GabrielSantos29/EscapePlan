//import { json } from "express";

const rota= 'http://localhost:3000';
const form = document.getElementById('form');

//Cadastrar usuario

form.addEventListener('submit',async function(event){
    event.preventDefault();//impede o reload da página;

    const nome= document.getElementById('nome');
    const email= document.getElementById('email');
    const idade= document.getElementById('idade');
    const senha= document.getElementById('senha');

    const response= await fetch(rota+'/usuario',{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(nome,email,idade,senha)
    })
})

//