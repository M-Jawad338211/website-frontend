// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="relative flex bg-cover bg-center h-96 w-full mt-[-45px] px-32 text-white" style={{ backgroundImage: 'url(./footer.png)' }}>
    {/* Parent container with flex-row */}
    <div className="flex w-full justify-between gap-x-8">
    
    {/* First Column - Logo and Text */}
    <div className="flex flex-col">
        <div className="mt-20">
        <img src="/logo1.png" alt="unitfactor-logo" className="h-16 w-56" />
        </div>
        <p className="text-xs mt-6 font-medium leading-relaxed" style={{ fontSize: '0.9rem' }}>
        We help ambitious businesses like<br />
        yours generate more profits by<br />
        building awareness, driving web<br />
        traffic, connecting with customers,<br />
        and growing overall sales.
        </p>
        <div className="flex gap-4 mt-6">
        
        <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <img src="/icon1.png" alt="Icon 1" className="h-6 w-6" />
        </div>
        
        <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <img src="/icon2.png" alt="Icon 2" className="h-6 w-6" />
        </div>
    
        <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <img src="/icon3.png" alt="Icon 3" className="h-6 w-6" />
        </div>
        
        <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <img src="/icon4.png" alt="Icon 4" className="h-6 w-6" />
        </div>
        </div>
    </div>
    
    {/* Second Column - Contacts */}
    <div className="flex flex-col mt-24">
        <h1 className="text-lg font-bold ">Contacts</h1>
        <p className="text-xs mt-6 font-medium leading-relaxed" style={{ fontSize: '0.9rem' }}>
        Addres: Sabzazar LHR<br />
        Phone: +123 456 7890<br />
        Email: aly@gmail.com<br/>
        Open: Monday-Saturday
        </p>
    </div>
    
    {/* Third Column - Services */}
    <div className="flex flex-col mt-24">
        <h1 className="text-lg font-bold">Services</h1>
        <p className="text-xs mt-6 font-medium leading-relaxed" style={{ fontSize: '0.9rem' }}>
        Web Development<br />
        Digital Marketing<br />
        SEO Optimization<br />
        Graphic Design
        
        </p>
    </div>
    
    {/* Fourth Column - Privacy Policy */}
    <div className="flex flex-col mt-24">
        <h1 className="text-lg font-bold">Privacy Policy</h1>
        <p className="text-xs mt-6 font-medium leading-relaxed" style={{ fontSize: '0.9rem' }}>
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
