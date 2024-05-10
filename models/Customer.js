import { Schema,model,models } from "mongoose"


const  customerSchema=new Schema({
    name:{
        type:String,
        minLength:1,
        required:true,
    },
    lastName:{
         type:String,
         minLength:1,
         required:true, 
    },
    email:{
        type:String,
        minLength:1,
        required:true
    },
    phone:String,
    address:String,
    postalCode:Number,
    date:Date,
    products: {
        type:Array,
        default:[]
    },
    createdAt:{
        type:Date,
        default:() =>Date.now(),
        immutable:true
    },
    updatedAt:{
        type:Date,
        default:() =>Date.now()
    }
})
const Customer=models.Customer || model("Customer",customerSchema)

export default Customer