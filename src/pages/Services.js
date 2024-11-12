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
    <div className="App">
        <div className=' flex mt-20 pl-52'>
            <div className='text-left ml-32 mt-20 flex flex-col'>
                <h2 className='text-xs'>We Get Results</h2>
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
      
        
    </div>    
  
  );
};

export default Services;
