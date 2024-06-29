import React from 'react';
// import overviewImage from './path/to/overview.jpg';
// import specializationsImage from './path/to/specializations.jpg';
// import curriculumImage from './path/to/curriculum.jpg';
// import eligibilityImage from './path/to/eligibility.jpg';
// import careersImage from './path/to/careers.jpg';
// import institutionsImage from './path/to/institutions.jpg';
import './Btech.css';
// import '../index.css';

const Btech_Overview = () => {
  return (
    <div className="website-container">
    <div className="overview-container">
      <h1>Bachelor of Technology (B.Tech)</h1>

      <h2>Program Overview</h2>
      {/* <div className="image-container">
        <img src={overviewImage} alt="Program Overview" />
      </div> */}
      <p>The Bachelor of Technology (B.Tech) is a professional undergraduate engineering degree awarded after the completion of a four-year program of study in the field of engineering. The program is designed to provide students with a strong foundation in the principles and practices of engineering, preparing them for a variety of careers in industry, research, and academia.</p>

      <h2>Specializations</h2>
      {/* <div className="image-container">
        <img src={specializationsImage} alt="Specializations" />
      </div> */}
      <ul>
        <li>Computer Science and Engineering</li>
        <li>Electrical Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Civil Engineering</li>
        <li>Electronics and Communication Engineering</li>
        <li>Information Technology</li>
      </ul>

      <h2>Curriculum</h2>
      {/* <div className="image-container">
        <img src={curriculumImage} alt="Curriculum" />
      </div> */}
      <p>The B.Tech curriculum is typically divided into eight semesters, with each semester focusing on different aspects of engineering education:</p>
      <table>
        <thead>
          <tr>
            <th>Semester</th>
            <th>Key Subjects</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mathematics, Physics, Chemistry, Engineering Drawing</td>
          </tr>
          <tr>
            <td >2</td>
            <td>Mathematics, Core Subjects</td>
          </tr>
          <tr>
            <td rowSpan={5}>3,4,5,6,7</td>
            <td> Core Subjects</td>
          </tr>
          <tr>
            
            <td> Core Subjects</td>
          </tr>
          <tr>
            
            <td> Core Subjects</td>
          </tr>
          <tr>
            
            <td> Core Subjects</td>
          </tr>
          <tr>
            
            <td> Core Subjects</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Project Work, Electives</td>
          </tr>
        </tbody>
      </table>

      <h2>Eligibility Criteria</h2>
      {/* <div className="image-container">
        <img src={eligibilityImage} alt="Eligibility Criteria" />
      </div> */}
      <p>To be eligible for admission into a B.Tech program, candidates must typically meet the following criteria:</p>
      <ul>
        <li>Completion of 10+2 or equivalent examination with Physics, Chemistry, and Mathematics as core subjects.</li>
        <li>Minimum aggregate marks as specified by the institution.</li>
        <li>Qualifying in entrance examinations such as JEE Main, JEE Advanced, or other state-level engineering entrance tests.</li>
      </ul>

      <h2>Career Opportunities</h2>
      {/* <div className="image-container">
        <img src={careersImage} alt="Career Opportunities" />
      </div> */}
      <p>B.Tech graduates have a wide range of career opportunities available to them, including but not limited to:</p>
      <ul>
        <li>Software Developer</li>
        <li>Mechanical Engineer</li>
        <li>Electrical Engineer</li>
        <li>Civil Engineer</li>
        <li>Project Manager</li>
        <li>Research Scientist</li>
        <li>Entrepreneur</li>
      </ul>

      <h2>Top Institutions</h2>
      {/* <div className="image-container">
        <img src={institutionsImage} alt="Top Institutions" />
      </div> */}
      <p>Some of the top institutions offering B.Tech programs include:</p>
      <ul>
        <li>Indian Institutes of Technology (IITs)</li>
        <li>National Institutes of Technology (NITs)</li>
        <li>Birla Institute of Technology and Science (BITS)</li>
        <li>Vellore Institute of Technology (VIT)</li>
        <li>Delhi Technological University (DTU)</li>
      </ul>
    </div>
    </div>
  );
};

export default Btech_Overview;
