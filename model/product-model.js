const mongoose=require('mongoose');

const ProductSchema= new mongoose.Schema({
name:String,
catagory:String,
price:Number,
inStock:Boolean,
tags:[String]
});


module.exports=mongoose.model('Product',ProductSchema);