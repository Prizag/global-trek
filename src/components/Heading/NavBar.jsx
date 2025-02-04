"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar= () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (<>
        <div ref={navRef} className="fixed left-0 top-0">
            <motion.div
                initial={{ width: '50px' }}
                animate={{ width: isOpen ? '200px' : '50px' }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 text-white h-screen"
            >
                <div className='border-b border-gray-700'>
                <div className="p-4">
                {  isOpen ?  <h1 className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Brand</h1>:<h1  onClick={() => setIsOpen(!isOpen)} className={`text-xl font-bold ${isOpen ? 'hidden' : 'block'} cursor-pointer`}>  ☰</h1>}
                </div>
               { isOpen && <button
                    className="absolute top-4 right-4 text-2xl "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>}
                </div>
                <nav className={`flex flex-col space-y-4 mt-8 ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#home" className="nav-link px-4 py-2 hover:bg-gray-700">Home</a>
                    <a href="#about" className="nav-link px-4 py-2 hover:bg-gray-700">About</a>
                    <a href="#services" className="nav-link px-4 py-2 hover:bg-gray-700">Services</a>
                    <a href="#contact" className="nav-link px-4 py-2 hover:bg-gray-700">Contact</a>
                </nav>
            </motion.div>
        </div>
    </>
    );
};

export default NavBar;