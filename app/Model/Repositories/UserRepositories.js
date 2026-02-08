import pool from '../../Config/database.js';

export async function findAll() {
  const [rows] = await pool.query('SELECT * FROM usuario');
  return rows;
}

export async function findById(id) {
    const [rows]= await pool.query('SELECT * FROM usuario WHERE id = ?',[id]);
    return rows[0] || null
}

export async function findByEmail(email) {
  const [rows] = await pool.query(
    'SELECT * FROM usuario WHERE email = ?',
    [email]
  );
  return rows[0] || null;
}

export async function create({ nome, idade, email, senha }) {
  const sql = `
    INSERT INTO usuario (nome, idade, email, senha)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await pool.query(sql, [nome, idade, email, senha]);
  return result.insertId;
}

export async function removeById(id) {
  await pool.query('DELETE FROM usuario WHERE id = ?', [id]);
}
