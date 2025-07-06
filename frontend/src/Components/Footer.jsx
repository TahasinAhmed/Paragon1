import React from 'react'
import Copyright from './Copyright';

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
            <p className="text-sm">© {new Date().getFullYear()} Paragon. All rights reserved.</p>
            <p className="text-xs">Crafted by Tech Knight</p>
            </div>
        </footer>
        <div className="bg-gray-900 text-white py-2 text-center">
            <p className="text-xs">Follow us on <a href="https://www.facebook.com/Paragon" className="text-blue-400 hover:underline">Facebook</a> | <a href="https://www.twitter.com/Paragon" className="text-blue-400 hover:underline">Twitter</a> | <a href="https://www.instagram.com/Paragon" className="text-blue-400 hover:underline">Instagram</a></p>
        </div>
        <div className="bg-gray-700 text-white py-2 text-center">
            <p className="text-xs">For inquiries, contact us at <a href="mailto:info@paragon.com" className="text-blue-400 hover:underline">info@paragon.com</a></p>
            <Copyright />
        </div>
    </div>
  )
}

export default Footer
