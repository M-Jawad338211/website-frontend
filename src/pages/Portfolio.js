







// import React, { useState } from "react";
// import Dropdown from "../components/Dropdown";
// import Button from '@mui/material/Button';
// import { Link } from "react-router-dom";

// // Project Data
// const projects = [
//   { id: 1, image: "1.png", category: "TechStack", type: "React" },
//   { id: 2, image: "2nd.png", category: "Industries", type: "Fintech" },
//   { id: 3, image: "mokeup.png", category: "Marketing", type: "SEO" },
//   { id: 5, image: "AV-lab-1.png", category: "CMS", type: "Wordpress" },
//   // { id: 7, image: "SaaS-Business.jpg", category: "Product-Type", type: "SAAS" },
//   // { id: 8, image: "what-is-SAAS.png", category: "Product-Type", type: "SAAS" },
//   // { id: 9, image: "SaaS.jpeg", category: "Product-Type", type: "SAAS" },
//   // { id: 10, image: "IaaS.jpg", category: "Product-Type", type: "IAAS" },
//   // { id: 11, image: "iaas1.jpg", category: "Product-Type", type: "IAAS" },
//   // { id: 12, image: "iaas-intro.png", category: "Product-Type", type: "IAAS" },
//   // { id: 13, image: "PaaS.png", category: "Product-Type", type: "PAAS" },
//   // { id: 14, image: "PaaS2.png", category: "Product-Type", type: "PAAS" },
//   // { id: 15, image: "What-is-PWA.png", category: "Product-Type", type: "PWA" },
//   // { id: 16, image: "PWA-development.png", category: "Product-Type", type: "PWA" },
//   // { id: 17, image: "progressive-web-app.jpg", category: "Product-Type", type: "PWA" },
//   // { id: 18, image: "fintech.jfif", category: "industries", type: "fintech" },
//   // { id: 19, image: "fintech2.jpg", category: "industries", type: "fintech" },
//   // { id: 20, image: "fintech-explained.png", category: "industries", type: "fintech" },
//   // { id: 21, image: "edtech2.jfif", category: "industries", type: "edtech" },
//   // { id: 22, image: "edtech.jpg", category: "industries", type: "edtech" },
//   // { id: 23, image: "EdTech3.png", category: "industries", type: "edtech" },
//   // { id: 24, image: "medtech2.jfif", category: "industries", type: "medtech" },
//   // { id: 25, image: "medtech.jpg", category: "industries", type: "medtech" },
//   // { id: 26, image: "medtech3.jpg", category: "industries", type: "medtech" },
//   // { id: 27, image: "food1.jpg", category: "industries", type: "food" },
//   // { id: 28, image: "food2.jpg", category: "industries", type: "food" },
//   // { id: 29, image: "food3.jpg", category: "industries", type: "food" },
//   // { id: 30, image: "food4.jpg", category: "industries", type: "food" },
//   // { id: 31, image: "food5.jpg", category: "industries", type: "food" },
//   // { id: 32, image: "food6.jpg", category: "industries", type: "food" },
//   // { id: 33, image: "food7.jpg", category: "industries", type: "food" },
//   // { id: 34, image: "food8.jpg", category: "industries", type: "food" },
//   // { id: 35, image: "cryptocurrency.avif", category: "industries", type: "crypto" },
//   // { id: 36, image: "crypto.jpg", category: "industries", type: "crypto" },
//   // { id: 37, image: "crypto2.jpg", category: "industries", type: "crypto" },
//   // { id: 38, image: "crypto3.jpg", category: "industries", type: "crypto" },
//   // { id: 39, image: "crypto4.png", category: "industries", type: "crypto" },
//   // { id: 40, image: "SEO-1.jpg", category: "marketing", type: "seo" },
//   // { id: 41, image: "seo1.png", category: "marketing", type: "seo" },
//   // { id: 42, image: "Why-SEO.jpg", category: "marketing", type: "seo" },
//   // { id: 43, image: "google.jpg", category: "marketing", type: "advertising" },
//   // { id: 44, image: "Online-Advertising.jpg", category: "marketing", type: "advertising" },
//   // { id: 45, image: "GOOGLEVSFACEBOOK-1.jpg", category: "marketing", type: "advertising" },
//   // { id: 46, image: "smm.jpg", category: "marketing", type: "smm" },
//   // { id: 47, image: "SMM.png", category: "marketing", type: "smm" },
//   // { id: 48, image: "smm1.png", category: "marketing", type: "smm" },
//   // { id: 49, image: "smm-vs-seo.jpg", category: "marketing", type: "smm" },
//   // { id: 50, image: "email.png", category: "marketing", type: "email marketing" },
//   // { id: 51, image: "11-Email-Marketing-Advantages.jpg", category: "marketing", type: "email marketing" },
//   // { id: 52, image: "6-Email-Marketing-Disadvantages.jpg", category: "marketing", type: "email marketing" },
//   // { id: 53, image: "Email-Marketing.jpg", category: "marketing", type: "email marketing" },
//   // { id: 54, image: "what-is-wordpress.png", category: "cms", type: "wordpress" },
//   // { id: 55, image: "wordpress.jpg", category: "cms", type: "wordpress" },
//   // { id: 56, image: "WordPress.jpg", category: "cms", type: "wordpress" },
//   // { id: 57, image: "Shopify.jpeg", category: "cms", type: "shopify" },
//   // { id: 58, image: "What-is-Shopify.png", category: "cms", type: "shopify" },
//   // { id: 59, image: "Shopify1.jpeg", category: "cms", type: "shopify" },
//   // { id: 60, image: "webflow.png", category: "cms", type: "webflow" },
//   // { id: 61, image: "webflow1.jpg", category: "cms", type: "webflow" },
//   // { id: 62, image: "webflow_marketplace.png", category: "cms", type: "webflow" },
//   // { id: 63, image: "wix.jpg", category: "cms", type: "wix" },
//   // { id: 64, image: "wix1.jpg", category: "cms", type: "wix" },
//   // { id: 65, image: "React.jpg", category: "techstack", type: "react" },
//   // { id: 66, image: "Benefits.jpeg", category: "techstack", type: "react" },
//   // { id: 67, image: "Why-Use-ReactJS.jpg", category: "techstack", type: "react" },
//   // { id: 68, image: "vue.png", category: "techstack", type: "vue" },
//   // { id: 69, image: "Benefits-of-Using-Vue.jpg", category: "techstack", type: "vue" },
//   // { id: 70, image: "attribute-vue-js.jpg", category: "techstack", type: "vue" },
//   // { id: 71, image: "What-is-Angular.png", category: "techstack", type: "angular" },
//   // { id: 72, image: "advantages of angular.png", category: "techstack", type: "angular" },
//   // { id: 73, image: "angular.png", category: "techstack", type: "angular" },
//   // { id: 74, image: "ror.jpg", category: "techstack", type: "ror" },
//   // { id: 75, image: "ror-benefits.png", category: "techstack", type: "ror" },
//   // { id: 76, image: "rail-development-framworks.jpeg", category: "techstack", type: "ror" },
//   // { id: 77, image: "python.jpg", category: "techstack", type: "python" },
//   // { id: 78, image: "benefis-python.jfif", category: "techstack", type: "python" },


// ];

// const productTypes = ["PAAS", "SAAS", "IAAS", "PWA"];
// const industries = ["Fintech", "Edtech", "Medtech", "Food", "Crypto"];
// const marketing = ["SEO", "Advertising", "SMM", "Email Marketing"];
// const cmsOptions = ["WordPress", "Shopify", "Webflow", "Wix"];
// const techStack = ["React", "Vue", "Angular", "ROR", "Python"];

// function Portfolio() {
// //   const [selectedFilter, setSelectedFilter] = useState("ALL");
//   const [filteredProjects, setFilteredProjects] = useState(projects);

//   // Handle Dropdown Selection
//   const handleSelect = (option) => {
//     const filtered = projects.filter(
//       (project) =>
//         project.type.toLowerCase() === option.toLowerCase() ||
//         project.category.toLowerCase() === option.toLowerCase()
//     );
//     setFilteredProjects(filtered);
//     // setSelectedFilter(option);
//   };

//   // Handle ALL button click
//   const handleAllClick = () => {
//     setFilteredProjects(projects);
//     // setSelectedFilter("ALL");
//   };

//   return (
//     <div className="Portfolio">
//       <div className="flex flex-col items-center mt-10 px-4">
//         <p className="text-sm font-normal mb-2">Our Projects</p>
//         <h1 className="text-2xl md:text-3xl font-extrabold text-center">
//           <span className="text-[#0F1C3F] leading-normal">View Some of Our Works</span>
//           <br />
//           <span className="text-[#9F3F3F]">
//             <span className="text-black">and</span> Case Studies{" "}
//             <span className="text-black">for</span> Clients
//           </span>
//         </h1>
//       </div>

//       {/* Filter Dropdowns */}
//       <div className="flex gap-4 justify-center mt-12">
//         <Button variant="contained" onClick={handleAllClick}
//         sx={{
//             backgroundColor: "#E8E8E8", // Primary color
//             color: "#000000",            // Text color
//             '&:hover': {
//               background: "linear-gradient(90deg, #0A3253 0%, #9F3F3F 100%)",
//               color: '#ffffff',
//             }
//           }}>
//           ALL
//         </Button>

//         <Dropdown label="Product-Type" items={productTypes} handleSelect={handleSelect} />
//         <Dropdown label="Industries" items={industries} handleSelect={handleSelect} />
//         <Dropdown label="Marketing" items={marketing} handleSelect={handleSelect} />
//         <Dropdown label="CMS" items={cmsOptions} handleSelect={handleSelect} />
//         <Dropdown label="TechStack" items={techStack} handleSelect={handleSelect} />
//       </div>

     

//       {/* Display Filtered Projects */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 px-4">
//         {filteredProjects.map((project) => (
//           <div key={project.id}>
//              <Link to={`/avlab/${project.id}`} key={project.id}></Link>
//             <img
//               src={`./${project.image}`}
//               alt={project.type}
//               className="w-full h-64 object-cover rounded-md transform transition-transform duration-300 hover:scale-105 hover:brightness-100"
//             />
//           </div>
//         ))}
//       </div>
//       <div className=" z-10 mt-16 h-28 rounded-lg w-[66.66%] mx-auto bg-cover bg-center relative" style={{ backgroundImage: 'url(./Rectangle3.png)' }}>
//             <div className="absolute inset-0 flex flex-col mt-6 items-center justify-center text-white">
//             {/* Your text goes here */}
//             <p className="text-xl font-bold" style={{fontSize:'1.5rem'}}>Take Your Website to Next Level Right Now!</p>
//             <button className="bg-white text-red-800 rounded-3xl h-8 w-20  text-xs  mt-3 font-bold">
//                 Start Now
//             </button>
//             </div>

            

//             </div>


            
//     </div>
//   );
// }

// export default Portfolio;





import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// Project Data
const projects = [
  { id: 1, image: "1.png", category: "TechStack", type: "React" },
  { id: 2, image: "2nd.png", category: "Industries", type: "Fintech" },
  { id: 3, image: "mokeup.png", category: "Marketing", type: "SEO" },
  { id: 5, image: "AV-lab-1.png", category: "CMS", type: "Wordpress" },
];

const productTypes = ["PAAS", "SAAS", "IAAS", "PWA"];
const industries = ["Fintech", "Edtech", "Medtech", "Food", "Crypto"];
const marketing = ["SEO", "Advertising", "SMM", "Email Marketing"];
const cmsOptions = ["WordPress", "Shopify", "Webflow", "Wix"];
const techStack = ["React", "Vue", "Angular", "ROR", "Python"];

function Portfolio() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Handle Dropdown Selection
  const handleSelect = (option) => {
    const filtered = projects.filter(
      (project) =>
        project.type.toLowerCase() === option.toLowerCase() ||
        project.category.toLowerCase() === option.toLowerCase()
    );
    setFilteredProjects(filtered);
  };

  // Handle ALL button click
  const handleAllClick = () => {
    setFilteredProjects(projects);
  };

  return (
    <div className="Portfolio">
      <div className="flex flex-col items-center mt-10 px-4">
        <p className="text-sm font-normal mb-2">Our Projects</p>
        <h1 className="text-2xl md:text-3xl font-extrabold text-center">
          <span className="text-[#0F1C3F] leading-normal">View Some of Our Works</span>
          <br />
          <span className="text-[#9F3F3F]">
            <span className="text-black">and</span> Case Studies{" "}
            <span className="text-black">for</span> Clients
          </span>
        </h1>
      </div>

      {/* Filter Dropdowns */}
      <div className="flex gap-4 justify-center mt-12">
        <Button
          variant="contained"
          onClick={handleAllClick}
          sx={{
            backgroundColor: "#E8E8E8", // Primary color
            color: "#000000", // Text color
            "&:hover": {
              background: "linear-gradient(90deg, #0A3253 0%, #9F3F3F 100%)",
              color: "#ffffff",
            },
          }}
        >
          ALL
        </Button>

        <Dropdown label="Product-Type" items={productTypes} handleSelect={handleSelect} />
        <Dropdown label="Industries" items={industries} handleSelect={handleSelect} />
        <Dropdown label="Marketing" items={marketing} handleSelect={handleSelect} />
        <Dropdown label="CMS" items={cmsOptions} handleSelect={handleSelect} />
        <Dropdown label="TechStack" items={techStack} handleSelect={handleSelect} />
      </div>

      {/* Display Filtered Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 px-4">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <Link to={`/avlab/${project.id}`}>
              <img
                src={`./${project.image}`}
                alt={project.type}
                className="w-full h-64 object-cover rounded-md transform transition-transform duration-300 hover:scale-105 hover:brightness-100"
              />
            </Link>
          </div>
        ))}
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
}

export default Portfolio;

