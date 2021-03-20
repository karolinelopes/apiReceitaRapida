const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async() => {
    const res = await User
    .find({}, 'name email');
    return res;
}

exports.getByName = async(name) => {
    const res = await User
    .findOne({
        name: name
    }, 'name email');
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
                name: data.name,
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
