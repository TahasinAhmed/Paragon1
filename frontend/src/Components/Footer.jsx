import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa';
import  Copyright  from '../Components/Copyright';



const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-8 pb-4 flex flex-col">
      <div className="max-w-6xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-blue-600 pb-2">Get in Touch</h3>
          <div className="flex flex-col items-start gap-y-1 text-xs">
            <span><MdLocationPin className='text-2xl text-red-600 inline-block mr-1'/>Notun Bazar Moor, Mymensingh, Bangladesh, 2200</span>
            <span><FaPhoneAlt className='text-2xl text-blue-600 inline-block mr-1'/>+88 01917853289</span>
            <span><FaEnvelope className='text-2xl text-white inline-block mr-1'/>paragonmymen@gmail.com</span>
            <span><FaGlobe className='text-2xl text-white inline-block mr-1'/>paragonacademy.com</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mt-6 mb-2 md:mt-0 border-b border-blue-600 pb-2">Useful Links</h3>
          <ul className="text-xs space-y-1">
            <li><a href="#" className="hover:underline">Admission</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-blue-600 pb-2">Subscribe Us</h3>
          <form className="flex flex-col space-y-2 mb-4">
            <input type="email" placeholder="Your Email" className="px-2 py-1 rounded text-white border-2 border-gr" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded px-2 py-1 text-xs">Subscribe</button>
          </form>
          <h3 className="flex text-lg font-semibold mb-2 border-b border-blue-600 pb-2">Connect With Us</h3>
          <ul className="flex space-x-3 text-2xl">
            <li><a href="https://www.facebook.com/paragonmymensingh1?_rdc=1&_rdr#" className="hover:underline text-blue-600"><FaFacebookSquare /></a></li>
            <li><a href="https://www.instagram.com/paragonmymensingh?igsh=dG8zdGZxcnMzZzQ0" className="hover:underline text-purple-500"><FaInstagram /></a></li>
            <li><a href="https://www.youtube.com/@paragonadmissioncoaching3846" className="hover:underline text-red-600"><FaYoutube /></a></li>
          </ul>
        </div>
      </div>
      <div className="">
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;