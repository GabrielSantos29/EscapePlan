//importações
import pool from './Config/database.js';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT;;

// servir arquivos estáticos da pasta public (pasta está em ...\SistemaAgendamento\public)
app.use(express.static(path.join(__dirname, '..', 'APP','View')));

// rota básica
app.get('/',(req,res) => {
    //res.send('✅ Servidor Express rodando')
    res.sendFile(path.join(__dirname,'..','View','index.html'));
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
//Editar e testar rotas de usuário.
