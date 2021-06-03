const mongoose = require('mongoose');
const Recipe = mongoose.model('Recipe');

exports.get = async() => {
    const res = await Recipe
    .find({}, 'name ingredient income totalTime category timeCooking preparationMode calorie image');
    return res;
}

exports.getByName = async(name) => {
    const res = await Recipe
    .find({
        name: new RegExp(name, 'i')
    }, 'name ingredient income totalTime category timeCooking preparationMode calorie image');
    return res;
}

exports.findRecipesByIngredient = async(ingredient) => {
    const res = await Recipe
    .find({
        ingredient: new RegExp(ingredient, 'i'),
    }, 'name image');
    return res;
}

exports.getById = async(id) => {
    const res = await Recipe
    .findById(id);
    return res;
}

exports.getByImage = async(id) => {
    const res = await Recipe
    .find(id,{}, '_id image');
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