import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
function Navbar() {
    
    
    return (
      <nav className='pt-5'>
        <ul className="flex space-x-6 justify-center">
          <li>
            <img  src="/logoicon.png" alt="unitfactor-logo" className="h-12 pb-4 pr-16"/>
          </li>  
          <li>
            <a href="/" className="text-black  hover:text-orange-800">Home</a>
          </li>
          <li>
            <a href="/page" className="text-black  hover:text-orange-800">Page</a>
          </li>
          <li>
            <a href="/serices" className="text-black  hover:text-orange-800">Services</a>
          </li>
          <li>
            <a href="/portfolio" className="text-black  hover:text-orange-800">Portfolio</a>
          </li>
          <li>
            <a href="/blog" className="text-black  hover:text-orange-800">Blog</a>
          </li>
          <li>
            <a href="/contacts" className="text-black  hover:text-orange-800">Contacts</a>
          </li>
          <li className="flex items-center space-x-2"> 
          <SearchIcon className="text-gray-500 ml-10 mb-3" />
           
            <button className='bg-blue-950 text-white rounded-3xl h-9 w-24 text-sm mb-4'>
                Contact Us
            </button>
          </li>  
        </ul>
      </nav>
    );
  }
  export default Navbar;