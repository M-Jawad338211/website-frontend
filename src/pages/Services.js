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
    <div className="Services">
        <div className=' flex mt-20 pl-52'>
            <div className='text-left ml-32 mt-20 flex flex-col'>
                <h2 className='text-xs mb-3'>We Get Results</h2>
                <h1 className='text-2xl font-bold' style={{ fontSize: '2.2rem'}}><span className='text-red-800'>Social Media Marketing</span> &<br/></h1>
                <h1 className='text-2xl font-bold mt-2' style={{ fontSize: '2.2rem'}}> Management Services </h1>
                <p className='text-xs mt-4' style={{ fontSize: '0.8rem'}}>With a custom social media marketing service plan, your business can start<br/>
                    building brand awareness, as well as generating revenue from social media<br/>
                    platforms like Facebook, Twitter, LinkedIn, Instagram, and more.</p>
            </div>
            <div className=' ml-32 mt-2'>
                <img className='h-72' src='mobile.png ' alt="mobile" />
            </div>
        </div>
        <div className='flex flex-col justify-between items-center pl-4 mt-16'>
            <p className=' font-semibold text-xs' style={{ fontSize: '0.8rem' }}>Real Numbers</p>
            <p className='font-extrabold text-xl text-center mt-3 leading-snug' style={{ fontSize: '2rem' }}>Expect Great Things from<br/>Your <span className='text-red-800'>SEO Agency</span></p>
            <div className="flex items-center mt-4 space-x-2">
                <span className='font-medium'>Before</span>
                <BlackSwitch {...label} defaultChecked   />
                <span className='font-medium'>After</span>
            </div>
            <div className='flex justify-between w-[80%] mt-20'>
              {/* Left Image */}
              <img className='h-40 ml-48' src='woman-before.png' alt='woman-before' />
              {/* bg images */}
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
              <div className='mt-1'>
                <h1 className='font-extrabold mb-3 ml-6' style={{fontSize: '2rem'}}>980%</h1>
                <h1 className='font-medium'>Annual Organic Traffic</h1>
                <img className='h-12 w-44  mt-3 ' src='bg-chart3.png' alt='chart3' />
              </div> 
              {/* Right Image */}
              <img className='h-40 mr-48' src='man-after.png' alt='man-after' />
            </div>
          </div>
        <div className=" bg-cover bg-center h-64 w-[60%] mx-auto rounded-2xl  mt-28 flex flex-col items-center justify-center"
            style={{ backgroundImage: `url('image35.png')` }} >
            <div className='flex justify-start w-2/3 mr-24  '>
            <div >
                <h1 className='font-bold text-white w-24' style={{fontSize:'0.9rem' }}>Project Done</h1>
                <h1 className=' text-3xl pl-2 font-extrabold mt-4 text-white' style={{fontSize: '2.4rem' }}>33+</h1>
            </div>
            <div className='ml-28' >
                <h1 className='font-bold text-white w-24' style={{fontSize:'0.9rem' }}>Active Clients </h1>
                <h1 className=' text-3xl  font-extrabold mt-4 text-white' style={{fontSize: '2.4rem' }}>200+</h1>
            </div>
            <div className='ml-28'>
                <h1 className='font-bold text-white w-24' style={{fontSize:'0.9rem' }}>Glorious Years</h1>
                <h1 className=' text-3xl pl-6 font-extrabold mt-4 text-white' style={{fontSize: '2.4rem' }}>8+</h1>
            </div>
            <div className='ml-28' >
                <h1 className='font-bold text-white w-24' style={{fontSize:'0.9rem' }}>Team Advisor</h1>
                <h1 className=' text-3xl pl-2 font-extrabold mt-4 text-white' style={{fontSize: '2.4rem' }}>25+</h1>
            </div>
            </div> 

            </div>
            <div className=' flex mt-24 pl-52'>
            <div className='text-left ml-32 mt-20 flex flex-col'>
                <h2 className='text-xs font-medium'>We Get Results</h2>
                <h1 className='text-2xl font-bold mt-2' style={{ fontSize: '2.2rem'}}>What is<br/></h1>
                <h1 className='text-2xl font-bold text-red-800 mt-2' style={{ fontSize: '2.2rem'}}> APP Development? </h1>
                <p className='text-xs font-normal mt-4' style={{ fontSize: '0.8rem'}}>We help ambitious businesses like yours generate more profits by<br/>
                  building awareness, driving web traffic, connecting with customers,<br/>
                  and growing overall sales. </p>
            </div>
            <div className=' ml-32 mt-2'>
                <img className='h-72' src='image37.png ' alt="image37" />
            </div>
        </div>
        <div className='flex flex-col justify-between items-center mt-16'>
            <h2 className=' font-semibold text-xs ' style={{ fontSize: '1rem' }}>Content Marketing </h2>

            <h2 className='font-extrabold text-2xl text-center mt-1 leading-snug ' style={{ fontSize: '2.4rem' }}>
            If You Can <span className='text-red-800'>Dream It,</span><br/>We Can  <span className='text-red-900'>Rank It</span>
            </h2>
          <div className="grid grid-cols-2 ustify-center gap-4 px-4  mt-8">
            <div className=" group hover-gradient bg-gray-100 p-4 h-[100px] w-[400px]  rounded-2xl flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
             <img className="h-10 mt-4 mr-2" src="/Group45.png" alt="Group45" />
            <div className="flex flex-col ml-5">
                <h1 className="text-sm font-extrabold group-hover:text-white" style={{ fontSize: '0.6rem' }}>Real-time Keyword Data</h1>
                <p className="text-sm font-normal mt-1 leading-tight group-hover:text-white" style={{ fontSize: '0.7rem' }}>The waiting game is over. Launching an<br/> 
                  SEO campaign with Onum includes<br/>
                  access , a real-time reporting. </p>
            </div>
            </div>

            <div className=" group hover-gradient bg-gray-100 p-4 h-[100px] w-[400px] rounded-2xl flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
             <img className="h-10 mt-4 mr-2" src="/Group112.png" alt="Group112" />
            <div className="flex flex-col ml-5">
                <h1 className="text-sm font-extrabold group-hover:text-white" style={{ fontSize: '0.6rem' }}>ROI Obsessed Keywords</h1>
                <p className="text-sm font-normal  mt-1 group-hover:text-white leading-tight" style={{ fontSize: '0.7rem' }}>Never guess again is SEO is generating<br/>
                  a net-positive return - your team and <br/>
                  your investors will love.</p>
            </div>
            </div>

            <div className=" group hover-gradient bg-gray-100 p-4 h-[100px] w-[400px]  rounded-2xl flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
             <img className="h-10 mt-4 mr-2" src="/Group111.png" alt="Group111" />
            <div className="flex flex-col ml-5">
                <h1 className="text-sm font-extrabold group-hover:text-white" style={{ fontSize: '0.6rem' }}>Scalable Keyword Growth</h1>
                <p className="text-sm font-normal mt-1 group-hover:text-white leading-tight" style={{ fontSize: '0.7rem' }}>Launching a startup with limited capital?<br/>
                  No problem. Want to test our process <br/>
                  before ramping up.</p>
            </div>
            </div>

            <div className=" group hover-gradient bg-gray-100 p-4 h-[100px] w-[400px]  rounded-2xl flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
             <img className="h-10 mr-2 mt-4" src="/Group113.png" alt="Group113" />
            <div className="flex flex-col ml-5">
                <h1 className="text-sm  font-extrabold group-hover:text-white" style={{ fontSize: '0.6rem' }}>Total Keyword Growth Visibility</h1>
                <p className="text-sm font-normal mt-1 group-hover:text-white leading-tight" style={{ fontSize: '0.7rem' }}>We provide a revolutionary level of<br/>
                  transparency into our campaigns - from <br/>
                  backlink acquisition.</p>
            </div>
            </div>
          </div>
            
        </div>
        <div className='flex flex-col justify-between items-center mt-16'>
                <p className='text-red-800 font-semibold text-xs' style={{ fontSize: '1rem' }}>Choose Your Plan </p>

                <p className='font-extrabold text-2xl mt-3 ' style={{ fontSize: '2.4rem' }}>
                Flexible <span className='text-red-900'>Pricing Plans</span>
                </p>
                <p className='text-sm mt-2 text-gray-400'>We have experience working with large and small businesses and are ready to </p>
                <p className='text-sm  text-gray-400 '> develop a targeted strategy and plan that’s just right for you.</p>
            </div>
            <div className=" mt-8  ml-32 mr-32 ">
            <div className="flex justify-between gap-4 w-[80%] ml-32">
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

            <div className="group hover-gradient bg-gray-100 p-4 h-96 flex-1 rounded- flex justify-center transform ">
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

            <div className=" z-10 mt-16 h-28 rounded-lg w-[80%] mx-auto bg-cover bg-center relative" style={{ backgroundImage: 'url(./Rectangle3.png)' }}>
              <div className="absolute inset-0 flex flex-col mt-6 items-center justify-center text-white">
              {/* Your text goes here */}
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

export default Services;
