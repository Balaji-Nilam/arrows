import React, { useEffect, useState } from 'react';
import './Btech.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('engineering_colleges_ap_extended.json')
            .then(response => response.json())
            .then(data => setColleges(data))
            .catch(error => console.error('Error fetching the JSON file:', error));
    }, []);

    return (
        <div className="website-container">

        <div className="container colleges-card">
            <h1>Engineering Colleges in Andhra Pradesh</h1>
            <div id="colleges">
                {colleges.map(college => (
                    <div className='card'>
                    <div className="college card-body row" key={college.name}>
                        <h5 className='col-sm-4'>{college.name}</h5>
                            <p className='col-sm-2'>Location: {college.location}</p>
                            <p className='col-sm-2'>Established: {college.established}</p>
                            <span className='col-sm-2'>Affiliation: {college.affiliation}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Colleges;
