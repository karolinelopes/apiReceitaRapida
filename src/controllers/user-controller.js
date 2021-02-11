
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/user-repository');
const md5 = require('md5');


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

exports.getByName = async(req, res, next) => {
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

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 4, 'O nome precisa ter no minímo 5 caracteres!');
    contract.hasMinLen(req.body.password, 6, 'A senha precisa ter no minímo 6 caracteres!');
    contract.isEmail(req.body.email, 'O email precisa ser válido!');

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    
    try{
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        res.status(201).send({ 
            message: 'Usuário cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a sua requisição!'
        });
    }
    
};

exports.put = async(req, res, next) => {
    try {
    await repository.update(req.params.id, req.body);
            res.status(200).send({
                message: 'Usuário editado!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar a sua requisição!'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id);
            res.status(200).send({
                message: 'Usuário removido!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar a sua requisição!'
        });
    }
        
};

