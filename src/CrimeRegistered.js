// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './CrimeRegistered.css';

// const CrimeRegistered = () => {
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     fetchEntries();
//   }, []);

//   const fetchEntries = async () => {
//     try {
//       const response = await axios.get('http://localhost:8083/crimes/findAllCrimesComplaint');
//       setEntries(response.data);
//     } catch (error) {
//       console.error('Error fetching crime entries:', error);
//     }
//   };

//   return (
//     <div className="crime-registered-container">
//       <h2>Registered Crimes</h2>
//       <div className="crime-entries">
//         {entries.map((entry, index) => (
//           <div key={index} className="crime-entry">
//             <p><strong>ID:</strong> {entry.id}</p>
//             <p><strong>Full Name:</strong> {entry.fullName}</p>
//             <p><strong>Contact:</strong> {entry.contact}</p>
//             <p><strong>Incident Location:</strong> {entry.incidentLocation}</p>
//             <p><strong>Crime Details:</strong> {entry.crimeDetails}</p>
//             <p><strong>Date:</strong> {entry.date}</p>
//             <p><strong>Witnesses:</strong> {entry.witnesses.join(', ')}</p>
//             <p><strong>Suspect Description:</strong> {entry.suspectDescription}</p>
//             <p><strong>Evidence:</strong> {entry.evidence}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CrimeRegistered;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CrimeRegistered.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const CrimeRegistered = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('http://localhost:8083/crimes/findAllCrimesComplaint');
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching crime entries:', error);
    }
  };

  return (
    <div className="crime-registered-container">
      <h2>Registered Crimes</h2>
      <div className="crime-entries">
        {entries.map((entry, index) => (
          <div key={index} className="crime-entry">
            <p><strong>ID:</strong> {entry.id}</p>
            <p><strong>Full Name:</strong> {entry.fullName}</p>
            <p><strong>Contact:</strong> {entry.contact}</p>
            <p><strong>Incident Location:</strong> {entry.incidentLocation}</p>
            <p><strong>Crime Details:</strong> {entry.crimeDetails}</p>
            <p><strong>Date:</strong> {entry.date}</p>
            <p><strong>Witnesses:</strong> {entry.witnesses.join(', ')}</p>
            <p><strong>Suspect Description:</strong> {entry.suspectDescription}</p>
            <p><strong>Evidence:</strong> {entry.evidence}</p>
            {/* <Link to={`/solvedcases/${entry.id}`}>
              <button className="solved-button">Mark as Solved</button>
            </Link>  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrimeRegistered;