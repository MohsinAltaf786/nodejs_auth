const Product=require('../model/product-model');


const createProducts=async(req,res)=>{
    const products = [
  {
    name: "Wireless Mouse",
    catagory: "Electronics",
    price: 1499,
    inStock: true,
    tags: ["computer", "accessory", "wireless"]
  },
  {
    name: "Bluetooth Headphones",
    catagory: "Electronics",
    price: 2999,
    inStock: true,
    tags: ["audio", "bluetooth", "music"]
  },
  {
    name: "Running Shoes",
    catagory: "Footwear",
    price: 3999,
    inStock: false,
    tags: ["sports", "shoes", "fitness"]
  },
  {
    name: "Notebook (Hardcover)",
    catagory: "Stationery",
    price: 199,
    inStock: true,
    tags: ["writing", "school", "office"]
  },
  {
    name: "Smart Watch",
    catagory: "Electronics",
    price: 4999,
    inStock: true,
    tags: ["wearable", "fitness", "watch"]
  },
  {
    name: "Leather Wallet",
    catagory: "Accessories",
    price: 799,
    inStock: true,
    tags: ["leather", "wallet", "fashion"]
  },
  {
    name: "LED Desk Lamp",
    catagory: "Home Decor",
    price: 899,
    inStock: false,
    tags: ["lamp", "lighting", "study"]
  },
  {
    name: "T-Shirt (Cotton)",
    catagory: "Clothing",
    price: 499,
    inStock: true,
    tags: ["clothing", "casual", "cotton"]
  },
  {
    name: "Backpack",
    catagory: "Accessories",
    price: 1199,
    inStock: true,
    tags: ["bag", "travel", "school"]
  },
  {
    name: "Electric Kettle",
    catagory: "Home Appliances",
    price: 1299,
    inStock: true,
    tags: ["kitchen", "appliance", "electric"]
  }
];

    try{
          
      const newProduct=await Product.insertMany(products);

            res.status(200).json({
                message:'product created successfully',
                payload:newProduct
            });



    }catch(error){
       res.status(500).json({
        message:error.message
       })
    }
}


const getProduct=async(req,res)=>{
const category=req.query.category;
const name=req.query.name;

    try{
        const pipeline = [];

if (category) {
  pipeline.push({
    $match: { catagory: category }
  });
}

if (name) {
  pipeline.push({
    $match: { name:{ $regex: name, $options: "i" } }
  });
}

pipeline.push({
  $group: {
    _id:null,
    AvgPrice: { $avg: "$price" },
    total: { $sum: 1 }
  }
});
      
        const filterProducts=await Product.aggregate(pipeline);
        res.status(200).json({
            message:'success',
            data:filterProducts
        })


    }catch(error){
          res.status(500).json({
        message:error.message
       })
    }
}



module.exports={createProducts,getProduct};