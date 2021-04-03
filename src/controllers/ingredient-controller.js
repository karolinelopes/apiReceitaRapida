const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/ingredient-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');

exports.get = async(req, res, next) => {
    try {
    var data = await repository.get();
    res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a sua requisição!'
        });
    }
}

exports.getByName = async(req, res) => {
    try {
    var data = await repository.getByName(req.params.name);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a sua requisição!'
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a sua requisição!'
        });
    }
}

exports.post = async(req, res) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome precisa ter no minímo 3 caracteres!');
    contract.hasMinLen(req.body.category, 5, 'A categoria precisa ter no minímo 3 caracteres!');

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    
    try{

        await repository.create(req.body);
        res.status(201).send({ 
            message: 'Ingrediente cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a sua requisição!'
        });
    }
    
};

exports.put = async(req, res) => {
    try {
    await repository.update(req.params.id, req.body);
            res.status(200).send({
                message: 'Ingrediente editado!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar a sua requisição!'
        });
    }
};

exports.delete = async(req, res) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);
        
        await repository.delete(req.body.id);
            res.status(200).send({
                message: 'Ingrediente removido!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar a sua requisição!'
        });
    }
        
};
