import React from "react";

const AvlabHeader = () => {
  return (
    <nav className="bg-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* <img src="/logo.png" alt="AVLAB Logo" className="h-10 mr-2" /> */}
          <div>
            <h1 className="text-5xl font-bold text-blue-900">AVLAB</h1>
            <p className="text-sm text-gray-500" style={{fontSize:"1rem"}}>Aviation Laboratories</p>
          </div>
        </div>
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer md:hidden block text-black"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        {/* Navigation Links */}
        <div className=" hidden peer-checked:block md:flex space-y-4 md:space-y-0 md:space-x-12 md:items-center absolute md:static top-full left-0 w-full bg-white md:bg-transparent md:w-auto">
          <a href="/services" className=" block text-blue-900 md:hover:text-orange-800 lg:hover:text-orange-800 md:hover:underline lg:hover-underline py-2 px-4 md:py-0">
            Our Services
          </a>
          <a href="/resources" className="block text-blue-900 md:hover:text-orange-800 lg:hover:text-orange-800 md:hover:underline lg:hover-underline py-2 px-4 md:py-0">
            Resources
          </a>
          <a href="/shop" className="block text-blue-900 md:hover:text-orange-800 lg:hover:text-orange-800 md:hover:underline lg:hover-underline py-2 px-4 md:py-0">
            Shop AVLAB
          </a>
          <a href="/about" className="block text-blue-900 md:hover:text-orange-800 lg:hover:text-orange-800 md:hover:underline lg:hover-underline py-2 px-4 md:py-0">
            About Us
          </a>
          <a href="/contact" className="block text-blue-900 md:hover:text-orange-800 lg:hover:text-orange-800 md:hover:underline lg:hover-underline py-2 px-4 md:py-0">
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



// import React, { useState } from "react";

// const AvlabHeader = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <div>
//             <h1 className="text-3xl md:text-5xl font-bold text-blue-900">AVLAB</h1>
//             <p className="text-xs md:text-sm text-gray-500">Aviation Laboratories</p>
//           </div>
//         </div>

//         {/* Hamburger Menu Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-blue-900 focus:outline-none"
//           >
//             <i className="fas fa-bars text-2xl"></i>
//           </button>
//         </div>

//         {/* Navigation Links & Contact Section */}
//         <div
//           className={`${
//             menuOpen ? "block" : "hidden"
//           } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center absolute md:relative top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
//         >
//           {/* Navigation Links */}
//           <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
//             <a href="/services" className="text-blue-900 hover:underline">
//               Our Services
//             </a>
//             <a href="/resources" className="text-blue-900 hover:underline">
//               Resources
//             </a>
//             <a href="/shop" className="text-blue-900 hover:underline">
//               Shop AVLAB
//             </a>
//             <a href="/about" className="text-blue-900 hover:underline">
//               About Us
//             </a>
//             <a href="/contact" className="text-blue-900 hover:underline">
//               Contact Us
//             </a>
//           </div>

//           {/* Contact Section */}
//           <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
//             <div className="flex items-center">
//               <i className="text-yellow-500 fas fa-phone-alt mr-2"></i>
//               <div>
//                 <p className="font-semibold text-sm">Call Us</p>
//                 <span className="text-blue-900">713-864-6677</span>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <i className="text-yellow-500 fas fa-envelope mr-2"></i>
//               <div>
//                 <p className="font-semibold text-sm">Email Address</p>
//                 <span className="text-blue-900">sales@avlab.com</span>
//               </div>
//             </div>
//           </div>

//           {/* Button Section */}
//           <div className="flex space-x-4">
//             <button className="bg-blue-800 text-white py-2 px-4 rounded-2xl hover:bg-blue-900">
//               Get Lab Results
//             </button>
//             <i className="fas fa-shopping-cart text-blue-900 relative">
//               <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
//                 0
//               </span>
//             </i>
//             <i className="fas fa-user-circle text-blue-900"></i>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default AvlabHeader;




