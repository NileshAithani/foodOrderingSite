import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-evenly w-full p-3 text-lg shadow-lg rounded-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src="footer-logo.png" alt="Footer Logo" className="w-20" />
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Link 1
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Link 2
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Link 3
          </a>
        </div>
        <div className="text-gray-600">
          <span>Address:</span>
          <span>123 Example St, City</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Facebook
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Twitter
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
