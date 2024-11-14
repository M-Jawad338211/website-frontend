import React from 'react';
import  { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
function Portfolio(){
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (menu) => {
      // If the clicked dropdown is already open, close it; otherwise, open it and close the previous one
      setActiveDropdown(prevState => (prevState === menu ? null : menu));
    };
   return(
     <div className='Portfolio'>
           
           <div className="flex flex-col items-center mt-10 px-4">
             
                <p className=" text-sm font-normal mb-2">Our Projects</p>
                
               
                <h1 className="text-2xl md:text-3xl font-extrabold text-center">
                    <span className="text-[#0F1C3F]">View Some of Our Works</span> <br />
                    <span className="text-[#9F3F3F]"><span className='text-black'>and</span> Case Studies <span className='text-black'>for</span> Clients</span>
                </h1>
                        
            </div>
            <div className="flex gap-2 justify-center mt-6 relative">
           
           <button className="w-40 px-4 py-2 text-gray-600 font-medium hover:text-black focus:outline-none">
               ALL
           </button>

           
           <div className="relative">
               <button
               onClick={() => toggleDropdown('Product-Type')}
               className="flex items-center justify-between w-40 px-4 py-2 text-gray-600 font-medium  hover:text-black focus:outline-none"
               aria-expanded={activeDropdown === 'Product-Type'}
               aria-label="Product-Type Dropdown"
               >
               <span>Product-Type</span>
               <FaChevronDown className="ml-3 text-gray-600" />
               </button>
               
               {activeDropdown === 'Product-Type' && (
               <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                   <ul>
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">SAAS</li>
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">IAAS</li>
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">PAAS</li>
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">PWA</li>
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">MVA</li>
                   </ul>
               </div>
               )}
           </div>

           <div className="relative">
               <button
               onClick={() => toggleDropdown('Industries')}
               className="flex items-center justify-between w-40 px-4 py-2 text-gray-600 font-medium hover:text-black focus:outline-none"
               aria-expanded={activeDropdown === 'Industries'}
               aria-label="Industries Dropdown"
               >
               <span>Industries</span>
               <FaChevronDown className=" text-gray-600" />
               </button>
               {activeDropdown === 'Industries' && (
               <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg">
                   <ul>
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fintech</li>
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edtech</li>
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Medtech</li>
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Food</li>
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Crypto</li>
                   </ul>
               </div>
               )}
           </div>

           <div className="relative">
                       <button
                       onClick={() => toggleDropdown('Marketing')}
                       className="flex items-center justify-between w-40 px-4 py-2 text-gray-600 font-medium hover:text-black focus:outline-none"
                       aria-expanded={activeDropdown === 'Marketing'}
                       aria-label="Marketing Dropdown"
                       >
                       <span>Marketing</span>
                       <FaChevronDown className=" text-gray-600" />
                       </button>
                       {activeDropdown === 'Marketing' && (
                       <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg">
                           <ul>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">SEO</li>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Advertising</li>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Email Marketing</li>
                           </ul>
                       </div>
                       )}
                   </div>

                   {/* Dropdown for Tech Stack */}
                   <div className="relative">
                       <button
                       onClick={() => toggleDropdown('TechStack')}
                       className="flex items-center justify-between w-40 px-4 py-2 text-gray-600 font-medium hover:text-black focus:outline-none"
                       aria-expanded={activeDropdown === 'TechStack'}
                       aria-label="Tech Stack Dropdown"
                       >
                       <span>Tech Stack</span>
                       <FaChevronDown className=" text-gray-600" />
                       </button>
                       {activeDropdown === 'TechStack' && (
                       <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg">
                           <ul>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">React</li>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Vue</li>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Angular</li>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">ROR</li>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Python</li>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Java</li>
                           </ul>
                       </div>
                       )}
                   </div>

                   {/* Dropdown for CMS */}
                   <div className="relative">
                       <button
                       onClick={() => toggleDropdown('CMS')}
                       className="flex items-center justify-between w-40 px-4 py-2 text-gray-600 font-medium hover:text-black focus:outline-none"
                       aria-expanded={activeDropdown === 'CMS'}
                       aria-label="CMS Dropdown"
                       >
                       <span>CMS</span>
                       <FaChevronDown className="mr-12 text-gray-600" />
                       </button>
                       {activeDropdown === 'CMS' && (
                       <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg">
                           <ul>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Wordpress</li>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shopify</li>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Webflow</li>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">SquareSpace</li>
                           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Wix</li>
                           </ul>
                       </div>
                       )}
                   </div>
                   </div>
            <div className='grid grid-cols-3 mt-10 mx-40'>
                <img className='rounded-2xl p-2' src='1.png' alt='1st1' />
                <img className='rounded-xl p-2' src='2nd.png' alt='2nd' />
                <img className='rounded-2xl p-2' src='mokeup.png' alt='mokeup' />
                <img className='rounded-xl p-2' src='incast-capital.png' alt='captal' />
                <img className=' p-2' src='AV-lab-1.png' alt='AV lab' />
                <img className='rounded-2xl p-2' src='1st1.png' alt='1st' />
            </div>

           


            <div className=" z-10 mt-16 h-28 rounded-lg w-[80%] mx-auto bg-cover bg-center relative" style={{ backgroundImage: 'url(./Rectangle3.png)' }}>
              <div className="absolute inset-0 flex flex-col mt-6 items-center justify-center text-white">
              <p className="text-xl font-bold" style={{fontSize:'1.5rem'}}>Take Your Website to Next Level Right Now!</p>
              <button className="bg-white text-red-800 rounded-3xl h-8 w-20  text-xs  mt-3 font-bold">
                  Start Now
              </button>
              </div>

            

            </div>
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
        
    </div>    
  
  );
};

export default Portfolio;
