import React from 'react';

const PurchasedCart = ({name,price,qtc,form,setForm,index}) => {
    const{products}=form
    const changeHandler=(index,e)=>{
     const newProducts=[...products]
     newProducts[index][e.target.name]=e.target.value
     setForm({...form,products:newProducts})
        
    }
    const removeHandler=(e,index)=>{
        console.log(index)
        const newProducts=[...products]
        newProducts.splice(index,1)
       setForm({...form,products:newProducts})
    }
  
    return (
        <div className='border p-2 my-5 rounded-lg '>
            <div className='flex flex-col'>
                <label className='text-gray-200' htmlFor="name">Product Name</label>
                <input onChange={(e)=>changeHandler(index,e)} className='p-2 bg-gray-300' type="text" name="name" id="name" value={name}   />

            </div>
            <div className='flex flex-col gap-y-3 md:flex-row items-center justify-center md:justify-between mt-3'>
                <div className='flex w-full md:mx-3 flex-col gap-y-2'>
                    <label className='text-gray-200' htmlFor="price">Price</label>
                    <input onChange={(e)=>changeHandler(index,e)} className='p-2 bg-gray-300' type="text" id='price' name='price' value={price} />
                </div>
                <div className='flex w-full md:mx-3 flex-col gap-y-2'>
                    <label className='text-gray-200' htmlFor="">Qty</label>
                    <input onChange={(e)=>changeHandler(index,e)} className='p-2 bg-gray-300' type="text" id='qty' name='qtc' value={qtc}  />
                </div>
            </div>
            <button onClick={(e)=>removeHandler(e,index)} className='border-2 border-red-500 text-red-500 w-full mt-5 rounded-lg py-2 mb-2'>Remove</button>
        </div>
    );
};

export default PurchasedCart;