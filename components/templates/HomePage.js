import React from 'react';
import Card from '../modules/Card';

const HomePage = ({customers}) => {
    return (
        <div className='mt-10 '>
            {customers.map(customer => (
                <Card  key={customer._id} customer={customer}/>
            ))}
        </div>
    );
};

export default HomePage;