import React from "react";
import { useParams } from "react-router-dom";
import AvlabHeader from "../components/AvlabHeader";
import AvlabFooter from "../components/AvlabFooter";
import { Carousel } from "flowbite-react";


const projects = [
    { id: 1, image: "1.png", category: "TechStack", type: "React" },
    { id: 2, image: "2nd.png", category: "Industries", type: "Fintech" },
    { id: 3, image: "mokeup.png", category: "Marketing", type: "SEO" },
    { id: 5, image: "AV-lab-1.png", category: "CMS", type: "Wordpress" },
];

function Avlab() {
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
<div className="flex h-[580px] w-full bg-slate-100">
  <div className="flex flex-col mt-32 ml-12">
    <h2 className="text-3xl font-bold text-blue-900">Discover the Value of Expertise and<br/> Service at Aviation Laboratories!</h2>
    <p className="mt-8">Aviation Laboratories is the leading provider of aviation-specific testing,<br/> and the procurement and distribution of chemical and maintenance<br/> products, for the aviation industry. We help MROs, mechanics, and owners<br/> maintain and optimize aircraft performance, ensuring safe and efficient<br/> operations in the aviation industry.</p>
    <p className="mt-8">Our commitment to customer satisfaction and overall experience makes us<br/> a pillar in the aviation community.</p>
    <a
            href="#"
            className="text-red-500 font-semibold mt-10 flex items-center space-x-1"
          >
           <span className="relative after:content-['>'] after:text-red-700 after:font-bold after:ml-2">
            Read more
            </span>
          </a>
  </div>
  <div className=" w-[350px] mt-16 ml-16">
    <img  src="https://8b24a1.p3cdn1.secureserver.net/wp-content/uploads/2023/12/iStock-1223481522-1.jpg" alt="img"/>
  </div>
  <div className="flex items-center justify-center w-96 h-[450px] mt-16 ml-8 ">
      <div className="bg-blue-900 text-white p-8 pt-20  shadow-lg w-full h-full">
        <div className="relative">
          {/* Top Quote Mark */}
          <div className="text-red-500 text-5xl absolute -top-6 left-0 font-bold">
            “
          </div>

          {/* Testimonial Content */}
          <p className="text-xl leading-relaxed " style={{fontSize:'0.8rem'}}>
            We take pride in our knowledge of engine types and their common
            wear anomalies related to engine wear. We maintain strong, positive
            relationships with engine and oil manufacturers to keep up with the
            latest technical information. When customers choose us, they can
            rely on our expertise to deliver the most accurate results, backed
            by decades of data and experience. We don’t test cars, trucks, or
            boats. We’re an aviation ONLY laboratory service company and we
            specialize in Aircraft engine wear.
          </p>

          
          <div className="text-red-500 text-5xl absolute -bottom-16 right-0 font-bold ">
            ”
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-16">
          <p className="text-lg font-bold">Wayne Odegard</p>
          <p className="text-sm text-gray-300">
            Vice President | Aviation Laboratories
          </p>
        </div>
      </div>
    </div>
</div>
<div className=" py-16">
      <div className=" mx-auto grid grid-cols-3  gap-8 text-center h-96 bg-[#FAFAFA]">
        {/* Card 1 */}
        <div className="flex flex-col items-center  p-8 pt-16 ">
          <div className="bg-blue-900 text-yellow-400 w-16 h-16 flex items-center justify-center rounded-full text-3xl mb-4">
            <img/>
          </div>
          <h3 className="text-blue-900 font-bold text-2xl mb-4">Lab Analysis</h3>
          <p className="text-gray-700 text-sm mb-6">
            Aviation Laboratories is the leading provider of aviation specific oil, oil/filter,
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
        <div className="flex flex-col items-center  p-8 pt-16 ">
          <div className="bg-blue-900 text-yellow-400 w-16 h-16 flex items-center justify-center rounded-full text-3xl mb-4">
            <img/>
          </div>
          <h3 className="text-blue-900 font-bold text-2xl mb-4">Chemicals</h3>
          <p className="text-gray-700 text-sm mb-6">
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
        <div className="flex flex-col items-center  p-8 pt-16 ">
          <div className="bg-blue-900 text-yellow-400 w-16 h-16 flex items-center justify-center rounded-full text-3xl mb-4">
            <img/>
           
          </div>
          <h3 className="text-blue-900 font-bold text-2xl mb-4">Maintenance</h3>
          <p className="text-gray-700 text-sm mb-6">
            Repair, lubricate, protect and clean with a range of carefully sourced aviation brands,
            inspection kits and maintenance solutions. From looking good to flying right, Aviation
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

     <AvlabFooter />

     
    </div>
  );
}

export default Avlab;
