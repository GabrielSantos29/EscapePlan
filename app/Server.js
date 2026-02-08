//importações
import pool from './Config/database.js';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// cria a aplicação
const app = express();
// define a porta
const PORT = process.env.PORT;;
// rota básica
app.get('/',(req,res) => {
    res.send('✅ Servidor Express rodando')
});
//Start
async function StartServer() {
  try {
    await pool.query('SELECT 1');
    console.log('✅ Banco conectado');

    // inicia o servidor
    app.listen(PORT, () => {
      console.log('✅ Servidor rodando em http://localhost:'+PORT);
    });
  } catch (error) {
    console.error('❌ Erro ao conectar no banco:', error.message);
    process.exit(1);
  }
};
StartServer();
//
//Express funcionando 
//Nodemon funcionando
//Server rodando com banco de dados funcionando
//
//Criar UserController.js para fazer validações. criar função para editar usuario.