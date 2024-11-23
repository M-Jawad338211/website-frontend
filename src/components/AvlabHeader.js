import React from "react";

const AvlabHeader = () => {
  return (
    <nav className="bg-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="AVLAB Logo" className="h-10 mr-2" />
          <div>
            <h1 className="text-5xl font-bold text-blue-900">AVLAB</h1>
            <p className="text-sm text-gray-500" style={{fontSize:"1rem"}}>Aviation Laboratories</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/services" className="text-blue-900 hover:underline">
            Our Services
          </a>
          <a href="/resources" className="text-blue-900 hover:underline">
            Resources
          </a>
          <a href="/shop" className="text-blue-900 hover:underline">
            Shop AVLAB
          </a>
          <a href="/about" className="text-blue-900 hover:underline">
            About Us
          </a>
          <a href="/contact" className="text-blue-900 hover:underline">
            Contact Us
          </a>
        </div>

        {/* Contact Section */}
        <div className="hidden md:flex items-center space-x-4">
        <i className="text-yellow-500 fas fa-phone-alt"></i>
          <div className="flex flex-col items-center space-x-1">
            
            <p className="font-semibold text-sm mr-14">Call Us</p>
            <span className="text-blue-900">713-864-6677</span>
          </div>
          <i className="text-yellow-500 fas fa-envelope "></i>
          <div className="flex flex-col items-center space-x-1">
            <p className="font-semibold text-sm mr-6">Email Address</p>
            <span className="text-blue-900">sales@avlab.com</span>
          </div>
        </div>

        {/* Button Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-blue-800 text-white py-2 px-4 rounded-2xl hover:bg-blue-900">
            Get Lab Results
          </button>
          <i className="fas fa-shopping-cart text-blue-900 relative">
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
              0
            </span>
          </i>
          <i className="fas fa-user-circle text-blue-900"></i>
        </div>
      </div>
    </nav>
  );
};

export default AvlabHeader;







