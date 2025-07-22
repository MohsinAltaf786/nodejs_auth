require('dotenv').config();
const express=require('express');
const app=express();
const Port=process.env.PORT;
const connectDatabase=require('./database/db');
const productRoutes=require('./routes/product-routes');



//connect databased
connectDatabase();
///middleware
app.use(express.json());
app.use('/api/product',productRoutes);






///run server
app.listen(Port,()=>{
    console.log('server is running with port ',Port);
    
});