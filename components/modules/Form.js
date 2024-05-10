import React from 'react';
import PurchasedCart from './PurchasedCart';

const Form = ({form,setForm}) => {
    const {products}=form
    const changeHandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})

    }
    const addHandler=()=>{
        setForm({...form,products:[...products,{name:'',price:'',qtc:''}]})
    }
    return (
        <div className='flex flex-col'>
            <label className='text-gray-200 mt-5' htmlFor="name">Name</label>
            <input onChange={changeHandler} type="text" className='p-2 bg-gray-300' id='Name' name='name' value={form.name} />  
            <label htmlFor="LastName" className='text-gray-200 mt-3'>LastName</label>
            <input onChange={changeHandler} type="text" className='p-2 bg-gray-300' id='LastName' name='lastName' value={form.LastName}  />
            <label htmlFor="Email" className='text-gray-200 mt-3'>Email</label>
            <input onChange={changeHandler} type="text" className='p-2 bg-gray-300' id='Email' name='email' value={form.email} />
            <label htmlFor="Phone" className='text-gray-200 mt-3'>Phone</label>
            <input onChange={changeHandler} type="number" className='p-2 bg-gray-300' id='Phone' name='phone' value={form.phone} />
            <label htmlFor="Address" className='text-gray-200 mt-3'>Address</label>
            <input onChange={changeHandler} type="text" className='p-2 bg-gray-300' id='Address' name='address' value={form.address} />
            <label htmlFor="PostalCode" className='text-gray-200 mt-3'>Postal Code</label>
            <input onChange={changeHandler} type="text" className='p-2 bg-gray-300' id='PostalCode' name='postalCode' value={form.postalCode} />
            <label htmlFor="Date" className='text-gray-200 mt-3'>Date</label>
            <input onChange={changeHandler} type="date" name="date" id="Date" className='p-2 bg-gray-300'/>

            <div className='border border-gray-300 rounded-lg p-3 mt-3'>
                <h2 className='text-white font-bold'>Purchased Product</h2>
                {products.map((product,index) =>(
                    <PurchasedCart key={index} index={index} {...product} form={form} setForm={setForm} />
                ))}

                <button onClick={addHandler} className='w-full border-2 border-green-500 rounded-lg p-2 text-green-500 mt-5'>Add Item</button>

            </div>
        </div>
    );
};

export default Form;