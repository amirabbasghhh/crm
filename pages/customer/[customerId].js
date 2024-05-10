import CustomerDetails from '@/components/templates/CustomerDetails';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Index = () => {
    const[data,setData]=useState('')
    const router=useRouter()
    const id=router.query.customerId
    
    useEffect(()=>{
    fetch(`/api/customer/${id}`).then(res => res.json()).then(data => setData(data.data))
    },[])

    return (
        <div>
            <CustomerDetails data={data}/>
        </div>
    );
};

export default Index;