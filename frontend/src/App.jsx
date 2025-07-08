import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import CreateUser from './Pages/CreateUsers'
import ShowUser from './Pages/ShowUsers'
import EditUser from './Pages/EditUsers'
import DeleteUser from './Pages/DeleteUsers'

import Courses from './Pages/Courses'
import Results from './Pages/Results'
import Publications from './Pages/Publications'
import Notices from './Pages/Notices'
import More from './Pages/More'
import AdminHome from './Pages/AdminHome'
import AdminSignIn from './Pages/AdminSignIn'
import AdminRegister from './Pages/AdminRegister'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users/create' element={<CreateUser/>} />
      <Route path='/users/details/:id' element={<ShowUser/>} />
      <Route path='/users/edit/:id' element={<EditUser/>} />
      <Route path='/users/delete/:id' element={<DeleteUser/>} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Results" element={<Results />} />
      <Route path="/Publications" element={<Publications />} />
      <Route path="/Notices" element={<Notices />} />
      <Route path="/More" element={<More />} />
      <Route path="/AdminHome" element={<AdminHome />} />
      <Route path="/AdminSignIn" element={<AdminSignIn />} />
      <Route path="/AdminRegister" element={<AdminRegister />} />
      {/* Add more routes as needed */}
    </Routes>
  )
}

export default App
