import pool from '../Config/database.js';

async function testarConexao() {
    try {
        const conn = await pool.getConnection();
        console.log('✅ Conectado ao MySQL com sucesso!');
        conn.release();
    } catch (error) {
        console.error('❌ Erro ao conectar no MySQL:', error.message);
    }
}

testarConexao();
