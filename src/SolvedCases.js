// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom'; // Import useParams for ID
// import './SolvedCases.css'; // Style the page

// const SolvedCases = () => {
//   const { id } = useParams(); // Get the ID from the URL
//   const [entry, setEntry] = useState(null);

//   useEffect(() => {
//     fetchEntry();
//   }, [id]); // Fetch entry only when ID changes

//   const fetchEntry = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8083/crimes/findCrimeComplaintById/${id}`);
//       setEntry(response.data);
//     } catch (error) {
//       console.error('Error fetching crime entry:', error);
//     }
//   };

//   return (
//     <div className="solved-cases-container">
//       <h2>Solved Case Details</h2>
//       {entry ? (
//         <div className="crime-entry">
//           <p><strong>ID:</strong> {entry.id}</p>
//           <p><strong>Full Name:</strong> {entry.fullName}</p>
//           <p><strong>Contact:</strong> {entry.contact}</p>
//           <p><strong>Incident Location:</strong> {entry.incidentLocation}</p>
//           <p><strong>Crime Details:</strong> {entry.crimeDetails}</p>
//           <p><strong>Date:</strong> {entry.date}</p>
//           <p><strong>Witnesses:</strong> {entry.witnesses.join(', ')}</p>
//           <p><strong>Suspect Description:</strong> {entry.suspectDescription}</p>
//           <p><strong>Evidence:</strong> {entry.evidence}</p>
//           {/* Add fields for solved case details */}
//           <p><strong>Solved Date:</strong> {entry.solvedDate || 'Not yet solved'}</p>
//           <p><strong>Solution Summary:</strong> {entry.solutionSummary || 'Not provided'}</p>
//           {/* Add more fields as needed */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default SolvedCases;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CrimeRegistered.css';
import { Link } from 'react-router-dom';

const SolvedCases = () => {
  const [entries, setEntries] = useState({});
  

  useEffect(() => {
    fetchEntry();
  }, []);

  const fetchEntry = async () => {
    try {
      const response = await axios.get(`http://localhost:8083/crimes/findAllCrimesComplaint`);
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching crime entry:', error);
    }
  };

  return (
    <div className="crime-registered-container">
      <h2>Solved Case</h2>
      <div className="crime-entries">
        <p><strong>ID:</strong> {entries.id}</p>
        <p><strong>Full Name:</strong> {entries.fullName}</p>
        <p><strong>Contact:</strong> {entries.contact}</p>
        <p><strong>Incident Location:</strong> {entries.incidentLocation}</p>
        <p><strong>Crime Details:</strong> {entries.crimeDetails}</p>
        <p><strong>Date:</strong> {entries.date}</p>
        <p><strong>Witnesses:</strong> {entries.witnesses ? entries.witnesses.join(', ') : 'No witnesses'}</p>
        <p><strong>Suspect Description:</strong> {entries.suspectDescription}</p>
        <p><strong>Evidence:</strong> {entries.evidence}</p>
      </div>
    </div>
  );
};

export default SolvedCases; 