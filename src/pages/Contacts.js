import React from 'react';

function Contacts(){

   return(
     <div className='Contacts'>
            <div className=' flex mt-20 pl-36'>
            <div className='text-left ml-32 mt-20 flex flex-col'>
                <h2 className='text-sm font-normal'>GET IN TOUCH</h2>
                <h1 className='text-xl mt-4 font-bold' style={{ fontSize: '2.9rem'}}>Ready to <span className='text-red-800'>Get started?</span> </h1>
                <input className='mt-8 h-12 w-[110%] pl-4 border border-gray-300 rounded-xl ' placeholder='Your Name*'/>
                <input className='mt-8 h-12 w-[110%] pl-4 border border-gray-300 rounded-xl ' placeholder='Your E-mail*'/>
                <textarea className='pt-4 text-start mt-8 h-24 w-[110%] pl-4 border border-gray-300 rounded-xl ' placeholder='Message....'/>
                <div className='bg-red-800 h-8 w-24 mt-4 rounded-[40px]'><button className='text-white text-xs font-bold pl-4' style={{fontSize: '0.6rem'}}>Send Message</button></div>
            </div>
            
                                
                            
            <div className="relative ml-48 mt-10">
                <img className="h-[420px] w-72" src="Rectangle292.png" alt="rectangle" />
                
             
                <div className="absolute inset-0 flex flex-col mt-12 ml-6 text-white">
                    <h2 className='font-normal text-xs'>Contact Details</h2>
                    <h1 className="text-white font-bold mt-1 text-3xl">Our Contacts</h1>
                    <p className='font-normal text-xs mt-2' style={{fontSize: '0.6rem'}}>Give us a call or drop by anytime, we endeavour to <br/>
                        answer all enquiries within 24 hours on business days.<br/>
                        We will be happy to answer your questions.</p>
                        
                        <div className="mt-10 mr-10 flex flex-col items-center justify-center">
                            <div className="flex items-center">
                                <img className="w-8 h-8 mr-4" src="frame3.png" alt="frame" />
                                <div className="flex flex-col items-start">
                                <h2 className="text-xs font-normal">Our Phones</h2>
                                <p className="text-sm mt-2 font-bold">+923213412789</p>
                                </div>
                            </div>
                            <div className="flex items-center ml-4 mt-5">
                                <img className="w-6 h-6 mr-4" src="frame4.png" alt="frame4" />
                                <div className="flex flex-col items-start">
                                <h2 className="text-xs font-normal">Our Address</h2>
                                <p className="text-sm font-bold mt-2">22-C sabzazar LHR</p>
                                </div>
                            </div>
                            <div className="flex items-center ml-7 mt-5">
                                <img className="w-6 h-6 mr-4" src="frame5.png" alt="frame5" />
                                <div className="flex flex-col items-start">
                                <h2 className="text-xs font-normal">Our Mail Box</h2>
                                <p className="text-sm font-bold mt-2">unitfactor@mail.com</p>
                                </div>
                            </div>
                           
                        </div>
                </div>
                
            </div>

            </div>
            <div className='mt-16'>
                <img className='h-[400px] w-full' src="Maskgroup1.png" alt='Maskgroup1' />
            </div>


            <div className=" z-10 mt-16 h-28 rounded-lg w-[66.66%] mx-auto bg-cover bg-center relative" style={{ backgroundImage: 'url(./Rectangle3.png)' }}>
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

export default Contacts;
