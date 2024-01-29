'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="font-poppins relative">
                <button className="p-4 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <div className='z-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </button>
    
                <div className={`my-5 fixed -z-10 bg-white top-0 left-0 h-full w-64 transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                    <h1 className="p-4 font-bold text-xl hover:scale-100 scale-90 duration-300 ">Ixtaa</h1>
                    <div className="font-semibold p-5 flex flex-col md:flex md:justify-center">
                        <Link className="px-3 hover:scale-100 scale-95 hover:text-sky-950 duration-300" href="">Home</Link>
                        <Link className="px-3 hover:scale-100 scale-95 hover:text-sky-950 duration-300" href="">Projects</Link>
                        <Link className="px-3 hover:scale-100 scale-95 hover:text-sky-950 duration-300" href="">About Me</Link>
                        <Link className="px-3 hover:scale-100 scale-95 hover:text-sky-950 duration-300" href="">Contacts</Link>
                    </div>
                </div>
            </div>
        </>
    )
    
}