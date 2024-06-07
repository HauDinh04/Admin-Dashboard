import mongoose from "mongoose";
let isConnected:boolean=false;
export const connectToDB =async ():Promise<void>=>{
    mongoose.set("strictQuery",true)
    if(isConnected){
        console.log('mongodb san sang ket noi');
        return;
    }
    try{
await mongoose.connect(process.env.MONGODB_URL ||"",{
    dbName:"Organic_Food"

})
isConnected=true;
console.log("Mongodb da ket noi")


    }catch(err){
        console.log(err)
    }
}