import React from 'react';

import {  styled } from '@mui/material/styles';

import Switch from '@mui/material/Switch';

const BlackSwitch = styled(Switch)(({ theme }) => ({
    width: 66, 
    height: 38, 
  
    padding: 7, 
    '& .MuiSwitch-switchBase': {
      padding: 11, 
      '&.Mui-checked': {
        transform: 'translateX(28px)', 
        color: '#fff', 
        '& + .MuiSwitch-track': {
          backgroundColor: 'rgba(10, 50, 83, 1)', 
          opacity: 1,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      width: 16, 
      height: 16, 
      backgroundColor: '#fff', 
    },
    '& .MuiSwitch-track': {
      borderRadius: 20 / 1, 
      backgroundColor:  'rgba(10, 50, 83, 1)', 
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };


    


function Services() {
  return (
    <div className="Services pt-20">
        <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-20 px-4 lg:px-52">
  <div className="text-left lg:ml-32 lg:mt-20 flex flex-col lg:w-1/2">
    <h2 className="text-xs ml-20 mb-3 lg:text-sm">We Get Results</h2>
    <h1 className="text-2xl font-bold lg:text-4xl text-center" style={{ fontSize: '2.2rem' }}>
      <span className="text-red-800">Social Media Marketing</span> &<br />
    </h1>
    <h1 className="text-2xl font-bold mt-2 lg:text-4xl text-center" style={{ fontSize: '2.2rem' }}>
      Management Services
    </h1>
    <p className="text-sm mt-4 lg:text-sm text-center">
      With a custom social media marketing service plan, your business can start
      building brand awareness, as well as generating revenue from social media
      platforms like Facebook, Twitter, LinkedIn, Instagram, and more.
    </p>
  </div>

  {/* Image Section */}
  <div className="mt-8 lg:ml-32 lg:mt-2">
    <img className="h-60 lg:h-72 w-auto" src="mobile.png" alt="mobile" />
  </div>
</div>

        <div className='flex flex-col justify-between items-center pl-4 mt-16 '>
            <p className=' font-semibold text-xs' style={{ fontSize: '0.8rem' }}>Real Numbers</p>
            <p className='font-extrabold text-3xl text-center mt-3 leading-snug' >Expect Great Things from Your</p><p className='font-extrabold text-3xl text-center mt-3 leading-snug'> <span className='text-red-800'>SEO Agency</span></p>
            <div className="flex items-center mt-4 space-x-2">
                <span className='font-medium'>Before</span>
                <BlackSwitch {...label} defaultChecked   />
                <span className='font-medium'>After</span>
            </div>
            <div className='flex flex-wrap justify-between items-center w-full md:w-[80%] mt-10 md:mt-20 space-y-6 md:space-y-0'>
              <img className='h-40 ml-48 hidden md:block' src='woman-before.png' alt='woman-before' />
              <div className='mt-1'>
                <h1 className='font-extrabold mb-3 ml-6' style={{fontSize: '2rem'}}>314,297</h1>
                <h1 className='font-medium'>Annual Organic Traffic</h1>
                <img className='h-12 w-44  mt-3 ' src='bg-chart1.png' alt='chart1' />
              </div>
              <div className='mt-1'>
                <h1 className='font-extrabold mb-3 ml-6' style={{fontSize: '2rem'}}>34,369</h1>
                <h1 className='font-medium'>Ranking Keywords</h1>
                <img className='h-12 w-44  mt-3 ' src='bg-chart2.png' alt='chart2' />
              </div>
              <div className='flex flex-col items-center justify-center mt-1 mx-auto md:mx-0 w-full md:w-auto'>
                <h1 className='font-extrabold mb-3 ml-6' style={{fontSize: '2rem'}}>980%</h1>
                <h1 className='font-medium'>Annual Organic Traffic</h1>
                <img className='h-12 w-44  mt-3  ' src='bg-chart3.png' alt='chart3' />
              </div> 
              
              <img className='h-40 mr-48 hidden md:block' src='man-after.png' alt='man-after' />
            </div>
          </div>   

    

        <div className="bg-cover bg-center h-64 lg:w-2/3 mx-auto rounded-2xl mt-28 flex flex-col items-center justify-center"
    style={{ backgroundImage: `url('image35.png')` }} >
    <div className="flex flex-wrap justify-around sm:justify-between w-full sm:w-2/3 mx-auto">
        {/* Project Done */}
        <div className='flex flex-col items-center mb-6 sm:mb-0 w-auto'>
            <h1 className='font-bold text-white w-24' style={{fontSize: '0.9rem'}}>Project Done</h1>
            <h1 className='text-3xl pl-2 font-extrabold mt-4 text-white' style={{fontSize: '2.4rem'}}>33+</h1>
        </div>

        {/* Active Clients */}
        <div className='flex flex-col items-center mb-6 sm:mb-0 w-auto'>
            <h1 className='font-bold text-white w-24' style={{fontSize: '0.9rem'}}>Active Clients</h1>
            <h1 className='text-3xl pl-2 font-extrabold mt-4 text-white' style={{fontSize: '2.4rem'}}>200+</h1>
        </div>

        {/* Glorious Years */}
        <div className='flex flex-col items-center mb-6 sm:mb-0 w-auto'>
            <h1 className='font-bold text-white w-24' style={{fontSize: '0.9rem'}}>Glorious Years</h1>
            <h1 className='text-3xl pl-6 font-extrabold mt-4 text-white' style={{fontSize: '2.4rem'}}>8+</h1>
        </div>

        {/* Team Advisor */}
        <div className='flex flex-col items-center w-auto'>
            <h1 className='font-bold text-white w-24' style={{fontSize: '0.9rem'}}>Team Advisor</h1>
            <h1 className='text-3xl pl-2 font-extrabold mt-4 text-white' style={{fontSize: '2.4rem'}}>25+</h1>
        </div>
    </div>
</div>
        <div className="flex flex-col md:flex-row mt-12 md:mt-24 md:pl-52 items-center md:items-start">
          <div className="text-center md:text-left md:ml-32 mt-6 md:mt-20 flex flex-col">
            <h2 className="text-xs font-medium">We Get Results</h2>
            <h1 className="text-xl md:text-2xl font-bold mt-2" style={{ fontSize: '2rem' }}>
              What is
            </h1>
            <h1 className="text-xl md:text-2xl font-bold text-red-800 mt-2" style={{ fontSize: '2rem' }}>
              APP Development?
            </h1>
            <p className="text-sm md:text-xs font-normal mt-4" style={{ fontSize: '0.8rem' }}>
              We help ambitious businesses like yours generate more profits by
              <br className="hidden md:block" />
              building awareness, driving web traffic, connecting with customers,
              <br className="hidden md:block" />
              and growing overall sales.
            </p>
          </div>
  
  
          <div className="mt-6 md:mt-2 md:ml-32 flex justify-center">
            <img className="h-40 md:h-72 w-auto" src="image37.png" alt="App Development" />
          </div>
        </div>

        <div className='flex flex-col justify-between items-center mt-16'>
            <h2 className=' font-semibold text-xs ' style={{ fontSize: '1rem' }}>Content Marketing </h2>

            <h2 className='font-extrabold text-lg sm:text-xl md:text-2xl lg:text-4xl text-center mt-1 leading-snug'>
              If You Can <span className='text-red-800'>Dream It,</span><br />We Can <span className='text-red-900'>Rank It</span>
            </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
            <div className=" group bg-gray-200   p-4 h-[100px] w-[400px]  rounded-2xl flex items-start transform transition duration-300 hover:bg-custom-gradient hover:shadow-lg hover:scale-y-105 origin-top">
             <img className="h-10 mt-4 mr-2" src="/Group45.png" alt="Group45" />
            <div className="flex flex-col ml-5">
                <h1 className="font-bold text-lg md:text-sm lg:text-lg  group-hover:text-white" >Real-time Keyword Data</h1>
                <p className="text-sm font-normal mt-1 leading-tight group-hover:text-white" >The waiting game is over. Launching an<br/> 
                  SEO campaign with Onum includes<br/>
                  access , a real-time reporting. </p>
            </div>
            </div>

            <div className=" group  bg-gray-200 p-4 h-[100px] w-[400px] rounded-2xl flex items-start transform transition duration-300 hover:bg-custom-gradient hover:shadow-lg hover:scale-y-105 origin-top">
             <img className="h-10 mt-4 mr-2" src="/Group112.png" alt="Group112" />
            <div className="flex flex-col ml-5">
                <h1 className="font-bold text-lg md:text-sm lg:text-lg  group-hover:text-white" >ROI Obsessed Keywords</h1>
                <p className="text-sm font-normal  mt-1 group-hover:text-white leading-tight" >Never guess again is SEO is generating<br/>
                  a net-positive return - your team and <br/>
                  your investors will love.</p>
            </div>
            </div>

            <div className=" group  bg-gray-200 p-4 h-[100px] w-[400px]  rounded-2xl flex items-start transform transition duration-300 hover:bg-custom-gradient hover:shadow-lg hover:scale-y-105 origin-top">
             <img className="h-10 mt-4 mr-2" src="/Group111.png" alt="Group111" />
            <div className="flex flex-col ml-5">
                <h1 className="font-bold text-lg md:text-sm lg:text-lg  group-hover:text-white" >Scalable Keyword Growth</h1>
                <p className="text-sm font-normal mt-1 group-hover:text-white leading-tight" >Launching a startup with limited capital?<br/>
                  No problem. Want to test our process <br/>
                  before ramping up.</p>
            </div>
            </div>

            <div className=" group  bg-gray-200 p-4 h-[100px] w-[400px]  rounded-2xl flex items-start transform transition duration-300 hover:bg-custom-gradient hover:shadow-lg hover:scale-y-105 origin-top">
             <img className="h-10 mr-2 mt-4" src="/Group113.png" alt="Group113" />
            <div className="flex flex-col ml-5">
                <h1 className="font-bold text-lg md:text-sm lg:text-lg  group-hover:text-white">Total Keyword Growth Visibility</h1>
                <p className="text-sm font-normal mt-1 group-hover:text-white leading-tight" >We provide a revolutionary level of<br/>
                  transparency into our campaigns - from <br/>
                  backlink acquisition.</p>
            </div>
            </div>
          </div>
            
        </div>
     
            <div className='flex flex-col justify-between items-center mt-16 px-4 text-center'>
              <p className='text-red-800 font-semibold text-base sm:text-lg md:text-xl'>
                Choose Your Plan
              </p>

              <p className='font-extrabold text-2xl sm:text-3xl md:text-4xl mt-3 leading-tight'>
                Flexible <span className='text-red-900'>Pricing Plans</span>
              </p>

              <p className='text-sm sm:text-base md:text-lg mt-2 text-gray-400'>
                We have experience working with large and small businesses and are ready to
              </p>
              
              <p className='text-sm sm:text-base md:text-lg text-gray-400'>
                develop a targeted strategy and plan that’s just right for you.
              </p>
            </div>

            <div className=" mt-8  md:px-32 ">
            <div className=" justify-between mx-4 md:ml-32 md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group hover-gradient bg-gray-100 p-4  flex-1 rounded-2xl flex justify-center transform   ">
                <div className="flex flex-col items-center text-center ">
                  <h1 className="text-sm font-bold  group-hover:text-white" >Standard</h1>
                  <img className='mt-6 h-20 w-16' src="standard1.png" alt='standard1' />
                  <h1 className="text-2xl mt-3 items-center font-bold group-hover:text-white"  >$69.99</h1>
                  <p className="text-gray-500 mt-1 font-medium group-hover:text-white" style={{ fontSize: '0.6rem' }} >Monthly Package</p>
                  <hr class="border-t-1 border-gray-400 w-72 mx-auto mt-4" />
                  <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >1.Services</p>
                  <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >2.Services</p>
                  <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >3.Services</p>
                  <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >4.Services</p>
                  <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >5.Services</p>
                </div>
                <button className="absolute bottom-[-16px] bg-blue-950 text-white rounded-[50px] font-bold h-12 w-44 text-xs" style={{ fontSize: '1.2rem' }}>
                Choose Plan
                </button>
            </div>

            <div className="group hover-gradient bg-gray-100 p-4 h-96 flex-1 rounded-2xl flex justify-center transform    ">
                <div className="flex flex-col items-center text-center">
                <h1 className="text-sm font-bold group-hover:text-white" >Economy</h1>
                <img className='mt-6 h-20 w-16' src="economy1.png" alt='economy1' />
                <h1 className="text-2xl mt-3 items-center font-bold group-hover:text-white"  >$79.99</h1>
                <p className="text-gray-500 font-medium mt-1 group-hover:text-white" style={{ fontSize: '0.6rem' }} >Monthly Package</p>
                
                <hr class="border-t-1 border-gray-400 w-72 mx-auto mt-4" />
                <p className="text-gray-500 group-hover:text-white" style={{ fontSize: '1.1rem' }} >1.Services</p>
                <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >2.Services</p>
                <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >3.Services</p>
                <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >4.Services</p>
                <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >5.Services</p>
                </div>
                <button className="absolute bottom-[-16px] bg-blue-950 text-white rounded-[50px] font-bold h-12 w-44 text-xs" style={{ fontSize: '1.2rem' }}>
                Choose Plan
                </button>
            </div>

            <div className="group hover-gradient bg-gray-100 p-4 h-96 flex-1 rounded-2xl  flex justify-center transform ">
                <div className="flex flex-col items-center text-center">
                <h1 className="text-sm items-center font-bold group-hover:text-white" >Executive</h1>
                <img className='mt-6 h-20 w-16' src="economy2.png" alt='economy2' />
                <h1 className="text-2xl mt-3 items-center font-bold group-hover:text-white"  >$89.99</h1>
                <p className="text-gray-500 font-medium mt-1 group-hover:text-white" style={{ fontSize: '0.6rem' }} >Monthly Package</p>
                <hr class="border-t-1 border-gray-400 w-72 mx-auto mt-4" />
                <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >1.Services</p>
                <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >2.Services</p>
                <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >3.Services</p>
                <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >4.Services</p>
                <p className="text-gray-500  group-hover:text-white" style={{ fontSize: '1.1rem' }} >5.Services</p>
                </div>
            
                <button className="absolute bottom-[-16px] bg-blue-950 text-white rounded-[50px] font-bold  h-12 w-44 text-xs" style={{ fontSize: '1.2rem' }}>
                Choose Plan
                </button>
                
            </div>
            </div>
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

export default Services;
