const mongoose=require('mongoose');

const runDatabase=async()=>{
try{
await mongoose.connect(process.env.MongoDbUrl);
console.log('database connected successfully');

}catch(error){
    console.error(error);
    throw new Error(error);
    process.exit(1);
}
}
module.exports=runDatabase;