import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";


export const Footer = () => {

  
  return (
    <footer className="w-full bg-black text-white px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Upper section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">
            How can we
            <br />
            help you. get
            <br />
            in touch
          </h2>
          <div className="flex justify-between items-start">
            <p className="text-gray-400 max-w-md">
              To ensure that all Wikipedia content is verifiable, anyone may
              question an uncited claim. If your work has been tagged
            </p>
            <button className="bg-gray-500 hover:bg-blue-500 text-white px-6 py-2 rounded">
              Contact US
            </button>
          </div>
        </div>
        {/* Lower section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-12">
              <h3 className="text-2xl font-bold">besnik</h3>
              <nav>
                <ul className="flex space-x-8">
                  <li>
                    <a href="#about" className="hover:text-gray-300">
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-gray-300">
                      SERVICES
                    </a>
                  </li>
                  <li>
                    <a href="#why-us" className="hover:text-gray-300">
                      WHY US
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-gray-300">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            Copyright © 2020 Besnik Creative
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
