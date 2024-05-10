import Customer from "@/models/Customer"
import connectDB from "@/utils/connectDB"

const handler=async(req,res)=>{
    try{
        await connectDB()
     }
     catch(err){
        console.log(err)
        res.status(500).json({status:"failed",message:"Error in connecting to DataBase"})
        return
     }
     console.log(req.body.data)
     if(req.method ==="PATCH"){
        const data=req.body
        console.log(req.body)
        const id=req.query.customerId
        try{
            const customer=await Customer.findOne({_id:id})
            
            customer.name=data.name;
            customer.lastName=data.lastName;
            customer.email=data.email;
            customer.phone=data.phone;
            customer.address=data.address;
            customer.postalCode=data.postalCode;
            customer.data=data.data;
            customer.products=data.products;
            customer.updatedAt=Date.now();
            await customer.save()
            res.status(200).json({status:'success',data:customer})

        }
        catch(err){   
            res.status(500).json({status:'failed',message:'error in updating data in database'})
        }
     }

}
export default handler