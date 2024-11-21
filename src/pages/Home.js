import React from 'react'; 
import Avatar from '@mui/material/Avatar';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';

function Home(){
    return(
        <div className='Home'>
            <div className="flex flex-col md:flex-row justify-evenly items-center px-4 md:px-0">
            <img src="Frame1.png" alt="frame1" className="h-48 w-auto md:h-[350px] pt-8 md:pt-24" />
            <div className="text-center md:text-left mt-4 md:mt-20">
            <p className="text-xs md:text-sm">Our experience boosts your business</p>
            <h2 className="font-bold text-2xl md:text-3xl pt-2 md:pt-3 text-red-800">
                Top Rated Online<br /> <span className="text-black">Marketing</span> Company
            </h2>
            <p className="text-xs md:text-sm pt-2 md:pt-3">
                We bet you don't spend much time on the second page of <br className="hidden md:block" /> Google - So why should your website?
            </p>
            <button className="bg-blue-950 text-white rounded-3xl h-8 w-20 md:h-9 md:w-24 text-xs md:text-sm mt-3 md:mt-4">
                Start Now
            </button>
            </div>
            </div>

            {/* <div className="flex flex-wrap justify-center gap-4 px-4 md:px-0 mt-8">
                <div className=" group hover-gradient bg-gray-100 p-4 h-auto w-full sm:w-48 rounded-md flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
                <img className="h-8 mr-2" src="/Group37.png" alt="Group37" />
                <div className="flex flex-col">
                    <h1 className="text-sm font-extrabold group-hover:text-white" style={{ fontSize: '0.5rem' }}>Social Media Marketing</h1>
                    <p className="text-xs font-bold mt-1 text-gray-600 group-hover:text-white" style={{ fontSize: '0.4rem' }}>Create and manage top-performing social campaigns and start.</p>
                </div>
            </div>

            <div className=" group hover-gradient bg-gray-100 p-4 h-auto w-full sm:w-48 rounded-md flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
            <img className="h-8 mr-2" src="/Group36.png" alt="Group36" />
            <div className="flex flex-col">
                <h1 className="text-sm font-extrabold group-hover:text-white" style={{ fontSize: '0.5rem' }}>App Development</h1>
                <p className="text-xs font-bold text-gray-600 mt-1 group-hover:text-white" style={{ fontSize: '0.4rem' }}>Create, publish, and promote engaging content to generate more traffic.</p>
            </div>
            </div>

            <div className=" group hover-gradient bg-gray-100 p-4 h-auto w-full sm:w-48 rounded-md flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
            <img className="h-8 mr-2" src="/Group35.png" alt="Group35" />
            <div className="flex flex-col">
                <h1 className="text-sm font-extrabold group-hover:text-white" style={{ fontSize: '0.5rem' }}>SEO Optimization</h1>
                <p className="text-xs font-bold text-gray-600 mt-1 group-hover:text-white" style={{ fontSize: '0.4rem' }}>Get more website traffic, more customers, and more online visibility.</p>
            </div>
            </div>

            <div className=" group hover-gradient bg-gray-100 p-4 h-auto w-full sm:w-48 rounded-md flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
            <img className="h-8 mr-2" src="/Group34.png" alt="Group34" />
            <div className="flex flex-col">
                <h1 className="text-sm  font-extrabold group-hover:text-white" style={{ fontSize: '0.5rem' }}>Content Marketing</h1>
                <p className="text-xs font-bold text-gray-600 mt-1 group-hover:text-white" style={{ fontSize: '0.4rem' }}>You can provide the answers that your potential customers are trying.</p>
            </div>
            </div>
            </div> */}
            <div className="flex flex-wrap justify-center gap-4 px-4 md:px-0 mt-8">
            <div className="group hover-gradient bg-gray-100 p-5 h-auto w-full sm:w-56 rounded-lg flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
                <img className="h-10 mr-2 " src="/Group37.png" alt="Group37" />
                <div className="flex flex-col">
                <h1 className="text-sm font-extrabold group-hover:text-white" style={{ fontSize: '0.6rem' }}>
                    Social Media Marketing
                </h1>
                <p className="text-xs font-bold mt-1 text-gray-600 group-hover:text-white" style={{ fontSize: '0.5rem' }}>
                    Create and manage top-performing social campaigns and start.
                </p>
                </div>
            </div>

            <div className="group hover-gradient bg-gray-100 p-5 h-auto w-full sm:w-56 rounded-lg flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
                <img className="h-10 mr-2" src="/Group36.png" alt="Group36" />
                <div className="flex flex-col">
                <h1 className="text-sm font-extrabold group-hover:text-white" style={{ fontSize: '0.6rem' }}>
                    App Development
                </h1>
                <p className="text-xs font-bold text-gray-600 mt-1 group-hover:text-white" style={{ fontSize: '0.5rem' }}>
                    Create, publish, and promote engaging content to generate more traffic.
                </p>
                </div>
            </div>

            {/* SEO Optimization Card */}
            <div className="group hover-gradient bg-gray-100 p-5 h-auto w-full sm:w-56 rounded-lg flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
                <img className="h-10 mr-2" src="/Group35.png" alt="Group35" />
                <div className="flex flex-col">
                <h1 className="text-sm font-extrabold group-hover:text-white" style={{ fontSize: '0.6rem' }}>
                    SEO Optimization
                </h1>
                <p className="text-xs font-bold text-gray-600 mt-1 group-hover:text-white" style={{ fontSize: '0.5rem' }}>
                    Get more website traffic, more customers, and more online visibility.
                </p>
                </div>
            </div>

            {/* Content Marketing Card */}
            <div className="group hover-gradient bg-gray-100 p-5 h-auto w-full sm:w-56 rounded-lg flex items-start transform transition duration-300 hover:shadow-lg hover:scale-y-105 origin-top">
                <img className="h-10 mr-2" src="/Group34.png" alt="Group34" />
                <div className="flex flex-col">
                <h1 className="text-sm font-extrabold group-hover:text-white" style={{ fontSize: '0.6rem' }}>
                    Content Marketing
                </h1>
                <p className="text-xs font-bold text-gray-600 mt-1 group-hover:text-white" style={{ fontSize: '0.5rem' }}>
                    You can provide the answers that your potential customers are trying.
                </p>
                </div>
            </div>
            </div>
            

            <div className='flex flex-col justify-between items-center mt-16'>
            <p className='text-red-800 font-semibold text-xs' style={{ fontSize: '0.8rem' }}>how to get started</p>
            <p className='font-extrabold text-xl text-center mt-3' style={{ fontSize: '2rem' }}>Few Simple Steps</p>
            <p className='font-extrabold text-xl leading-snug  ' style={{ fontSize: '2rem' }}>
            for <span className='text-red-900'>Successful Business</span>
            </p>
            </div>


            {/* <div className="flex justify-center mt-8 px-4">
            <div className="flex flex-col items-center mr-28 mt-8 w-48 relative hover:bg-gray-200 hover:rounded-xl hover:px-8 p-8">
            <div className="absolute  flex justify-center w-full -top-[24px]">
            <img className="h-11 w-11 " src="Number1.png" alt="number1" />
            </div>
            <div className="mt-6 flex flex-col p-5 items-center  pt-37 ">
            <img className="h-24 w-24 mb-4" src="undraw1.png" alt="undraw1" />
            <h2 className="font-bold text-center text-lg mb-2 min-w-max">Project Introduction</h2>
            <p className="text-gray-600 text-sm text-center min-w-[12rem]" style={{fontSize: '0.7rem'}}>
                We’re a team of non-cynics who truly<br/>
                care for our work and for each other.
            </p>
            </div>
            </div>
            <div className="flex flex-col items-center mt-8 w-48 relative hover:bg-gray-200 hover:rounded-xl">
            <div className="absolute -top-[24px] flex justify-center w-full ">
            <img className="h-11 w-11" src="Number2.png" alt="number2" />
            </div>
            <div className="mt-6 flex flex-col p-5 items-center pt-37">
            <img className="h-24 w-24 mb-4" src="undraw2.png" alt="undraw2" />
            <h2 className="font-bold text-center text-lg mb-2 min-w-max">Research & Concept</h2>
            <p className="text-gray-600 text-sm text-center min-w-[12rem]" style={{fontSize: '0.7rem'}}>
                We’re a team of non-cynics who truly<br/>
                care for our work and for each other.
            </p>
            </div>
            </div>
            <div className="flex flex-col items-center mt-8 w-48 relative ml-28 hover:bg-gray-200 hover:rounded-xl">
            <div className="absolute -top-[24px] flex justify-center w-full">
            <img className="h-11 w-11" src="Number3.png" alt="number3" />
            </div>
            <div className="mt-6 flex p-5 flex-col items-center pt-6">
            <img className="h-24 w-24 mb-4" src="undraw3.png" alt="undraw3" />
            <h2 className="font-bold min-w-max text-center text-lg mb-2">Project Termination</h2>
            <p className="text-gray-600 text-sm text-center min-w-[12rem]" style={{fontSize: '0.7rem'}}>
                We’re a team of non-cynics who truly<br/>
                care for our work and for each other.
            </p>
            </div>
            </div>
            </div> */}
            <div className="flex justify-center flex-wrap gap-20 mt-16 px-4">
  {/* Project Introduction Card */}
  <div className="group hover:bg-gray-200 hover:rounded-lg hover:shadow-lg p-6 h-auto w-full sm:w-56 flex flex-col items-center relative transform transition duration-300">
    <div className="absolute flex justify-center w-full -top-[24px]">
      <img className="h-12 w-12" src="Number1.png" alt="number1" />
    </div>
    <div className="mt-8 flex flex-col p-4 items-center">
      <img className="h-24 w-24 mb-4" src="undraw1.png" alt="undraw1" />
      <h2 className="font-bold text-center text-lg mb-2">Project Introduction</h2>
      <p className="text-gray-600 text-sm text-center min-w-[14rem]" style={{ fontSize: '0.75rem' }}>
        We’re a team of non-cynics who truly<br /> care for our work and for each other.
      </p>
    </div>
  </div>

  {/* Research & Concept Card */}
  <div className="group hover:bg-gray-200 hover:rounded-lg hover:shadow-lg p-6 h-auto w-full sm:w-56 flex flex-col items-center relative transform transition duration-300">
    <div className="absolute flex justify-center w-full -top-[24px]">
      <img className="h-12 w-12" src="Number2.png" alt="number2" />
    </div>
    <div className="mt-8 flex flex-col p-4 items-center">
      <img className="h-24 w-24 mb-4" src="undraw2.png" alt="undraw2" />
      <h2 className="font-bold text-center text-lg mb-2">Research & Concept</h2>
      <p className="text-gray-600 text-sm text-center min-w-[14rem]" style={{ fontSize: '0.75rem' }}>
        We’re a team of non-cynics who truly<br /> care for our work and for each other.
      </p>
    </div>
  </div>

  {/* Project Termination Card */}
  <div className="group hover:bg-gray-200 hover:rounded-lg hover:shadow-lg p-6 h-auto w-full sm:w-56 flex flex-col items-center relative transform transition duration-300">
    <div className="absolute flex justify-center w-full -top-[24px]">
      <img className="h-12 w-12" src="Number3.png" alt="number3" />
    </div>
    <div className="mt-8 flex flex-col p-4 items-center">
      <img className="h-24 w-24 mb-4" src="undraw3.png" alt="undraw3" />
      <h2 className="font-bold text-center text-lg mb-2">Project Termination</h2>
      <p className="text-gray-600 text-sm text-center min-w-[14rem]" style={{ fontSize: '0.75rem' }}>
        We’re a team of non-cynics who truly<br /> care for our work and for each other.
      </p>
    </div>
  </div>
</div>



            <div className="relative bg-cover bg-center h-64 w-full mt-24 flex flex-col items-center justify-center"
            style={{ backgroundImage: `url('image30.png')` }} >
            
            <div className="absolute top-5 left-32 flex flex-col items-center">
                <Avatar alt="Remy Sharp" src="image31.png" />
            </div>
            <div className="absolute top-28 left-96 flex flex-col items-center">
                <Avatar alt="Remy Sharp" src="image33.png" />
            </div>
            <div className="absolute bottom-3 left-32 flex flex-col items-center">
                <Avatar alt="Remy Sharp" src="image33.png" />
            </div>
            <div className="absolute top-5 right-32 flex flex-col items-center">
                <Avatar alt="Remy Sharp" src="image34.png" />
            </div>
            <div className="absolute top-28 right-96 flex flex-col items-center">
                <Avatar alt="Remy Sharp" src="image32.png" />
            </div>
            <div className="absolute bottom-3 right-32 flex flex-col items-center">
                <Avatar alt="Remy Sharp" src="image34.png" />
            </div>
            <p className=" font-bold text-2xl  p-2 block ">Expect Great Things from </p>
            <p className='text-red-800 font-bold text-2xl block '>  Our Team </p>
            <p className='text-gray-800 text-xs'>Make the Right Choice for Your Future. Choose UnitFactor!</p>
            </div>

            <div className=' relative mt-16 '>
            <div className='text-left ml-72 relative'>
            <h2 className='text-xs'>About Us</h2>
            <h1 className='mt-2 text-2xl font-bold leading-snug' style={{ fontSize: '2.4rem'}}>Grow Your Business<br/>with Our <span className='text-red-800'>SEO Agency</span></h1>
           
            <p className='text-xs text-gray-700 pt-3' style={{ fontSize: '0.9rem'}}>Over 7 years UnitFactor helping Clients reach their financial <br/>
            and branding goals.</p>
            <p className='text-xs font-semibold' style={{ fontSize: '0.85rem'}}>We help ambitious businesses like yours generate more profits <br/>
            by building awareness, driving web traffic, connecting with <br/>
            customers, and growing overall sales. </p>

            </div>
            <div className='absolute top-0 right-60 z-0'>
            <img className='h-52' src='Untitled-2.png ' alt="img" />
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
            <div className=" bg-cover bg-center h-64 w-[66.66%] mx-auto rounded-2xl  mt-28 flex flex-col items-center justify-center"
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

            <div className=" relative h-72 w-[66.66%] mx-auto  mt-28 flex  ">
            <div className='relative'><img className='h-72 w-64' src="Rectangle.png" alt="rectangle" /></div>
            <div className="absolute top-7 left-16 "><img className='h-60 w-[320px] ' src="Rectangle2.png" alt="rectangle" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="absolute top-5 left-36 flex flex-col items-center">
                    <Avatar alt="Remy Sharp" src="jawad.png" />
                    </div>
                    <div className=" flex flex-col items-center justify-center text-center">
                        <p className="text-sm mt-16 text-gray-500 font-medium" style={{ fontSize: '0.6rem'}}>The development process was smooth, and communication was<br/> 
                            seamless throughout. The attention to detail and responsiveness<br/>
                            to feedback were outstanding. Our website now provides a <br/>
                            fantastic user experience.<br/>
                            Highly recommend!</p>
                    <div> <h2 className='text-red-700 mt-3'>Jawad Ahmad</h2></div>      
                    <div> <h2 className="text-sm  text-gray-500 font-medium" style={{ fontSize: '0.6rem'}}>Company CEO</h2></div>     
                        
                    </div>        
                </div>
            </div> 
            <div className="flex flex-col justify-center items-center ml-64 w-96 ">
                <div>
                <h2>Real Testimonials</h2>
                </div> 
                <div>
                <p className='text-4xl font-bold ml-32 leading-snug' style={{fontSize:'2.5rem'}}>What They<br/>Say <span className='text-red-800'>About Our<br/>Company</span>?</p>
                </div> 
                <div className="flex items-center justify-between">
                <div>
                    <ArrowCircleLeftSharpIcon className="text-black mt-4 mr-4" fontSize="large" />
                </div>
                <div>
                    <ArrowCircleRightSharpIcon className="text-black mt-4 mr-8" fontSize="large" />
                </div>
                </div>
            </div>

            </div>
            <div className=" z-10 mt-16 h-28 rounded-lg w-[66.6%] mx-auto bg-cover bg-center relative" style={{ backgroundImage: 'url(./Rectangle3.png)' }}>
            <div className="absolute inset-0 flex flex-col mt-6 items-center justify-center text-white">
            {/* Your text goes here */}
            <p className="text-xl font-bold" style={{fontSize:'1.5rem'}}>Take Your Website to Next Level Right Now!</p>
            <button className="bg-white text-red-800 rounded-3xl h-8 w-20  text-xs  mt-3 font-bold">
                Start Now
            </button>
            </div>

            

            </div>


           






</div>
);
};
export default Home;