import React, { useState } from "react";
import './Buttons.css';
import { Link } from "react-router-dom";

const Buttons = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseClick = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(
        selectedCourses.filter((selectedCourse) => selectedCourse !== course)
      );
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  // const courses = [
  //   "All",
  //   "BE/B.Tech",
  //   "MBA/PGDM",
  //   "MBBS",
  //   "ME/M.Tech",
  //   "B.Sc",
  //   "BA",
  //   "B.Com",
  //   "BCA",
  //   "BBA/BMS",
  //   "B.Sc (Nursing)",
  // ];

  return (
    <div className="course-filter-wrapper">
      <div className="course-filter">
        <Link to="/Btech_Course"><button>BE/B.Tech</button></Link>
        <Link to="/Mtech_Course"><button>ME/M.Tech</button></Link>
        <Link to=""><button>MBA/PGDM</button></Link>
        <Link to=""><button>MBBS</button></Link>
        <Link to=""><button>B.Sc</button></Link>
        <Link to=""><button>BA</button></Link>
        <Link to=""><button>BCA</button></Link>
        <Link to=""><button>BBA/BMS</button></Link>
        <Link to=""><button>B.Sc (Nursing)</button></Link>
        </div>
    </div>
  );
};

export default Buttons;