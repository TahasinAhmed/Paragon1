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
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Users List</h1>
        <Link to='/users/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (<Spinner />) : (
        <table className='w-full border-separate border-spacing-0.5'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>BranchName</th>
              <th className='border border-slate-600 rounded-md'>RollNo</th>
              <th className='border border-slate-600 rounded-md'>BatchNo</th>
              <th className='border border-slate-600 rounded-md'>EnglishName</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>BanglaName</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>DateOfBirth</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>PermanentAddress</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>PhoneNumber</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>GuardianPhoneNumber</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>HSCResult</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>HSCRoll</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>HSCBoard</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>SSCResult</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>SSCRoll</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>SSCBoard</th>
              <th className='border border-slate-600 rounded-md max-md:hidden '>Unit</th>
            </tr>
          </thead>
          <tbody>
            {(users || []).map((user, index) => (
              <tr key={user._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.BranchName}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.RollNo}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.BatchNo}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.EnglishName}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.BanglaName}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.DateOfBirth}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.PermanentAddress}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.PhoneNumber}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.GuardianPhoneNumber}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.HSCResult}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.HSCRoll}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.HSCBoard}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.SSCResult}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.SSCRoll}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.SSCBoard}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {user.Unit}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={'/users/details/'+user._id}>
                      <BsInfoCircle className='text-2xl text-green-600' />
                    </Link>
                    <Link to={'/users/edit/'+user._id}>
                      <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={'/users/delete/'+user._id}>
                      <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>

                  </div>
                </td>
              </tr>
            )

            )}

          </tbody>
        </table>
      )}
      <Footer />
    </div>
  )
}

export default Home
