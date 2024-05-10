import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Card = ({customer}) => {
    const router=useRouter()
    const deleteHandler=async()=>{
        const res=await fetch(`api/delete/${customer._id}`,
        {method:"DELETE"}
        )
        const data=await res.json()
        if(data.status ==="success"){
            router.reload()
        }
        console.log(data)
    }
    return (
        <div className='flex flex-col md:flex-row items-center gap-x-5 justify-center md:justify-between border bg-blue-300 my-2 p-1 md:p-2 rounded-lg'>
            <div className='w-full md:w-[60%] flex flex-col mt-5 md:mt-1  gap-y-3 sm:flex-row items-center justify-center gap-x-2 md:gap-x-5 mb-10 md:mb-1'>
                <div className='w-1/4 md:w-1/3 text-center   sm:text-sm md:text-md '>
                     {customer.name}
                </div>
                <div className='w-1/4 md:w-1/3 text-center  sm:text-sm md:text-md '>
                     {customer.lastName} 
                </div>
                <div className='w-1/2 md:w-1/3 text-center  sm:text-sm md:text-md '>
                     {customer.email}
                      
                </div>
                     
            </div>
            <div className='buttons flex flex-col gap-y-3 px-5 md:px-1  md:flex-row items-center gap-x-3 w-full  md:w-[40%]'>
                <button onClick={deleteHandler} className='w-full md:w-1/3 text-center border border-rose-500 bg-rose-500 text-white p-1 rounded-lg'>Delete</button>
                <Link className='w-full md:w-1/3 text-center border border-green-500 text-white bg-green-500 p-1 rounded-lg' href={`/edit/${customer._id}`}>Edit</Link>
                <Link className='w-full md:w-1/3 text-center border border-green-500 text-white bg-green-500 p-1 rounded-lg mb-5 md:mb-0' href={`/customer/${customer._id}`}>Details</Link>

            </div>
        </div>
    );
};

export default Card;