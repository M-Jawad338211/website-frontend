// src/components/Footer.jsx
import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
    <footer 
  className="relative bg-cover bg-center h-auto sm:h-96 w-full mt-[-45px] px-8 sm:px-32 text-white" 
  style={{ backgroundImage: 'url(./footer.png)' }}>

  <div className="flex flex-col sm:flex-row w-full justify-between gap-y-8 sm:gap-x-8">
  
    {/* First Column - Logo and Text */}
    <div className="flex flex-col text-center sm:text-left items-center sm:items-start">
      <div className="mt-16 sm:mt-20">
        <img src="/logo1.png" alt="unitfactor-logo" className="h-14 w-40 sm:h-16 sm:w-56" />
      </div>
      <p className="text-sm sm:text-xs mt-4 sm:mt-6 font-medium leading-relaxed">
        We help ambitious businesses like<br />
        yours generate more profits by<br />
        building awareness, driving web<br />
        traffic, connecting with customers,<br />
        and growing overall sales.
      </p>
      <div className="flex gap-4 mt-4 sm:mt-6 justify-center sm:justify-start">
        {[1, 2, 3, 4].map(icon => (
          <div key={icon} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <img src={`/icon${icon}.png`} alt={`Icon ${icon}`} className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        ))}
      </div>
    </div>

    {/* Second Column - Contacts */}
    <div className="flex flex-col items-center sm:items-start mt-10 sm:mt-24">
      <h1 className="text-lg font-bold">Contacts</h1>
      <p className="text-sm sm:text-xs mt-4 sm:mt-6 font-medium leading-relaxed">
        Address: Sabzazar LHR<br />
        Phone: +123 456 7890<br />
        Email: aly@gmail.com<br />
        Open: Monday-Saturday
      </p>
    </div>

    {/* Third Column - Services */}
    <div className="flex flex-col items-center sm:items-start mt-10 sm:mt-24">
      <h1 className="text-lg font-bold">Services</h1>
      <p className="text-sm sm:text-xs mt-4 sm:mt-6 font-medium leading-relaxed cursor-pointer">
        Web Development<br />
        Digital Marketing<br />
        SEO Optimization<br />
        Graphic Design
      </p>
      <ul>
        <li><Link to="/animations" className="text-white">Animations</Link></li>
      </ul>
    </div>

    {/* Fourth Column - Privacy Policy */}
    <div className="flex flex-col items-center sm:items-start mt-10 sm:mt-24">
      <h1 className="text-lg font-bold">Privacy Policy</h1>
      <p className="text-sm sm:text-xs mt-4 sm:mt-6 font-medium leading-relaxed">
        Social Media Marketing<br />
        Web Development<br />
        SEO Optimization<br />
        Content Marketing
      </p>
    </div>
  </div>
</footer>


  );
};

export default Footer;
