import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const CustomerDetails = ({data}) => {
    const router=useRouter()
    const deleteHandler=async()=>{
        const res=await fetch(`/api/delete/${data._id}`,{
            method:'DELETE'
        })
        const newRes=await res.json()
        if(newRes.status==='success') router.push('/')
    }
    return (
        <div>
            <h1 className='mt-10 mb-5 font-bold text-white text-md md:text-xl'>Customers Details</h1>
            <div className='p-2 rounded-lg bg-blue-900 py-5 mt-20 '>
                <div className='flex flex-col  md:flex-row items-center justify-center text-sm md:text-md gap-y-3 md:justify-between px-2 md:px-5'>
                    <p className='text-white'><span className='text-blue-300'>Name : </span>{data.name}</p>
                    <p className='text-white'><span className='text-blue-300'>Last Name : </span>{data.lastName}</p>
                    <p className='text-white'><span className='text-blue-300'>Email : </span>{data.email}</p>
                </div>
                <div className='flex flex-col  md:flex-row items-center justify-center text-sm md:text-md gap-y-3 md:justify-between px-2 md:px-5 mt-10'>
                    <p className='text-white'><span className='text-blue-300'>Phone : </span>{data.phone}</p>
                    <p className='text-white'><span className='text-blue-300 '>Address : </span>{data.address}</p>
                    <p className='text-white'><span className='text-blue-300'>Postal Code : </span>{data.postalCode}</p>
                </div>
                <p className='text-white text-center md:text-left px-5 mt-10'><span className='text-blue-300'>Date : </span>{data?.date?.split('T')[0]}</p>
            </div>
            <div className=' bg-blue-900 flex items-center justify-between pt-5 px-5 mt-10'>
                    <p><span className='text-blue-300'>Name</span></p>
                    <p><span className='text-blue-300'>Price</span></p>
                    <p><span className='text-blue-300'>Qty</span></p>
            </div>
            <div  className='p-2  bg-blue-900 px-5 '>
                {data?.products?.map(product => (
                   <div key={product._id} className='flex items-center justify-between  mt-10'>
                   <p><span className='text-blue-300'>{product.name}</span></p>
                   <p><span className='text-blue-300'>{product.price}</span></p>
                   <p><span className='text-blue-300'>{product.qtc} </span></p>
               </div>
                ))}

            </div>
            <div className='bg-blue-900 flex flex-col md:flex-row justify-center gap-y-4 md:justify-between p-3 rounded-lg items-center mt-5'>
                <p className='text-white  font-bold'>Edit or Delete?</p>
                <button onClick={deleteHandler} className='p-2 w-full md:w-1/5 rounded-lg text-white bg-rose-500 text-center'>Delete</button>
                <Link href={`/edit/${data._id}`} className='p-2 w-full md:w-1/5 rounded-lg text-center text-white bg-green-500'>Edit</Link>

            </div>
        </div>
    );
};

export default CustomerDetails;