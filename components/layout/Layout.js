import Link from 'next/link';
import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='bg-blue-950'>
            <div className='mx-auto w-[70%] py-5 '>
                <header className='flex items-center justify-between pt-10'>
                    <Link href='/' className='font-bold text-white text-sm md:text-3xl'>CRM PROJECT</Link>
                    <Link className='p-2 text-sm md:text-md bg-green-400 rounded-lg text-white' href="/add-customer">Add Customer</Link>
                </header>
                <div className='min-h-[1000px]'>
                    {children}
                </div>
                <footer className='flex items-center justify-center bg-blue-400 p-2 rounded-xl mt-8 '>
                    <p>Next js | Crm Project &copy; </p>
                </footer>
            </div>

        </div>
    );
};

export default Layout;