import * as UserRepository from '../Model/Repositories/UserRepositories.js';

export async function registerUser(req,res) {
    const { nome, idade, email, senha } = req.body;

    const usuarioExiste = await UserRepository.findByEmail(email);

    if(usuarioExiste){
        res.status(409).json({ erro: 'Usuário já existe' });
        return;
    }

    const id = await UserRepository.create({nome,idade,email,senha});

    res.status(201).json({id})
}

export async function deleteUser(req,res) {
    const { id } = req.params;
    
    const usuario = await UserRepository.findById(id)
    
    if(!usuario){
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    
    UserRepository.removeById(id);

    res.status(200).json({mensagem: 'Usuário excluído com sucesso'})
}

//TERMINAR FUNÇÕES ABAIXO
export async function updateUserName(req,res) {
    const { id } = req.params;

    if(!usuario){
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
}

export async function updateUserAge(req,res) {
    const { id } = req.params;

    if(!usuario){
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
}

export async function updateUserEmail(req,res) {
    const { id } = req.params;

    if(!usuario){
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
}

export async function updateUserKey(req,res) {
    const { id } = req.params;

    if(!usuario){
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
}