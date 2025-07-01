import React, {useState} from 'react'
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import { HTTPURL } from '../../config';
import Navbar from '../Components/Navbar';


const DeleteUsers = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDeleteUser = (id) => {
    setLoading(true);
    axios.delete(`${HTTPURL}/users/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        setLoading(false);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center gap-4 py-4 bg-white shadow-md rounded-lg">
        <BackButton />
        <h1 className='text-3xl mx-auto'>Delete User</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg'>
        <p>Are you sure you want to delete this user?</p>
        <button 
          onClick={() => handleDeleteUser(id)} 
          className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
          Delete User
        </button>
      </div>
    </div>
  )
}

export default DeleteUsers

