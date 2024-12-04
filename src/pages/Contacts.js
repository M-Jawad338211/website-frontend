import React from 'react';

function Contacts(){

   return(
    
     <div className='Contacts mt-20 md:mt-20 px-4'>
            <div className=' flex flex-col md:flex-row md:pl-36'>
            <div className='text-left md:ml-32 mt-8 md:mt-20 flex flex-col w-full md:w-1/2'>
                <h2 className='text-sm font-normal '>GET IN TOUCH</h2>
                <h1 className='text-xl mt-4 font-bold leading-snug md:text-3xl lg:text-4xl' style={{ fontSize: '2.9rem'}}>Ready to <span className='text-red-800'>Get started?</span> </h1>
                <input className='mt-8 h-20 w-[90%] md:h-16 md:w-[110%] pl-4 border border-gray-300 rounded-xl ' placeholder='Your Name*'/>
                <input className='mt-8 h-20 w-[90%] md:h-16 md:w-[110%] pl-4 border border-gray-300 rounded-xl ' placeholder='Your E-mail*'/>
                <textarea className='pt-4 text-start mt-8 h-24 w-[90%] md:h-24 md:w-[110%] pl-4 border border-gray-300 rounded-xl ' placeholder='Message....'/>
                <div className='bg-red-800 h-8 w-24 mt-4 rounded-[40px]'><button className='text-white text-xs font-bold pl-4' style={{fontSize: '0.6rem'}}>Send Message</button></div>
            </div>                                           
                            
            {/* <div className="relative ml-48 mt-10">
                <img className="h-96   md:h-[420px] md:w-72 object-cover " src="Rectangle292.png" alt="rectangle" />
                
             
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
                
            </div> */}
            <div className="relative ml-0 md:ml-48 mt-6 md:mt-10 ">
  <img
    className="h-[400px] w-full md:h-[420px] md:w-72  object-cover"
    src="Rectangle292.png"
    alt="rectangle"
  />
  <div className="absolute inset-0 flex flex-col mt-6 md:mt-12 ml-4 md:ml-6 text-white">
    <h2 className="font-normal text-sm md:text-xs">Contact Details</h2>
    <h1 className="text-white font-bold mt-2 md:mt-1 text-2xl md:text-3xl">
      Our Contacts
    </h1>
    <p className="font-normal text-sm md:text-xs mt-4 md:mt-2 leading-5 md:leading-normal md:px-2">
      Give us a call or drop by anytime. We endeavor to answer all enquiries
      within 24 hours on business days. We will be happy to answer your
      questions.
    </p>

    <div className="mt-6 md:mt-10 flex flex-col items-start md:items-center">
      <div className="flex items-center mb-4 md:mb-0 mr-4">
        <img className="w-6 h-6 md:w-8 md:h-8 mr-4" src="frame3.png" alt="frame" />
        <div className="flex flex-col">
          <h2 className="text-sm md:text-xs">Our Phones</h2>
          <p className="text-base md:text-sm font-bold mt-1 md:mt-2">+923213412789</p>
        </div>
      </div>
      <div className="flex items-center mt-5">
        <img className="w-6 h-6 mr-4" src="frame4.png" alt="frame4" />
        <div className="flex flex-col">
          <h2 className="text-sm md:text-xs">Our Address</h2>
          <p className="text-base md:text-sm font-bold mt-1 md:mt-2">22-C Sabzazar LHR</p>
        </div>
      </div>
      <div className="flex items-center mt-5 ">
        <img className="w-6 h-6 mr-4" src="frame5.png" alt="frame5" />
        <div className="flex flex-col">
          <h2 className="text-sm md:text-xs">Our Mail Box</h2>
          <p className="text-base md:text-sm font-bold mt-1 md:mt-2">unitfactor@mail.com</p>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
            <div className='mt-8 sm:mt-8 md:mt-16 lg:mt-16'>
                <img className='h-48 sm:h-[400px] md:h-[400px] lg:h-[400px] w-full object-cover' src="Maskgroup1.png" alt='Maskgroup1' />
            </div>


            <div className=" z-10 mt-8 sm:mt-16 h-32 sm:h-28 w-[90%] sm:w-[66.6%] mx-auto rounded-lg bg-cover bg-center relative" style={{ backgroundImage: 'url(./Rectangle3.png)' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <p className="text-lg sm:text-xl font-bold text-center" style={{fontSize:'1.5rem'}}>Take Your Website to Next Level Right Now!</p>
            <button className="bg-white text-red-800 rounded-3xl h-10 sm:h-8 w-28 sm:w-20 text-sm sm:text-xs mt-3 font-bold">
                Start Now
            </button>
            </div>

        
            </div>
             
        
    </div>    
  
  );
};

export default Contacts;
