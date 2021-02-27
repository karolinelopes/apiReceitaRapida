const mongoose = require('mongoose');
const Recipe = mongoose.model('Recipe');

exports.get = async() => {
    const res = await Recipe
    .find({}, 'name items calorie measureUnit quantity yield time preparationMode totalCalories image');
    return res;
}

exports.getByName = async(name) => {
    const res = await Recipe
    .findOne({
        name: name
    }, 'name');
    return res;
}

exports.getById = async(id) => {
    const res = await Recipe
    .findById(id);
    return res;
}

exports.create = async(data) => {
    var recipe = new Recipe(data);
    await recipe.save();
}

exports.update = async(id, data) => {
    await Recipe
        .findOneAndUpdate(id, {
            $set: {
                name: data.name
            }
        });
}

exports.delete = async(id) => {
    await Recipe
        .findOneAndRemove(id);
}