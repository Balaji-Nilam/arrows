import React, { useEffect, useState } from 'react';
import '../Btech/Btech.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Mtech_Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('mtech_colleges_ap.json')
            .then(response => response.json())
            .then(data => setColleges(data))
            .catch(error => console.error('Error fetching the JSON file:', error));
    }, []);

    return (
        <div className="website-container">
        <div className="container colleges-card">
            <h1>Mtech Colleges in Andhra Pradesh</h1>
            <div id="colleges">
                {colleges.map(college => (
                    <div className='card'>
                    <div className="college card-body row" key={college.name}>
                        <h5 className='col-sm-4'>{college.name}</h5>
                            <p className='col-sm-2'>city: {college.city}</p>
                            <p>Website:<a href="college.website" className='col-sm-2'> {college.website}</a></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Mtech_Colleges;
