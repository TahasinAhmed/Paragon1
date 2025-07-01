import React, {useState} from 'react'
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { HTTPURL } from '../../config';
import Navbar from '../Components/Navbar';

const CreateUsers = () => {
  const [branchName, setBranchName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [batchNo, setBatchNo] = useState('');
  const [englishName, setEnglishName] = useState('');
  const [banglaName, setBanglaName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [guardianPhoneNumber, setGuardianPhoneNumber] = useState('');
  const [hSCResult, setHSCResult] = useState('');
  const [hSCCollegeName, setHSCCollegeName] = useState('');
  const [hSCRoll, setHSCRoll] = useState('');
  const [hSCBoard, setHSCBoard] = useState('');
  const [sSCResult, setSSCResult] = useState('');
  const [sSCCollegeName, setSSCCollegeName] = useState('');
  const [sSCRoll, setSSCRoll] = useState('');
  const [sSCBoard, setSSCBoard] = useState('');
  const [unit, setUnit] = useState('');
  const [ loading ,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveUser = () => {
    const data = {
      BranchName: branchName,
      RollNo: rollNo,
      BatchNo: batchNo,
      EnglishName: englishName,
      BanglaName: banglaName,
      DateOfBirth: dateOfBirth,
      FatherName: fatherName,
      MotherName: motherName,
      PermanentAddress: permanentAddress,
      PhoneNumber: phoneNumber,
      GuardianPhoneNumber: guardianPhoneNumber,
      HSCResult: hSCResult,
      HSCCollegeName: hSCCollegeName,
      HSCRoll: hSCRoll,
      HSCBoard: hSCBoard,
      SSCResult: sSCResult,
      SSCCollegeName: sSCCollegeName,
      SSCRoll: sSCRoll,
      SSCBoard: sSCBoard,
      Unit: unit
      };
      setLoading(true);
      axios.post(HTTPURL+'/users', data, { headers: { 'Content-Type': 'application/json' } })
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);  
        alert('An error happend. Please Chack console');
        console.log(error);
      });
  };

  return (
    
    <div>
      <Navbar />
      <div className="flex items-center gap-4 py-4 bg-white shadow-md rounded-lg">
        <BackButton />
        <h1 className='text-3xl mx-auto'>Register User</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div className='py-4'>
        <div className="">
        <div className="flex-wrap py-2">
          <input type="text" value={branchName} onChange={(e) => setBranchName(e.target.value)} placeholder="Branch" className="input" />
          <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} placeholder="Roll No" className="input" />
          <input type="text" value={batchNo} onChange={(e) => setBatchNo(e.target.value)} placeholder="Batch No" className="input" />
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="input" />
        </div>

        <h2 className="text-xl font-semibold mt-6">Contact Information</h2>
        <div className='flex-wrapgrid grid-cols-4  mt-6'>
          <input type="text" value={englishName} onChange={(e) => setEnglishName(e.target.value)} placeholder="Name (In English)" className="input" />
          <input type="text" value={banglaName} onChange={(e) => setBanglaName(e.target.value)} placeholder="Name (In Bangla)" className="input" />

          <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} placeholder="Father's Name" className="input" />
          <input type="text" value={motherName} onChange={(e) => setMotherName(e.target.value)} placeholder="Mother's Name" className="input" />
        </div>
        
        <h2 className="text-xl font-semibold mt-6">Address</h2>
        <div>
          <input type="text" value={permanentAddress} onChange={(e) => setPermanentAddress(e.target.value)} placeholder="Permanent Address" className="input px-50%" />
        </div>
        <h2 className="text-xl font-semibold mt-6">Contact Information</h2>
        <div className='flex-wrap'>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Student's Phone Number" className="input" />
          <input type="text" value={guardianPhoneNumber} onChange={(e) => setGuardianPhoneNumber(e.target.value)} placeholder="Guardian's Phone Number" className="input" />

        </div>
        
        <h2 className="text-xl font-semibold mt-6">HSC Information</h2>
        <div className="flex-wrap">
          <input type="text" value={hSCCollegeName} onChange={(e) => setHSCCollegeName(e.target.value)} placeholder="Institution" className="input" />
          <input type="text" value={hSCRoll} onChange={(e) => setHSCRoll(e.target.value)} placeholder="Roll" className="input" />
          <input type="text" value={hSCBoard} onChange={(e) => setHSCBoard(e.target.value)} placeholder="Board" className="input" />
          <input type="text" value={hSCResult} onChange={(e) => setHSCResult(e.target.value)} placeholder="GPA" className="input" />
        </div>

        <h2 className="text-xl font-semibold mt-6">SSC Information</h2>
        <div className="flex-wrap">
          <input type="text" value={sSCCollegeName} onChange={(e) => setSSCCollegeName(e.target.value)} placeholder="Institution" className="input" />
          <input type="text" value={sSCRoll} onChange={(e) => setSSCRoll(e.target.value)} placeholder="Roll" className="input" />
          <input type="text" value={sSCBoard} onChange={(e) => setSSCBoard(e.target.value)} placeholder="Board" className="input" />
          <input type="text" value={sSCResult} onChange={(e) => setSSCResult(e.target.value)} placeholder="GPA" className="input" />
        </div>

        <h2 className="text-xl font-semibold mt-6">Unit</h2>
        <div className="flex flex-wrap gap-4">
          {['A', 'B', 'C (Fin)', 'C (Mkt)', 'GST', 'Math', 'IBA'].map((u) => (
            <label key={u} className="flex items-center space-x-2">
              <input type="radio" name="unit" value={u} checked={unit === u} onChange={(e) => setUnit(e.target.value)} />
              <span>{u}</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleSaveUser}
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 mt-6">
          Submit
        </button>
      </div>
      </div>





      
      
    </div>
  )
}

export default CreateUsers
