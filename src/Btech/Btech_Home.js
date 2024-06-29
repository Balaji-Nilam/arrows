/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Btech_Colleges from './Btech_Colleges'
import Btech_Branches from './Btech_Branches';
import Buttons from '../Components/Buttons';
import Courses_Navbar from "../Components/Courses_Navbar";
function Btech_Home(){
    return(
        <div>
            <Courses_Navbar/>
            <Buttons/>
            <Btech_Branches/>
            <Btech_Colleges/>
        </div>
    )
}

export default Btech_Home;