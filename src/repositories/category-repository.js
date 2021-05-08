const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.get = async() => {
    const res = await Category
    .find({}, 'name');
    return res;
}

exports.getByName = async(name) => {
    const res = await Category
    .findOne({
        name: new RegExp(name, 'i')
    }, 'name');
    return res;
}

exports.getById = async(id) => {
    const res = await Category
    .findById(id);
    return res;
}

exports.create = async(data) => {
    var category = new Category(data);
    await category.save();
}

exports.update = async(id, data) => {
    await Category
        .findOneAndUpdate(id, {
            $set: {
                name: data.name
            }
        });
}

exports.delete = async(id) => {
    await Category
        .findOneAndRemove(id);
}