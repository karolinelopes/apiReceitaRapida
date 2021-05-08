const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async() => {
    const res = await User
    .find({}, 'username email');
    return res;
}

exports.getByName = async(username) => {
    const res = await User
    .findOne({
        username: new RegExp(username, 'i')
    }, 'username email');
    return res;
}

exports.getById = async(id) => {
    const res = await User
    .findById(id);
    return res;
}

exports.create = async(data) => {
    var user = new User(data);
    await user.save();
}

exports.update = async(id, data) => {
    await User
        .findOneAndUpdate(id, {
            $set: {
                username: data.username,
                email: data.email
            }
        });
}

exports.delete = async(id) => {
    await User
        .findOneAndRemove(id);
}

exports.authenticate = async(data) => {
    const res = await User.findOne({
        email: data.email, 
        password: data.password
    });
    return res;
}
