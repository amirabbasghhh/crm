import React, { useState } from 'react';
import Form from '../modules/Form';
import { useRouter } from 'next/router';

const AddCustomerPage = () => {
    const router=useRouter()
    const [form,setForm]=useState({
        name:'',
        lastName:'',
        email:'',
        phone:'',
        address:'',
        postalCode:'',
        date:'',
        products:[]

    })
    const saveHandler=async()=>{
      const res=await fetch('/api/customer',{
        method:"POST",
        body:JSON.stringify({data:form}),
        headers:{
            "Content-Type": "application/json",
        }
      })
      const data=await res.json()
      console.log(data)
      if(data.status ==="success") router.push('/')
      
    }
    const cancelHandler=()=>{
         setForm(
            {
                name:'',
                lastName:'',
                email:'',
                phone:'',
                address:'',
                postalCode:'',
                date:''
            }
         )
         router.push('/')
    }
    return (
        <div>
            <Form form={form} setForm={setForm}/>
            <div className='flex items-center justify-between mt-10'>
                <button onClick={cancelHandler} className='w-1/3 p-2 rounded-lg bg-red-500 text-white cursor-pointer'>cancel</button>
                <button onClick={saveHandler} className='w-1/3 p-2 px-3 rounded-lg bg-green-500 text-white cursor-pointer'>save</button>
            </div>
        </div>
    );
};

export default AddCustomerPage;