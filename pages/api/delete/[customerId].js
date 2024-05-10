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
     if(req.method==="DELETE"){
         const id=req.query.customerId
        try{
            await Customer.deleteOne({_id:id})
            res.status(200).json({status:"success",message:"data deleted successfully"})
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({
                status:'failed',
                message:'Error in deleting data from Database'
            })

        }
     }

}
export default handler