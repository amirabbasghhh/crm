import React from 'react';
import PurchasedCart from '../modules/PurchasedCart';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CustomerEditPage = ({data,setData}) => {
    const router=useRouter()
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    const addHandler=()=>{
        setData({...data,products:[...data.products,{name:'',price:'',qtc:''}]})
        
    }
    const editHandler=async()=>{
        const res=await fetch(`/api/edit/${data._id}`,{
            method:"PATCH",
            body:JSON.stringify(data),
            headers:{'Content-Type':'application/json'}
        })
        
        const dat=await res.json()
        console.log(dat)
        if(dat.status==='success') router.push('/')
        
    }
    return (
        <div>
            <div className='flex flex-col'>
             <h1 className='text-white font-bold mt-10 mb-8'>Edit Customer</h1>
            <label className='text-gray-200 mt-5' htmlFor="name">Name</label>
            <input onChange={changeHandler} type="text" className='p-2 bg-gray-300 text-gray-500' id='Name' name='name' value={data.name} />  
            <label htmlFor="LastName" className='text-gray-200 mt-3'>LastName</label>
            <input onChange={changeHandler} type="text" className='p-2 bg-gray-300 text-gray-500' id='LastName' name='lastName' value={data.lastName}  />
            <label htmlFor="Email" className='text-gray-200 mt-3'>Email</label>
            <input onChange={changeHandler} type="text" className='p-2 bg-gray-300 text-gray-500' id='Email' name='email' value={data.email} />
            <label htmlFor="Phone" className='text-gray-200 mt-3'>Phone</label>
            <input onChange={changeHandler} type="number" className='p-2 bg-gray-300 text-gray-500' id='Phone' name='phone' value={data.phone || ''} />
            <label htmlFor="Address" className='text-gray-200 mt-3'>Address</label>
            <input onChange={changeHandler} type="text" className='p-2 bg-gray-300 text-gray-500' id='Address' name='address' value={data.address || ''} />
            <label htmlFor="PostalCode" className='text-gray-200 mt-3'>Postal Code</label>
            <input onChange={changeHandler} type="text" className='p-2 bg-gray-300 text-gray-500' id='PostalCode' name='postalCode' value={data.postalCode || ''} />
            <label htmlFor="Date" className='text-gray-200 mt-3'>Date</label>
            <input onChange={changeHandler} type="date" name="date" id="Date" className='p-2 bg-gray-300'/>

            <div className='border border-gray-300 rounded-lg p-3 mt-3'>
                <h2 className='text-white font-bold'>Purchased Product</h2>
                {data?.products?.map((product,index) =>(
                    <PurchasedCart key={index} index={index} {...product} form={data} setForm={setData} />
                ))}

                <button onClick={addHandler} className='w-full border-2 border-green-500 rounded-lg p-2 text-green-500 mt-5'>Add Item</button>

            </div>
        </div>
          <div className='mt-8 flex items-center justify-between'>
                <Link href='/' className=' font-bold w-1/2 mx-2 md:mx-0 md:w-[20%] text-center border border-rose-500 p-2 rounded-lg  text-white bg-rose-500'>cancel</Link>
                <button onClick={editHandler}  className=' font-bold w-1/2 mx-2 md:mx-0 md:w-[20%] text-center border border-green-500 p-2 rounded-lg  text-white bg-green-500'>edit</button>
          </div>
        </div>
    );
};

export default CustomerEditPage;