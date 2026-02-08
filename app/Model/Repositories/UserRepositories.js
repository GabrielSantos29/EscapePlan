import pool from '../../Config/database.js';

//SEARCH FUNCTIONS
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

//CREATE
export async function create({ nome, idade, email, senha }) {
  const sql = `
    INSERT INTO usuario (nome, idade, email, senha)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await pool.query(sql, [nome, idade, email, senha]);
  return result.insertId;
}

//DELETE
export async function removeById(id) {
  await pool.query('DELETE FROM usuario WHERE id = ?', [id]);
}

//UPDATE FUMCTIONS
export async function updateNameById(nome,id) {
  await pool.query('UPDATE usuario SET nome = ? WHERE id = ?',[nome,id])
}

export async function updateAgeById(idade,id) {
  await pool.query('UPDATE usuario SET idade = ? WHERE id = ?',[idade,id])
}

export async function updateEmailById(email,id) {
  await pool.query('UPDATE usuario SET email = ? WHERE id = ?',[email,id])
}

export async function updateKeyById(senha,id) {
  await pool.query('UPDATE usuario SET senha = ? WHERE id = ?',[senha,id])
}