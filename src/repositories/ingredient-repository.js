const mongoose = require('mongoose');
const Ingredient = mongoose.model('Ingredient');

exports.get = async() => {
    const res = await Ingredient
    .find({}, 'name calorie');
    return res;
}

exports.getByName = async(name) => {
    const res = await Ingredient
    .findOne({
        name: name
    }, 'name calorie');
    return res;
}

exports.getById = async(id) => {
    const res = await Ingredient
    .findById(id);
    return res;
}

exports.create = async(data) => {
    var ingredient = new Ingredient(data);
    await ingredient.save();
}

exports.update = async(id, data) => {
    await Ingredient
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                category: data.category,
                calorie: data.calorie
            }
        });
}

exports.delete = async(id) => {
    await Ingredient
        .findOneAndRemove(id);
}