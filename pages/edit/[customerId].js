import Form from '@/components/modules/Form';
import CustomerEditPage from '@/components/templates/CustomerEditPage';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Index = () => {
    const [data,setData]=useState('')
    const router=useRouter()
    const id=router.query.customerId
    useEffect(()=>{
       fetch(`/api/customer/${id}`).then(res => res.json()).then(data => setData(data.data))
    },[])
    return (
        <div>
            <CustomerEditPage data={data}  setData={setData}/>
        </div>
    );
};

export default Index;