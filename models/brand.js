const mongoose = require("mongoose") 
const brandSchema = mongoose.Schema({ 
    BrandName: String, 
    Slogan: String, 
    Price: Number 
}) 
 
module.exports = mongoose.model("brand", brandSchema) 