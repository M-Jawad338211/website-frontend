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
             
        
    </div>    
  
  );
};

export default Contacts;
