import React, { useEffect, useState } from 'react';

const Btech_All_Universities = () => {
  const [universityData, setUniversityData] = useState({});

  useEffect(() => {
    fetch('indian_university_list.json')
      .then((response) => response.json())
      .then((data) => setUniversityData(data))
      .catch((error) => console.error('Error fetching university data:', error));
  }, []);

  return (
    <div>
      <h1>Indian University List</h1>
      <div id="university-list">
        {Object.keys(universityData).map((state) => (
          <table key={state}>
            <thead>
              <tr>
                <th colSpan="2">{state}</th>
              </tr>
            </thead>
            <tbody>
              {universityData[state].map((university, index) => (
                <tr key={index}>
                  <td>{university}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Btech_All_Universities;
