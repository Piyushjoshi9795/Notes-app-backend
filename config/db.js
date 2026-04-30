const mongoose=require('mongoose');

const connectMongo=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mngodb connected successfilly");
    }
    catch(err){
        console.log("Error in connecting to mongodb",err);
        process.exit(1);
    }
}

module.exports=connectMongo;