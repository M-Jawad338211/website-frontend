

import React from "react";

function AvlabFooter() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">AVLAB</h1>
              <p className="text-sm sm:text-base text-gray-300">Aviation Laboratories</p>
            </div>
            <p className="text-sm sm:text-lg leading-6">
              At Aviation Laboratories, we specialize in lab analysis, chemical and maintenance solutions specifically for the aviation industry.
              With decades of industry expertise, we are committed to providing you with the best experience possible.
              From comprehensive solutions, reliable support, and a team that is dedicated to keeping you happy and flying – these are the makings of <br />#TheAvLabExperience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {["Shop", "Careers", "Contact", "FAQ's", "Shipping & Returns", "Privacy Policy", "Terms & Conditions", "Blog"].map((link, index) => (
                <li key={index}>
                  <a href="/" className="hover:text-yellow-400 text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">Contact Us</h3>
            <div>
              <div className="flex items-start space-x-2">
                <i className="text-yellow-500 fas fa-map-marker-alt"></i>
                <p className="hover:text-yellow-400 cursor-pointer text-base">
                  5401 Mitchelldale, Suite B6<br /> Houston, TX 77092, United States
                </p>
              </div>
              <p className="mt-4">
                <i className="text-yellow-500 fas fa-phone-alt"></i>
                <a href="tel:+17138646677" className="hover:text-yellow-400 cursor-pointer text-base ml-3">
                  713-864-6677
                </a>
              </p>
              <p className="mt-4">
                <i className="text-yellow-500 fas fa-fax"></i>
                <a href="tel:+17138646690" className="hover:text-yellow-400 cursor-pointer text-base ml-3">
                  713-864-6690
                </a>
              </p>
              <p className="mt-4">
                <i className="text-yellow-500 fas fa-envelope"></i>
                <a href="mailto:sales@avlab.com" className="hover:text-yellow-400 cursor-pointer text-base ml-3">
                  sales@avlab.com
                </a>
              </p>
              <p className="mt-3">
                <i className="text-yellow-500 fas fa-globe"></i>
                <a href="https://www.avlab.com" className="hover:text-yellow-400 cursor-pointer text-base ml-3">
                  www.avlab.com
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Newsletter</h3>
            
            <form action="#" className="flex mt-6 items-center space-x-4 relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="py-2 px-4 rounded-sm h-16 w-96 text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-28 absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black py-2 px-6 rounded-sm hover:bg-yellow-500 "
                >
                  Send
                </button>
              </form>
            <div className="flex justify-start space-x-4 mt-4">
              {["facebook", "instagram", "youtube", "linkedin"].map((icon, index) => (
                <a key={index} href="/" className="hover:border-gray-400 border-2 p-2 rounded-md">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
            <div className="flex flex-wrap space-x-4 mt-4">
              <img src="visa-logo.png" alt="Visa" className="w-12" />
              <img src="mastercard-logo.png" alt="MasterCard" className="w-12" />
              <img src="paypal-logo.png" alt="PayPal" className="w-12" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <hr className="mx-4 border-t border-yellow-400" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-4">
        <p className="text-center sm:text-left">&copy; 2024 All Rights Reserved</p>
        <p className="text-center sm:text-right mt-2 sm:mt-0">
          Design by <span className="text-yellow-300 font-bold">BrandJaws</span>
        </p>
      </div>
    </footer>
  );
}

export default AvlabFooter;
