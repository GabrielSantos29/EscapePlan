//Imposrtações
import express from 'express';
import * as UserController from '../Controll/UserController.js';
import path from 'path';

const app = express();
app.use(express.json());


//POST Cadastrar
app.post('/usuario',(req,res)=>{
    resposta = UserController.registerUser(req,res);
    console.log(resposta);
})

//GET 