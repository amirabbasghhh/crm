
import HomePage from '@/components/templates/HomePage';
import Customer from '@/models/Customer';
import connectDB from '@/utils/connectDB';
import React from 'react';


const Index = ({customers}) => {
  
  return (
    <div>
       <HomePage customers={customers}/>
    </div>
  );
};

export default Index;

export async function getServerSideProps(){
    try{
      await connectDB()
      const customers=await Customer.find()
      return{
        props:{
          customers:JSON.parse(JSON.stringify(customers))
        }
      }
   }
    catch(err){
      return{
        notFound:true,
        
      }
   }
    

}