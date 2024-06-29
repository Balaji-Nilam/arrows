/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Mtech_Colleges from './Mtech_Colleges'
import Buttons from '../Components/Buttons';
import Courses_Navbar from '../Components/Courses_Navbar';


function Mtech_Home() {
  return (
    <div>
        <Courses_Navbar/>
        <Buttons/>
        <Mtech_Colleges/>
    </div>
  )
}

export default Mtech_Home;