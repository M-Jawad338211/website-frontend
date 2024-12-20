import React, { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import AvlabHeader from "../components/AvlabHeader";
import AvlabFooter from "../components/AvlabFooter";
import { Carousel } from "flowbite-react";
// import { Camera } from 'lucide-react';
// import {  MessageCircle, User, AlertCircle } from 'lucide-react';

const projects = [
    { id: 1, image: "1.png", category: "TechStack", type: "React" },
    { id: 2, image: "2nd.png", category: "Industries", type: "Fintech" },
    { id: 3, image: "mokeup.png", category: "Marketing", type: "SEO" },
    { id: 5, image: "AV-lab-1.png", category: "CMS", type: "Wordpress" },
];

function Avlab() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Testimonials data
  const testimonials = [
    {
      text: "Thank you very much for the great service. I will certainly refer you to anyone that needs turbine service parts. I will also inform the other departments of this company to use you for their turbine parts!",
      name: "Dave Green",
      company: "Florida Air",
      image: "https://via.placeholder.com/48",
    },
    {
      text: "Trans States Airlines has used Aviation Laboratories for years and are very satisfied with their products and services. I would recommend Aviation Laboratories to other airlines. Your staff is very prompt and helpful, and is willing to help in time of crisis.",
      name: "Mike Dobbie",
      company: "Trans States Airlines",
      image: "https://via.placeholder.com/48",
    },
    {
      text: "Aviation Laboratories has provided excellent service supporting our MRO programs. We can always depend on AVLAB to perform beyond expectations in a very challenging environment.",
      name: "Tod Bushnell",
      company: "Northrop Grumman Technical Services",
      image: "https://via.placeholder.com/48",
    },
    {
      text: "Your services are excellent! Our expectations were exceeded, and I appreciate the support provided during critical situations.",
      name: "Alice Johnson",
      company: "Global Aero Systems",
      image: "https://via.placeholder.com/48",
    },
  ];

  // Automatically rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);


  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div>
     <AvlabHeader />
     <div className="h-[550px] ">
  <Carousel indicators={false} leftControl={null} rightControl={null}>
    <img src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2023/11/custom-kitting-2.webp" alt="Slide 1" />
    <img src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2023/05/fleet-solutions-3-scaled-1.webp" alt="Slide 2" />
    <img src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/02/iStock-114854141.webp" alt="Slide 3" />
    <img src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2023/12/iStock-1223481522-1.jpg" alt="Slide 4" />
    <img src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2023/11/dreamstim-2.webp" alt="Slide 5" />
  </Carousel>
   </div>
<div className="flex flex-col lg:flex-row h-auto lg:h-[580px] w-full bg-slate-100">
  {/* Left Content */}
  <div className="flex flex-col mt-8 lg:mt-32 mx-4 lg:ml-12 lg:w-2/5">
    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
      Discover the Value of Expertise and <br className="hidden sm:block"/> Service at Aviation Laboratories!
    </h2>
    <p className="mt-4 sm:mt-8 text-sm sm:text-base">
      Aviation Laboratories is the leading provider of aviation-specific testing, and the procurement and distribution of chemical and maintenance products, for the aviation industry. We help MROs, mechanics, and owners maintain and optimize aircraft performance, ensuring safe and efficient operations in the aviation industry.
    </p>
    <p className="mt-4 sm:mt-8 text-sm sm:text-base">
      Our commitment to customer satisfaction and overall experience makes us a pillar in the aviation community.
    </p>
    <a href="/" className="text-red-500 font-semibold mt-6 sm:mt-10 flex items-center space-x-1">
      <span className="relative after:content-['>'] after:text-red-700 after:font-bold after:ml-2">
        Read more
      </span>
    </a>
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-[350px] mt-8 lg:mt-16 mx-4 lg:ml-16">
    <img src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2023/12/iStock-1223481522-1.jpg" alt="img" className="w-full object-cover rounded-lg" />
  </div>

  {/* Testimonial Section */}
  <div className="flex items-center justify-center w-full lg:w-96 h-auto lg:h-[450px] mt-8 lg:mt-16 mx-4 lg:ml-8">
    <div className="bg-blue-900 text-white p-6 sm:p-8 pt-10 sm:pt-20 shadow-lg w-full h-full">
      <div className="relative">
        {/* Top Quote Mark */}
        <div className="text-red-500 text-4xl sm:text-3xl md:text-3xl absolute -top-4 sm:-top-6 left-0 font-bold">
          “
        </div>
        {/* Testimonial Content */}
        <p className="text-sm sm:text-sm md:text-sm lg:text-sm leading-relaxed">
          We take pride in our knowledge of engine types and their common wear anomalies related to engine wear.
          We maintain strong, positive relationships with engine and oil manufacturers to keep up with the latest technical information.
          When customers choose us, they can rely on our expertise to deliver the most accurate results, backed by decades of data and experience.
          We don’t test cars, trucks, or boats. We’re an aviation ONLY laboratory service company and we specialize in Aircraft engine wear.
        </p>
        {/* Bottom Quote Mark */}
        <div className="text-red-500 text-4xl sm:text-5xl absolute -bottom-8 sm:-bottom-16 right-0 font-bold">
          ”
        </div>
      </div>
      {/* Attribution */}
      <div className="mt-8 sm:mt-16">
        <p className="text-lg font-bold">Wayne Odegard</p>
        <p className="text-sm text-gray-300">
          Vice President | Aviation Laboratories
        </p>
      </div>
    </div>
  </div>
</div>


<div className="py-16">
  <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center h-auto bg-[#FAFAFA] p-4">
    {/* Card 1 */}
    <div className="flex flex-col items-center p-6 sm:p-8 pt-12 sm:pt-16">
      <div className="bg-blue-900 text-yellow-400 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full text-2xl sm:text-3xl mb-4">
        {/* <img/> */}
      </div>
      <h3 className="text-blue-900 font-bold text-xl sm:text-2xl mb-4">Lab Analysis</h3>
      <p className="text-gray-700 text-sm sm:text-base mb-6">
        Aviation Laboratories is the leading provider of aviation-specific oil, oil/filter,
        fuel, and hydraulic fluid testing. Our reliable lab analysis and detailed reporting
        will help you keep your aircraft healthy and in the air.
      </p>
      <a
        href="/"
        className="text-red-500 font-semibold flex items-center space-x-1"
      >
        <span className="relative after:content-['>'] after:text-red-500 after:font-bold after:ml-2">
          Learn more
        </span>
      </a>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center p-6 sm:p-8 pt-12 sm:pt-16">
      <div className="bg-blue-900 text-yellow-400 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full text-2xl sm:text-3xl mb-4">
        {/* <img/> */}
      </div>
      <h3 className="text-blue-900 font-bold text-xl sm:text-2xl mb-4">Chemicals</h3>
      <p className="text-gray-700 text-sm sm:text-base mb-6">
        Ensure the safety of your aircraft with our line of certified de-icing and anti-icing
        chemicals. Our products are specially formulated for prevention and cure, so you can
        fly with peace of mind.
      </p>
      <a
        href="/"
        className="text-red-500 font-semibold flex items-center space-x-1"
      >
        <span className="relative after:content-['>'] after:text-red-500 after:font-bold after:ml-2">
          Learn more
        </span>
      </a>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center p-6 sm:p-8 pt-12 sm:pt-16">
      <div className="bg-blue-900 text-yellow-400 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full text-2xl sm:text-3xl mb-4">
        {/* <img/> */}
      </div>
      <h3 className="text-blue-900 font-bold text-xl sm:text-2xl mb-4">Maintenance</h3>
      <p className="text-gray-700 text-sm sm:text-base mb-6">
        Repair, lubricate, protect, and clean with a range of carefully sourced aviation brands,
        inspection kits, and maintenance solutions. From looking good to flying right, Aviation
        Laboratories has you covered.
      </p>
      <a
        href="/"
        className="text-red-500 font-semibold flex items-center space-x-1"
      >
        <span className="relative after:content-['>'] after:text-red-500 after:font-bold after:ml-2">
          Learn more
        </span>
      </a>
    </div>
  </div>
</div>

    
    <div className="flex flex-col lg:flex-row h-auto w-full mb-16 p-4 lg:p-0">
  {/* Image Section */}
  <img 
    src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/02/iStock-114854141.webp" 
    alt="aeroplane" 
    className="w-full  sm:ml-0 md:ml-10 lg:ml-10 lg:w-auto lg:h-[440px] object-cover"
  />

  {/* Text and List Section */}
  <div className="lg:ml-20 mt-8 lg:mt-8">
    <h2 className="text-blue-900 text-3xl lg:text-5xl font-bold">
      Aviation Lab Testing Services <br /> and Products
    </h2>
    <p className="mt-4 lg:mt-6 text-base lg:text-base">
      Aviation Analysis plays a crucial role in ensuring the reliability and safety of aircraft engines.
      By thoroughly examining engine types and identifying common anomalies related to engine wear, we
      can provide accurate results that enable our customers to make informed decisions.
    </p>
    <p className="mt-6 lg:mt-8 text-base lg:text-lg">
      We offer the following testing kits and analysis services:
    </p>

    {/* Services List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 lg:mt-8">
      <div className="flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-500 bg-red-500 rounded-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M9 11l3 3L22 4" stroke="white" strokeWidth="2" />
        </svg>
        <p className="ml-4 hover:text-yellow-300 text-sm lg:text-base">
          Oil & Oil/Filter Analysis & Testing Kits
        </p>
      </div>

      <div className="flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-500 bg-red-500 rounded-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M9 11l3 3L22 4" stroke="white" strokeWidth="2" />
        </svg>
        <p className="ml-4 hover:text-yellow-300 text-sm lg:text-base">
          Hydraulic Fluid Analysis & Testing Kits
        </p>
      </div>

      <div className="flex items-center mt-4 sm:mt-0 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-500 bg-red-500 rounded-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M9 11l3 3L22 4" stroke="white" strokeWidth="2" />
        </svg>
        <p className="ml-4 hover:text-yellow-300 text-sm lg:text-base">
          Aviation Fuel Analysis & Testing Kits
        </p>
      </div>

      <div className="flex items-center mt-4 sm:mt-0 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-500 bg-red-500 rounded-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M9 11l3 3L22 4" stroke="white" strokeWidth="2" />
        </svg>
        <p className="ml-4 hover:text-yellow-300 text-sm lg:text-base">
          Particle Analysis & Testing Kits
        </p>
      </div>
    </div>

    {/* Button */}
    <button className="bg-blue-800 mt-8 w-full sm:w-40 text-white py-2 px-4 rounded-2xl hover:bg-blue-900">
      View All Products
    </button>
  </div>
</div>

    <div className="flex flex-col sm:flex-row bg-blue-900 items-center justify-center h-auto sm:h-48 mb-6 p-4 sm:p-0 text-center">
  <h2 className="text-white font-bold text-2xl sm:text-5xl mb-4 sm:mb-0 sm:mr-12">
    Discover more of AVLAB
  </h2>
  <a
    href="https://www.youtube.com/@Aviation_Laboratories?sub_confirmation=1"
    className="flex justify-center"
  >
    <img
      width="150" 
      src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Button.png?time=1732137962"
      className="attachment-large wp-image-28000"
      alt="YouTube Button"
    />
  </a>
</div>

    
<div className="flex flex-col lg:flex-row ml-4 lg:ml-12 my-6 lg:my-12">
  {/* Video Player Section */}
  <div className="flex-1 mb-6 lg:mb-0">
    <iframe
      allowFullScreen
      title="Part 1: Why Aviation Oil and Filter Analysis is Important"
      src="https://www.youtube.com/embed/kGAzkUY3Tos?rel=0&amp;showinfo=0&amp;ecver=2&amp;enablejsapi=1"
      className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[450px] aspect-video shadow-lg"
    ></iframe>
  </div>

  {/* Video List Section */}
  <div className="w-full lg:w-1/3 h-auto shadow-lg">
    {/* Header */}
    <div className="flex justify-between items-center bg-yellow-300 p-4 border-b">
      <h2 className="text-base sm:text-lg font-bold">Latest Videos</h2>
      <span className="text-sm">10 Videos</span>
    </div>

    {/* Video Tabs */}
    <div
      className="divide-y overflow-y-auto"
      style={{
        minHeight: "300px",
        maxHeight: "352px",
      }}
    >
      {/* Tab 1 */}
      <div className="flex items-center hover:bg-slate-200 p-4 gap-3 cursor-pointer">
        <img
          src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/02/video-1.webp"
          alt="Part 1: Why Aviation Oil and Filter Analysis is Important"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded object-cover"
        />
        <div>
          <h4 className="text-xs sm:text-sm font-medium">
            Part 1: Why Aviation Oil and Filter Analysis is Important
          </h4>
        </div>
      </div>

      {/* Repeat for other tabs */}
      <div className="flex items-center hover:bg-slate-200 p-4 gap-3 cursor-pointer">
        <img
          src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/01/video2.jpg"
          alt="PART 2: How to Submit Your Samples to Aviation Laboratories"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded object-cover"
        />
        <div>
          <h4 className="text-xs sm:text-sm font-medium">
            PART 2: How to Submit Your Samples to Aviation Laboratories
          </h4>
        </div>
      </div>
      {/* Tab 3 */}
      <div className="flex items-center p-4 gap-3 hover:bg-slate-200  cursor-pointer ">
        <img
          src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/01/video-1.jpg"
          alt="PART 3: Aviation Laboratories' Process for Analyzing Your Samples"
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <h4 className="text-sm font-medium ">
            PART 3: Aviation Laboratories' Process for Analyzing Your Samples
          </h4>
        </div>
      </div>
      {/* Tab 4 */}
      <div className="flex items-center p-4 gap-3 hover:bg-slate-200  cursor-pointer ">
        <img
          src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/01/video4.jpg"
          alt="PART 4: How We Communicate Your Results"
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <h4 className="text-sm font-medium ">
            PART 4: How to Submit Your Samples to Aviation Laboratories
          </h4>
        </div>
      </div>
       {/* Tab 5 */}
       <div className="flex items-center p-4 gap-3 hover:bg-slate-200  cursor-pointer ">
        <img
          src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/01/video5.jpg"
          alt=" Why It's Important to Perform Oil Filter Analysis"
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <h4 className="text-sm font-medium ">
             Why It's Important to Perform Oil Filter Analysis
          </h4>
        </div>
      </div>
       {/* Tab 6 */}
       <div className="flex items-center p-4 gap-3 hover:bg-slate-200  cursor-pointer ">
        <img
          src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/01/video6.jpg"
          alt=" Understanding Aviation Laboratories' Oil Analysis Lab Report"
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <h4 className="text-sm font-medium ">
             Understanding Aviation Laboratories' Oil Analysis Lab Report
          </h4>
        </div>
      </div>
       {/* Tab 7 */}
       <div className="flex items-center p-4 gap-3 hover:bg-slate-200  cursor-pointer ">
        <img
          src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/01/video7.jpg"
          alt=" Aviation Laboratories Hydraulic Fluids"
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <h4 className="text-sm font-medium ">
            Aviation Laboratories Hydraulic Fluids
          </h4>
        </div>
      </div>
       {/* Tab 8 */}
       <div className="flex items-center p-4 gap-3 hover:bg-slate-200  cursor-pointer ">
        <img
          src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/01/video8.jpg"
          alt=" Aviation Laboratories Aviation Fuel"
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <h4 className="text-sm font-medium ">
           Aviation Laboratories Aviation Fuel
          </h4>
        </div>
      </div>
       {/* Tab 9 */}
       <div className="flex items-center p-4 gap-3 hover:bg-slate-200  cursor-pointer ">
        <img
          src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/01/video8.jpg"
          alt=" Aviation Laboraties TKS"
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <h4 className="text-sm font-medium ">
             Aviation Laboraties TKS
          </h4>
        </div>
      </div>

      <div className="flex items-center p-4 gap-3 hover:bg-slate-200 cursor-pointer">
        <img
          src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2024/01/video8.jpg"
          alt="Aviation Laboratories"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded object-cover"
        />
        <div>
          <h4 className="text-xs sm:text-sm font-medium">Aviation Laboratories</h4>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="mt-6 bg-slate-100 h-auto w-full py-10">
  {/* Title & Description */}
  <div className="flex flex-col items-center text-center px-4">
    <h2 className="text-blue-900 font-semibold text-3xl sm:text-4xl md:text-5xl">
      AVLAB Products
    </h2>
    <p className="mt-4 text-gray-700 max-w-2xl text-sm sm:text-base md:text-lg">
      Shop AV Store for popular AVLAB Brands including AVL DICE Fuel Additive, Clear View Cleaners and Polishers, and our full line of AVL lubricants and degreasers. Also, shop filters, inspection kits, and more!
    </p>
  </div>

  {/* Cards Section */}
  <div className="max-w-7xl mx-auto mt-10 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white flex flex-col cursor-pointer items-center justify-center p-6 shadow-md h-[300px] sm:h-[360px] w-full">
        <div className="w-16 h-16 bg-blue-900 hover:bg-yellow-300 flex items-center justify-center rounded-full transition duration-300">
          <img
            src="/path-to-icon1.png"
            alt="Cleaners & Lubricants Icon"
            className="w-8 h-8"
          />
        </div>
        <h3 className="mt-4 text-blue-950 font-semibold text-xl sm:text-2xl md:text-3xl">
          Cleaners &<br />Lubricants
        </h3>
      </div>

      {/* Card 2 */}
      <div className="bg-white flex flex-col cursor-pointer items-center justify-center p-6 shadow-md h-[300px] sm:h-[360px] w-full">
        <div className="w-16 h-16 bg-blue-900 hover:bg-yellow-300 flex items-center justify-center rounded-full transition duration-300">
          <img
            src="/path-to-icon2.png"
            alt="Inspection Kits Icon"
            className="w-8 h-8"
          />
        </div>
        <h3 className="mt-4 text-blue-950 font-semibold text-xl sm:text-2xl md:text-3xl">
          Inspection Kits
        </h3>
      </div>

      {/* Card 3 */}
      <div className="bg-white flex flex-col cursor-pointer items-center justify-center p-6 shadow-md h-[300px] sm:h-[360px] w-full">
        <div className="w-16 h-16 bg-blue-900 hover:bg-yellow-300 flex items-center justify-center rounded-full transition duration-300">
          <img
            src="/path-to-icon3.png"
            alt="Fuel Additives Icon"
            className="w-8 h-8"
          />
        </div>
        <h3 className="mt-4 text-blue-950 font-semibold text-xl sm:text-2xl md:text-3xl">
          Fuel Additives
        </h3>
      </div>

      {/* Card 4 */}
      <div className="bg-white flex flex-col cursor-pointer items-center justify-center p-6 shadow-md h-[300px] sm:h-[360px] w-full">
        <div className="w-16 h-16 bg-blue-900 hover:bg-yellow-300 flex items-center justify-center rounded-full transition duration-300">
          <img
            src="/path-to-icon4.png"
            alt="Oils/Fluids Icon"
            className="w-8 h-8"
          />
        </div>
        <h3 className="mt-4 text-blue-950 font-semibold text-xl sm:text-2xl md:text-3xl">
          Oils/Fluids
        </h3>
      </div>
    </div>

    {/* Button */}
    <div className="flex justify-center mt-6">
      <button className="px-8 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-full font-semibold text-sm transition duration-300">
        View All Products
      </button>
    </div>
  </div>
</div>

<div className="max-w-8xl mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src="/custom-kitting.png"
        alt="Aviation Oil Analysis"
        className="h-48 w-full object-cover cursor-pointer"
      />
      <div className="p-4">
        <h3 className="text-blue-900 font-semibold text-lg hover:text-yellow-400 cursor-pointer">
          Aviation Oil Analysis: Revealing Hidden Engine Issues
        </h3>
        <p className="text-gray-500 text-sm mt-2">
          Aviation oil analysis is a crucial tool that serves as a health check
          for your aircraft’s heart – the engine. By analyzing the oil used...
        </p>
        <a
            href="/"
            className="text-red-500 font-semibold mt-6 flex items-center space-x-1"
          >
           <span className="relative after:content-['>'] after:text-red-700 after:font-bold after:ml-2">
            Read more
            </span>
          </a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src="/pma-oem.png"
        alt="OEM vs. PMA Aviation Parts"
        className="h-48 w-full object-cover cursor-pointer"
      />
      <div className="p-4">
        <h3 className="text-blue-900 font-semibold text-lg hover:text-yellow-400 cursor-pointer">
          OEM vs. PMA Aviation Parts: Understanding the Difference
        </h3>
        <p className="text-gray-500 text-sm mt-2">
          When it comes to aviation parts, there are two main options to
          consider: OEM (Original Equipment Manufacturer) and PMA...
        </p>
        <a
            href="/"
            className="text-red-500 font-semibold mt-6 flex items-center space-x-1"
          >
           <span className="relative after:content-['>'] after:text-red-700 after:font-bold after:ml-2">
            Read more
            </span>
          </a>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src="/fleet-solutions-3-scaled.jpg"
        alt="Aviation Fuel Composition Analysis"
        className="h-48 w-full object-cover cursor-pointer"
      />
      <div className="p-4">
        <h3 className="text-blue-900 font-semibold text-lg hover:text-yellow-400 cursor-pointer">
          Aviation Fuel Composition Analysis: Unlocking the Secrets of Flight
        </h3>
        <p className="text-gray-500 text-sm mt-2">
          Aviation fuel plays a crucial role in the world of aviation, powering
          aircraft to soar through the skies with speed and efficiency...
        </p>
        <a
            href="/"
            className="text-red-500 font-semibold mt-6 flex items-center space-x-1"
          >
           <span className="relative after:content-['>'] after:text-red-700 after:font-bold after:ml-2">
            Read more
            </span>
          </a>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src="/dreamstim.jpg"
        alt="Difference between Aviation Oil and Oil Filter Analysis"
        className="h-48 w-full object-cover cursor-pointer"
      />
      <div className="p-4">
        <h3 className="text-blue-900 font-semibold text-lg hover:text-yellow-400 cursor-pointer">
          Difference between Aviation Oil and Oil Filter Analysis
        </h3>
        <p className="text-gray-500 font-normal text-sm mt-2">
          When it comes to ensuring the smooth and efficient operation of
          aircraft engines, oil plays a crucial role...
        </p>
        <a
            href="/"
            className="text-red-500 font-semibold mt-6 flex items-center space-x-1"
          >
           <span className="relative after:content-['>'] after:text-red-700 after:font-bold after:ml-2">
            Read more
            </span>
          </a>
      </div>
    </div>
  </div>
</div>
<div
  className="w-full h-[450px] bg-cover bg-center mt-10  relative opacity-75 "
  style={{
    backgroundImage: `url('https://avlab.com/wp-content/uploads/2024/02/helicopter-rsz.webp')`,
  }}
>
  <div className="absolute inset-10  flex flex-col   ">

    <h1 className="text-blue-950 text-4xl font-bold mb-4 drop-shadow-lg">
    Aviation Laboratories<br/>
    is always the answer.
    </h1>
   
    <p className="text-blue-950 text-lg  max-w-2xl ">
   
        Before and after a flight<br/> and anytime in between.<br/>
        Our Products and Services keep<br/> you flying and worry free.
    </p>
    <div className="flex  mt-6">
      <button className="px-8 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-full font-semibold text-sm  transition duration-300">
        Shop AVLAB
      </button>
    </div>
  </div>
</div>
<div>
  {/* Testimonials Section */}
  <div className="bg-white py-10  hidden sm:block">
    <div className="container mx-auto px-4">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Testimonials
      </h2>

      {/* Testimonials Wrapper */}
      <div className="relative flex items-center space-x-6">
        {/* Left Arrow */}
        <button
          onClick={() =>
            setCurrentIndex(
              (prevIndex) =>
                (prevIndex - 2 + testimonials.length) % testimonials.length
            )
          }
          className="absolute left-0 text-black text-3xl  font-semibold ml-16 mt-10  w-10 h-10 flex items-center justify-center  z-10"
          aria-label="Previous"
        >
          &lt;
        </button>

        {/* Testimonials Content */}
        <div className="flex flex-wrap w-full justify-center space-x-6">
        {[0, 1].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length;
            const testimonial = testimonials[index];

            return (
                <div key={index} className="testimonial-container flex flex-col items-start">
                  {/* Testimonial Box */}
                  <div
                    className="flex-shrink-0 w-[600px] bg-gray-100 shadow-md rounded-lg p-6 relative flex flex-col "
                    style={{
                      height: "180px", // Set a fixed height for all testimonials
                    }}
                  >
                    {/* Testimonial Text */}
                    <p className="text-gray-700 italic leading-relaxed mb-6 overflow-hidden">
                      {testimonial.text}
                    </p>
              
                    {/* Arrow Shape Below the Testimonial */}
                    <div className="absolute bottom-[-10px] left-10 w-4 h-4 bg-gray-100 rotate-45 shadow-md"></div>
                  </div>
              
                  {/* Name, Company, and Image Below the Testimonial */}
                  <div
                    className="flex items-center justify-center mt-6 space-x-4 ml-6"
                    style={{ textAlign: "center" }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="text-left">
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              );
              
              
              
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length)
          }
          className="absolute right-0 text-black text-3xl font-bold mt-10  pr-12 flex items-center justify-center cursor-pointer z-10"
          aria-label="Next"
        >
          &gt;
        </button>
      </div>
    </div>
  </div>
</div>

<div className="container mx-auto py-6 h-auto bg-gray-100">
  <div className="border-t mb-8 border-yellow-300 w-full"></div>

  {/* Main Container */}
  <div className="flex flex-col sm:flex-row items-center justify-between">
    {/* Heading Section */}
    <div className="text-center sm:text-left mb-4 sm:mb-0">
      <h3 className="text-blue-900  sm:pl-0 md:pl-8 lg:pl-8 text-3xl font-semibold">
        Interested in getting to know more? We are a click away!
      </h3>
    </div>

    {/* Button Section */}
    <div className="text-center sm:text-right">
      <a
        href="https://avlab.com/contact-us/"
        className="inline-block bg-blue-800 text-white text-sm mr-9 px-6 py-3 rounded-3xl hover:bg-blue-900 transition-colors"
      >
        Contact Us
      </a>
    </div>
  </div>
</div>








   





     <AvlabFooter />

     
    </div>
  );
}

export default Avlab;
