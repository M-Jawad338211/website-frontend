import React from "react";

function AvlabFooter() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="space-y-4">
            <img src="your-logo.png" alt="AVLAB logo" className="w-32" />
            <p className="text-lg " style={{fontSize: '1rem'}}>
              At Aviation Laboratories, we specialize in lab<br/> analysis, chemical
              and maintenance solutions<br/> specifically for the aviation industry.
              With<br/> decades of industry expertise, we are committed<b/> to providing
              you with the best experience possible. From comprehensive solutions,
              reliable support, and a team that is dedicated to keeping you happy
              and flying – these are the makings of<br/> #TheAvLabExperience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ml-8">
            <h3 className="text-3xl font-bold">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shop" className="hover:text-yellow-400 text-lg">
                  Shop
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-yellow-400 text-lg">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-400 text-lg">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-yellow-400 text-lg">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-yellow-400 text-lg">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-yellow-400 text-lg">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-yellow-400 text-lg">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-yellow-400 text-lg">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6 ml-3">
  <div>
    <h3 className="text-3xl font-bold">Contact Us</h3>
    <div className="mt-6">
        <div className="flex items-start space-x-2">
            <i className="text-yellow-500 fas fa-map-marker-alt mt-10"></i>
            <p className="hover:text-yellow-400 cursor-pointer text-lg">
                5401 Mitchelldale, Suite B6<br /> Houston, TX 77092,<br /> United States
            </p>
        </div>
      <p className="mt-4">
        <i className="text-yellow-500 fas fa-phone-alt"></i>
        <a href="tel:+17138646677" className="hover:text-yellow-400 cursor-pointer text-lg ml-3">
          713-864-6677
        </a>
      </p>
      <p className="mt-4">
        <i className="text-yellow-500 fas fa-fax"></i>
        <a href="tel:+17138646690" className="hover:text-yellow-400 cursor-pointer text-lg ml-3">
          713-864-6690
        </a>
      </p>
      <p className="mt-4">
        <i className="text-yellow-500 fas fa-envelope"></i>
        <a href="mailto:sales@avlab.com" className="hover:text-yellow-400 cursor-pointer text-lg ml-3">
          sales@avlab.com
        </a>
      </p>
      <p className="mt-3">
        <i className="text-yellow-500 fas fa-globe "></i>
        <a href="https://www.avlab.com" className="hover:text-yellow-400 cursor-pointer text-lg ml-3">
          www.avlab.com
        </a>
      </p>
    </div>
  </div>
</div>

          <div>
              <h3 className="text-3xl font-bold">Newsletter</h3>
              <form action="#" className="flex mt-6 items-center space-x-4 relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="py-2 px-4 rounded-sm h-16 w-96 text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-28 absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black py-2 px-6 rounded-sm hover:bg-yellow-500 "
                >
                  Send
                </button>
              </form>
              <div className="flex items-center space-x-4 mt-4">
                <a href="/" className="hover:border-gray-400 border-2 py-2 px-4 border-gray-400 p-2 rounded-md transition-colors duration-300 transform hover:scale-90">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="hover:border-gray-400 border-2 py-2 px-4 border-gray-400 p-2 rounded-md transition-colors duration-300 transform hover:scale-90">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="/" className="hover:border-gray-400 border-2 py-2 px-4 border-gray-400 p-2 rounded-md transition-colors duration-300 transform hover:scale-90">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="/" className="hover:border-gray-400 border-2 py-2 px-4 border-gray-400 p-2 rounded-md transition-colors duration-300 transform hover:scale-90">
                    <i className="fab fa-linkedin"></i>
                </a>
             </div>

              <div className="flex items-center space-x-4 mt-4">
                <img src="visa-logo.png" alt="Visa" className="w-12" />
                <img
                  src="mastercard-logo.png"
                  alt="MasterCard"
                  className="w-12"
                />
                <img src="paypal-logo.png" alt="PayPal" className="w-12" />
                <img src="paypal-logo.png" alt="PayPal" className="w-12" />
                <img src="paypal-logo.png" alt="PayPal" className="w-12" />
              </div>
            </div>
        </div>
      </div>
      <div className="mt-6"><hr className="mx-12 border-t-1 border-yellow-400"/></div>
      <div className="flex justify-between items-center py-4 px-6">
  <p className="text-left ml-4">
    &copy; 2024 All Copyrights Reserved
  </p>
  <p className="text-right mr-8">
    Design by <span className="text-yellow-300 text-lg font-bold">BrandJaws</span>
  </p>
</div>
    </footer>
  );
}

export default AvlabFooter;
