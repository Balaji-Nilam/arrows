import React, { useState, useEffect } from 'react';
import './Btech.css';
//import { Navbar } from '../Components/Navbar';

const CollegeSearch = () => {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('indian_college_list.json')
      .then(response => response.json())
      .then(data => {
        // Assuming the JSON structure provided
        const collegeList = [];
        for (const state in data) {
          data[state].forEach(college => {
            collegeList.push({
              name: college,
              state: state
            });
          });
        }
        setColleges(collegeList);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
    <div className='search'>
        <div className='search-container'>
      <input
        type="text"
        placeholder="Search for colleges.."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
      <div className='colleges-list'>
      <ul>
        {colleges
          .filter(college =>
            college.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((college, index) => (
            <li key={index}>
              {college.name} - {college.state}
            </li>
          ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default CollegeSearch;
