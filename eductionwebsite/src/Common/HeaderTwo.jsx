import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import { Link } from 'react-router-dom';
function HeaderTwo() {
    

    return (
        <>
        <header className={`bg-white text-black shadow-lg z-[999999] w-full`} id='headerpart'>
        <nav className=" w-full border-gray-200 px-4 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto lg:px-6 lg:py-4 ">
        <a href="#" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap ">LOGO</span>
        </a>
        <div className={`flex items-center lg:order-2 font-[400] text-black `}>
        <Link to={'/login'} className="    rounded-lg text-[18px] font-['Poppins]  px-4 lg:px-5 py-2 lg:py-2.5 mr-2   ">Log in</Link>
        <Link to={'/register'} className="    rounded-lg text-[18px] font-['Poppins]  px-4 lg:px-5 py-2 lg:py-2.5 mr-2   ">Register</Link>
        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        </div>
        <div className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul className={`flex flex-col mt-4 font-[400]text-black font-['Poppins'] lg:flex-row lg:space-x-8 lg:mt-0 text-[18px] `}>
        <li>
        <Link to={'/'} className="block py-2 pr-4 pl-3  rounded bg-primary-700 lg:bg-transparent lg:p-0 " aria-current="page">Home</Link>
        </li>
        <li>
        <Link to={'/courses'} className="block py-2 pr-4 pl-3   border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent dark:border-gray-700">Courses</Link>
        </li>
        <li>
        <Link to={'/about'} className="block py-2 pr-4 pl-3   border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
        </li>
        <li>
        <Link to={'/team'} className="block py-2 pr-4 pl-3   border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent dark:border-gray-700">Team</Link>
        </li>
        <li>
        <Link to={'/contact'} className="block py-2 pr-4 pl-3   border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
        </li>
        </ul>
        </div>
        </div>
        </nav>
        </header>
        </>
        )
    }
    
    export default HeaderTwo