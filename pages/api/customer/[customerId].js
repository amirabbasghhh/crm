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
      if(req.method==='GET'){
          const id=req.query.customerId
          const customer=await Customer.findById(id)
          try{
             res.status(200).json({status:'success',data:customer})
          }
          catch(err){
             res.status(500).json({
                status:'failed',
                message:'Error in retrieving data from DataBase'
             })
          }

      }

}
export default handler