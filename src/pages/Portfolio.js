

// // import React from "react";
// // import Dropdown from "../components/Dropdown";
// // function Portfolio() {

// //   // Projects data
// // //   const projects = [
// // //     { id: 1, image: "1.png", category: "TechStack", type: "React" },
// // //     { id: 2, image: "2nd.png", category: "Industries", type: "Fintech" },
// // //     { id: 3, image: "mokeup.png", category: "Marketing", type: "SEO" },
// // //     { id: 4, image: "incast-capital.png", category: "TechStack", type: "Python" },
// // //     { id: 5, image: "AV-lab-1.png", category: "CMS", type: "Wordpress" },
// // //     { id: 6, image: "1st1.png", category: "Product-Type", type: "python" },
// // //     { id: 7, image: "SaaS-Business.jpg", category: "Product-Type", type: "SAAS" },
// // //     { id: 8, image: "what-is-SAAS.png", category: "Product-Type", type: "SAAS" },
// // //     { id: 9, image: "SaaS.jpeg", category: "Product-Type", type: "SAAS" },
// // //     { id: 10, image: "IaaS.jpg", category: "Product-Type", type: "IAAS" },
// // //     { id: 11, image: "iaas1.jpg", category: "Product-Type", type: "IAAS" },
// // //     { id: 12, image: "iaas-intro.png", category: "Product-Type", type: "IAAS" },
// // //     { id: 13, image: "PaaS.png", category: "Product-Type", type: "PAAS" },
// // //     { id: 14, image: "PaaS2.png", category: "Product-Type", type: "PAAS" },
// // //     { id: 15, image: "What-is-PWA.png", category: "Product-Type", type: "PWA" },
// // //     { id: 16, image: "PWA-development.png", category: "Product-Type", type: "PWA" }, 
// // //     { id: 17, image: "progressive-web-app.jpg", category: "Product-Type", type: "PWA" },
    
// // //   ];

  

// //   // Dropdown options
// // //   const dropdownOptions = {
// // //     "Product-Type": ["SAAS", "IAAS", "PAAS", "PWA"],
// // //     Industries: ["Fintech", "Edtech", "Medtech", "Food", "Crypto"],
// // //     Marketing: ["SEO", "Content", "PPC", "Social Media", "Email"],
// // //     TechStack: ["React", "Vue", "Angular", "Node", "Python"],
// // //     CMS: ["WordPress", "Shopify", "Drupal", "Magento", "Wix"],
// // //   };

// //   return (
// //     <div className="Portfolio">
// //       <div className="flex flex-col items-center mt-10 px-4">
// //         <p className="text-sm font-normal mb-2">Our Projects</p>
// //         <h1 className="text-2xl md:text-3xl font-extrabold text-center">
// //           <span className="text-[#0F1C3F] leading-normal">View Some of Our Works</span>
// //           <br />
// //           <span className="text-[#9F3F3F]">
// //             <span className="text-black">and</span> Case Studies{" "}
// //             <span className="text-black">for</span> Clients
// //           </span>
// //         </h1>
// //       </div>

// //       {/* Dropdown Menu */}
// //       <div className="flex gap-2 justify-center mt-12 relative" >
// //        <Dropdown  />
// //       </div>

      
// //       <div className=" z-10 mt-16 h-28 rounded-lg w-[80%] mx-auto bg-cover bg-center relative" style={{ backgroundImage: 'url(./Rectangle3.png)' }}>
// //               <div className="absolute inset-0 flex flex-col mt-6 items-center justify-center text-white">
// //               <p className="text-xl font-bold" style={{fontSize:'1.5rem'}}>Take Your Website to Next Level Right Now!</p>
// //               <button className="bg-white text-red-800 rounded-3xl h-8 w-20  text-xs  mt-3 font-bold">
// //                   Start Now
// //               </button>
// //               </div>

            

// //             </div>
// //             <footer className="relative flex bg-cover bg-center h-96 w-full mt-[-45px] px-32 text-white" style={{ backgroundImage: 'url(./footer.png)' }}>
// //             {/* Parent container with flex-row */}
// //             <div className="flex w-full justify-between gap-x-8">
            
// //             {/* First Column - Logo and Text */}
// //             <div className="flex flex-col">
// //                 <div className="mt-20">
// //                 <img src="/logo1.png" alt="unitfactor-logo" className="h-16 w-56" />
// //                 </div>
// //                 <p className="text-xs mt-6 font-medium leading-relaxed" style={{ fontSize: '0.9rem' }}>
// //                 We help ambitious businesses like<br />
// //                 yours generate more profits by<br />
// //                 building awareness, driving web<br />
// //                 traffic, connecting with customers,<br />
// //                 and growing overall sales.
// //                 </p>
// //                 <div className="flex gap-4 mt-6">
                
// //                 <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
// //                     <img src="/icon1.png" alt="Icon 1" className="h-6 w-6" />
// //                 </div>
                
// //                 <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
// //                     <img src="/icon2.png" alt="Icon 2" className="h-6 w-6" />
// //                 </div>
            
// //                 <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
// //                     <img src="/icon3.png" alt="Icon 3" className="h-6 w-6" />
// //                 </div>
                
// //                 <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
// //                     <img src="/icon4.png" alt="Icon 4" className="h-6 w-6" />
// //                 </div>
// //                 </div>
// //             </div>
            
// //             {/* Second Column - Contacts */}
// //             <div className="flex flex-col mt-24">
// //                 <h1 className="text-lg font-bold ">Contacts</h1>
// //                 <p className="text-xs mt-6 font-medium leading-relaxed" style={{ fontSize: '0.9rem' }}>
// //                 Addres: Sabzazar LHR<br />
// //                 Phone: +123 456 7890<br />
// //                 Email: aly@gmail.com<br/>
// //                 Open: Monday-Saturday
// //                 </p>
// //             </div>
            
// //             {/* Third Column - Services */}
// //             <div className="flex flex-col mt-24">
// //                 <h1 className="text-lg font-bold">Services</h1>
// //                 <p className="text-xs mt-6 font-medium leading-relaxed" style={{ fontSize: '0.9rem' }}>
// //                 Web Development<br />
// //                 Digital Marketing<br />
// //                 SEO Optimization<br />
// //                 Graphic Design
                
// //                 </p>
// //             </div>
            
// //             {/* Fourth Column - Privacy Policy */}
// //             <div className="flex flex-col mt-24">
// //                 <h1 className="text-lg font-bold">Privacy Policy</h1>
// //                 <p className="text-xs mt-6 font-medium leading-relaxed" style={{ fontSize: '0.9rem' }}>
// //                 Social Media Marketing<br />
// //                 Web Development<br />
// //                 SEO Optimization<br />
// //                 Content Marketing
// //                 </p>
// //             </div>
            
// //             </div>
// //             </footer>      
// //     </div>
// //   );
// // }

// // export default Portfolio;



// // Portfolio.js
// import React, { useState } from 'react';
// import Dropdown from '../components/Dropdown';

// function Portfolio() {
//   // Define dropdown options
//   const dropdownOptions = {
//     "Product-Type": ["SAAS", "IAAS", "PAAS", "PWA"],
//     Industries: ["Fintech", "Edtech", "Medtech", "Food", "Crypto"],
//     Marketing: ["SEO", "Content", "PPC", "Social Media", "Email"],
//     TechStack: ["React", "Vue", "Angular", "Node", "Python"],
//     CMS: ["WordPress", "Shopify", "Drupal", "Magento", "Wix"],
//   };

//   const [selectedCategory, setSelectedCategory] = useState("Product-Type");
//   const [selectedOption, setSelectedOption] = useState(null);

//   // Handle dropdown selection
//   const handleSelect = (option) => {
//     setSelectedOption(option);
//     console.log('Selected Option:', option);
//   };

//   return (
//     <div className="Portfolio">
//       {/* Header Section */}
//       <div className="flex flex-col items-center mt-10 px-4">
//         <p className="text-sm font-normal mb-2">Our Projects</p>
//         <h1 className="text-2xl md:text-3xl font-extrabold text-center">
//           <span className="text-[#0F1C3F] leading-normal">View Some of Our Works</span>
//           <br />
//           <span className="text-[#9F3F3F]">
//             <span className="text-black">and</span> Case Studies{" "}
//             <span className="text-black">for</span> Clients
//           </span>
//         </h1>
//       </div>

//       {/* Dropdown Menu Section */}
//       <div className="flex gap-4 justify-center mt-12">
//         {/* Dropdown for Product Types */}
//         <Dropdown
//           items={dropdownOptions[selectedCategory]}
//           handleSelect={handleSelect}
//         />
//       </div>

//       {/* CTA Section */}
//       <div
//         className="z-10 mt-16 h-28 rounded-lg w-[80%] mx-auto bg-cover bg-center relative"
//         style={{ backgroundImage: 'url(./Rectangle3.png)' }}
//       >
//         <div className="absolute inset-0 flex flex-col mt-6 items-center justify-center text-white">
//           <p className="text-xl font-bold" style={{ fontSize: '1.5rem' }}>
//             Take Your Website to Next Level Right Now!
//           </p>
//           <button className="bg-white text-red-800 rounded-3xl h-8 w-20 text-xs mt-3 font-bold">
//             Start Now
//           </button>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer
//         className="relative flex bg-cover bg-center h-96 w-full mt-[-45px] px-32 text-white"
//         style={{ backgroundImage: 'url(./footer.png)' }}
//       >
//         <div className="flex w-full justify-between gap-x-8">
//           {/* Logo and Info */}
//           <div className="flex flex-col mt-20">
//             <img src="/logo1.png" alt="unitfactor-logo" className="h-16 w-56" />
//             <p className="text-xs mt-6 font-medium leading-relaxed">
//               We help ambitious businesses like yours generate more profits by
//               building awareness, driving web traffic, connecting with customers,
//               and growing overall sales.
//             </p>
//           </div>

//           {/* Contacts */}
//           <div className="flex flex-col mt-24">
//             <h1 className="text-lg font-bold">Contacts</h1>
//             <p className="text-xs mt-6">
//               Address: Sabzazar LHR<br />
//               Phone: +123 456 7890<br />
//               Email: aly@gmail.com<br />
//               Open: Monday-Saturday
//             </p>
//           </div>

//           {/* Services */}
//           <div className="flex flex-col mt-24">
//             <h1 className="text-lg font-bold">Services</h1>
//             <p className="text-xs mt-6">
//               Web Development<br />
//               Digital Marketing<br />
//               SEO Optimization<br />
//               Graphic Design
//             </p>
//           </div>

//           {/* Privacy Policy */}
//           <div className="flex flex-col mt-24">
//             <h1 className="text-lg font-bold">Privacy Policy</h1>
//             <p className="text-xs mt-6">
//               Social Media Marketing<br />
//               Web Development<br />
//               SEO Optimization<br />
//               Content Marketing
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Portfolio;








import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Button from '@mui/material/Button';


function Portfolio() {
  // Dropdown Options
  const productTypes = ["PAAS", "SAAS", "IAAS", "PWA"];
  const industries = ["Fintech", "Edtech", "Medtech", "Food", "Crypto"];
  const marketing = ["SEO", "Advertising", "SMM", "Email Marketing"];
  const cmsOptions = ["WordPress", "Shopify", "Webflow", "Wix"];
  const TechStack =["React","Vue","Angular","ROR","Python","Java"]

  // State to track selected options
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  // Handle Dropdown Selection
  const handleSelect = (option) => {
    debugger
    setSelectedFilter(option);
   
  };

  // Handle ALL button click
  const handleAllClick = () => {
    setSelectedFilter("ALL");
    console.log("Showing All Projects");
  };

  return (
    <div className="Portfolio">
      <div className="flex flex-col items-center mt-10 px-4">
        <p className="text-sm font-normal mb-2">Our Projects</p>
        <h1 className="text-2xl md:text-3xl font-extrabold text-center">
          <span className="text-[#0F1C3F] leading-normal">View Some of Our Works</span>
          <br />
          <span className="text-[#9F3F3F]">
            <span className="text-black">and</span> Case Studies{" "}
            <span className="text-black">for</span> Clients
          </span>
        </h1>
      </div>

      {/* Filter Dropdowns */}
      <div className="flex gap-4 justify-center mt-12">
        {/* ALL Button */}
        <Button
          variant="contained"
          onClick={handleAllClick}
        >
          ALL
        </Button>

        {/* Product-Type Dropdown */}
        <Dropdown
          label="Product-Type"
          items={productTypes}
          handleSelect={handleSelect}
        />

        {/* Industries Dropdown */}
        <Dropdown
          label="Industries"
          items={industries}
          handleSelect={handleSelect}
        />

        {/* Marketing Dropdown */}
        <Dropdown
          label="Marketing"
          items={marketing}
          handleSelect={handleSelect}
        />

        {/* CMS Dropdown */}
        <Dropdown
          label="CMS"
          items={cmsOptions}
          handleSelect={handleSelect}
        />
         <Dropdown
          label="TechStack"
          items={TechStack}
          handleSelect={handleSelect}
        />
      </div>

      {/* Display Selected Option */}
      {selectedFilter !== "ALL" && (
        <p className="text-center mt-4 text-lg">
          Selected Filter: <span className="font-bold">{selectedFilter}</span>
        </p>
      )}

      {/* Promotional Section */}
      <div
        className="z-10 mt-16 h-28 rounded-lg w-[80%] mx-auto bg-cover bg-center relative"
        style={{ backgroundImage: 'url(./Rectangle3.png)' }}
      >
        <div className="absolute inset-0 flex flex-col mt-6 items-center justify-center text-white">
          <p className="text-xl font-bold" style={{ fontSize: '1.5rem' }}>
            Take Your Website to Next Level Right Now!
          </p>
          <button className="bg-white text-red-800 rounded-3xl h-8 w-20 text-xs mt-3 font-bold">
            Start Now
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        className="relative flex bg-cover bg-center h-96 w-full mt-[-45px] px-32 text-white"
        style={{ backgroundImage: 'url(./footer.png)' }}
      >
        <div className="flex w-full justify-between gap-x-8">
          {/* First Column - Logo and Text */}
          <div className="flex flex-col mt-20">
            <img src="/logo1.png" alt="unitfactor-logo" className="h-16 w-56" />
            <p className="text-xs mt-6 font-medium">
              We help businesses generate more profits by building awareness and driving web traffic.
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col mt-24">
            <h1 className="text-lg font-bold">Contacts</h1>
            <p className="text-xs mt-6">
              Address: Sabzazar LHR<br />
              Phone: +123 456 7890<br />
              Email: aly@gmail.com
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col mt-24">
            <h1 className="text-lg font-bold">Services</h1>
            <p className="text-xs mt-6">Web Development, Digital Marketing, SEO, Graphic Design</p>
          </div>

          {/* Privacy Policy */}
          <div className="flex flex-col mt-24">
            <h1 className="text-lg font-bold">Privacy Policy</h1>
            <p className="text-xs mt-6">SEO Optimization, Social Media Marketing, Content Marketing</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
