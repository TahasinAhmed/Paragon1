import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../Components/Spinner';
import {Link} from 'react-router-dom';
//import { user } from '../../../backend/models/usermodel';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox , MdOutlineDelete} from 'react-icons/md';
import Navbar from '../Components/Navbar.jsx'
import Hero from '../Components/Hero.jsx'
import { Copyright } from 'lucide-react';
import Footer from '../Components/Footer.jsx';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/users')
      .then((response) => {
        console.log('API response: ', response);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='bg-blue-50'>
    <Navbar />
    <Hero />
      <div className="w-full text-center text-xs mt-4 bg-gray-600 border-gray-700 py-2 text-white">
        <Link to={'/AdminSignIn'} className='flex items-center justify-center gap-x-2'>
          <span>Signin as Admin</span>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Home
