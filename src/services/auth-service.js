const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' });
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

exports.authorize = function (req, res, next) {
    const token = req.header('token') || req.headers['x-access-token']
    if(!token) 
    return res.status(401).json({ mensagem: 'É obrigatório o envio do token!'});

    try {
        const decoded = jwt.verify(token, process.env.SALT_KEY);
        req.user = decoded.user;
        next();
    } catch(e) {
        console.error(e.message);
        res.status(403).send({error: `Token inválido: ${e.message}`});
    }
};
