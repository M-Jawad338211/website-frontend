import React from 'react';

import { Link } from 'react-router-dom';
function Navbar() {
    
    
    return (
      <nav className='pt-5'>
        <ul className="flex space-x-12 justify-center">
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
           <Link to="/services" className=" text-black hover:text-orange-800">Services</Link>
          </li>
          <li>
           <Link to="/portfolio" className=" text-black hover:text-orange-800">Portfolio</Link>
          </li>
          <li>
            <a href="/blog" className="text-black  hover:text-orange-800">Blog</a>
          </li>
          <li>
           <Link to="/contacts" className=" text-black hover:text-orange-800">Contacts</Link>
          </li>
          
        </ul>
      </nav>
    );
  }
  export default Navbar;