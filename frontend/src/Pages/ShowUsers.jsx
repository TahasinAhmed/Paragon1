import React, {useEffect, useState} from 'react';
import {HTTPURL} from '../../config.js'
import axios from 'axios';
import { useParams} from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import Navbar from '../Components/Navbar.jsx';


const ShowUsers = () => {
    const [user, setuser] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
      setLoading(true);
      axios.get(HTTPURL+'/users/'+id)
      .then((Response) => {
        setuser(Response.data);
        setLoading(false);
      })
      .catch((error) =>{
        console.log(error);
        setLoading(false);
      });
    }, [])
    return (
    <div>
      <Navbar />
      <div className='p-4'>
      <div className="flex items-center gap-4 py-4 bg-white shadow-md rounded-lg">
        <BackButton />
        <h1 className='text-3xl mx-auto'>User Details</h1>
      </div>
      {loading ? <Spinner /> : (
        <div className='py-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-white p-4 rounded shadow'>
              <h2 className='text-xl font-semibold'>Branch Name: {user.BranchName}</h2>
              <p>Roll No: {user.RollNo}</p>
              <p>Batch No: {user.BatchNo}</p>
              <p>English Name: {user.EnglishName}</p>
              <p>Bangla Name: {user.BanglaName}</p>
              <p>Date of Birth: {user.DateOfBirth}</p>
            </div>
            <div className='bg-white p-4 rounded shadow'>
              <h2 className='text-xl font-semibold'>Contact Information</h2>
              <p>Father's Name: {user.FatherName}</p>
              <p>Mother's Name: {user.MotherName}</p>
              <p>Permanent Address: {user.PermanentAddress}</p>
              <p>Phone Number: {user.PhoneNumber}</p>
              <p>Guardian Phone Number: {user.GuardianPhoneNumber}</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default ShowUsers
