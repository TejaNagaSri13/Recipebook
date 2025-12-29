const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        imageUrl: {
            type: String,
            required: true,
            trim: true
        },
        ingredients: {
            type: [String],
            required: true
        },
        instructions: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Recipe', RecipeSchema);
