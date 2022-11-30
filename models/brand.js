const mongoose = require("mongoose") 
const brandSchema = mongoose.Schema({ 
    BrandName: {
        type: String,
        required: [true, 'Brand name cannot be an empty String']
    }, 
    Slogan: {
        type: String,
        required: [true, "Slogan should be of tyoe String"]
    },
    Price: {
        type: Number,
        min: [ 1, 'Price should be of a number'],
        max: 30
    }
}) 
 
module.exports = mongoose.model("brand", brandSchema) 