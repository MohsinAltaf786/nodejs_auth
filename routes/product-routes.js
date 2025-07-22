const express=require('express');
const router=express.Router();
const {createProducts,getProduct}=require('../controller/product-controller');

router.post('/addproduct',createProducts);
router.get('/getproduct',getProduct);


module.exports=router;