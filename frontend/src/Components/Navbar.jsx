import { useState } from 'react'
import ParagonLogo from '../assets/ParagonLogo2.png'
import { Menu, X } from 'lucide-react';
function Navbar() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-400 shadow-md">
      <div className="w-full max-w-[1280px] mx-auto px-4 flex items-center justify-between py-2 relative">
        {/* Logo */}
        <a href="/" className="cursor-pointer">
          <img
            src={ParagonLogo}
            alt="Paragon Logo"
            className="w-[150px] h-auto rounded-lg"
          />
        </a>

        {/* Hamburger Menu Button (mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Full Menu */}
        <ul
          className={`flex-col lg:flex-row lg:flex lg:items-center absolute lg:static top-20 left-0 w-full lg:w-auto bg-blue-400 lg:bg-transparent z-50 transition-all duration-300 ease-in ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          {['হোম', 'কোর্স', 'রেজাল্ট', 'পাবলিকেশন্স', 'নোটিশ', 'আরো'].map((item, index) => (
            <li
              key={index}
              className="text-white text-xl lg:text-xl px-5 py-3 hover:bg-gradient-to-t from-blue-600 to-blue-400 cursor-pointer transition-all duration-200 relative group text-center"
            >
              <a href="">{item}</a>
              <div className="w-full h-1 bg-blue-900 hidden group-hover:block transition-all duration-200"></div>
            </li>
          ))}

          {/* Search Input */}
          <li className="px-5 py-3">
            <div className="w-full max-w-sm min-w-[200px] bg-white rounded-md shadow">
              <div className="relative">
                <input
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300"
                  placeholder="SEARCH"
                />
                <button
                  className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 text-sm text-white hover:bg-slate-700"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </li>

          {/* Login Button */}
          <li className="px-5 py-3 text-center">
            <button className="text-white text-xl whitespace-nowrap px-5 py-1 border-blue-950 border rounded-xl bg-blue-900 shadow-2xl hover:bg-blue-700 transition">
              Log In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
