// // import React, { useEffect, useState } from 'react';
// // import './CrimeList.css';
// // import axios from 'axios';

// // const CrimeList = ({ entry, onClose }) => {
// //   const [entryDetails, setEntryDetails] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchEntryDetails = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8083/crimes/findById/${entry.id}`);
// //         setEntryDetails(response.data);
// //       } catch (error) {
// //         console.error('Error fetching entry details:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchEntryDetails();
// //   }, [entry.id]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (!entryDetails) {
// //     return <div>Error loading entry details.</div>;
// //   }

// //   return (
// //     <div className="crime-entry-detail">
// //       <button className="close-button" onClick={onClose}>Close</button>
// //       <h3>Crime Entry Details</h3>
// //       <p><strong>ID:</strong> {entryDetails.id}</p>
// //       <p><strong>Full Name:</strong> {entryDetails.fullName}</p>
// //       <p><strong>Contact:</strong> {entryDetails.contact}</p>
// //       <p><strong>Incident Location:</strong> {entryDetails.incidentLocation}</p>
// //       <p><strong>Crime Details:</strong> {entryDetails.crimeDetails}</p>
// //       <p><strong>Date:</strong> {new Date(entryDetails.date).toLocaleString()}</p>
// //       <p><strong>Witnesses:</strong> {entryDetails.witnesses.join(', ')}</p>
// //       <p><strong>Suspect Description:</strong> {entryDetails.suspectDescription}</p>
// //       <p><strong>Evidence:</strong> {entryDetails.evidence}</p>
// //     </div>
// //   );
// // };

// // export default CrimeList;

// // CrimeList.js
// // import React from 'react';

// // const CrimeList = ({ entry, onClose }) => {
// //   return (
// //     <div className="crime-list-details">
// //       <h3>Crime Details</h3>
// //       <p><strong>ID:</strong> {entry.id}</p>
// //       <p><strong>Full Name:</strong> {entry.fullName}</p>
// //       <p><strong>Contact:</strong> {entry.contact}</p>
// //       <p><strong>Incident Location:</strong> {entry.incidentLocation}</p>
// //       <p><strong>Crime Details:</strong> {entry.crimeDetails}</p>
// //       <p><strong>Date:</strong> {entry.date}</p>
// //       <p><strong>Witnesses:</strong> {entry.witnesses.join(', ')}</p>
// //       <p><strong>Suspect Description:</strong> {entry.suspectDescription}</p>
// //       <p><strong>Evidence:</strong> {entry.evidence}</p>
// //       <button onClick={onClose}>Close</button>
// //     </div>
// //   );
// // };

// // export default CrimeList;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const CrimeList = () => {
//   const [crimes, setCrimes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCrimes = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/crimes/findAllCrimesComplaint');
//         setCrimes(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchCrimes();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (crimes.length === 0) {
//     return <div>No crimes reported.</div>;
//   }

//   return (
//     <div>
//       <h2>Crime List</h2>
//       <ul>
//         {crimes.map(crime => (
//           <li key={crime.id}>
//             <Link to={`/crimes/${crime.id}`}>{crime.fullName}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CrimeList;
















// import React, { useEffect, useState } from 'react';
// import './CrimeList.css';
// import axios from 'axios';

// const CrimeList = ({ entry, onClose }) => {
//   const [entryDetails, setEntryDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEntryDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8083/crimes/findById/${entry.id}`);
//         setEntryDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching entry details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEntryDetails();
//   }, [entry.id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!entryDetails) {
//     return <div>Error loading entry details.</div>;
//   }

//   return (
//     <div className="crime-entry-detail">
//       <button className="close-button" onClick={onClose}>Close</button>
//       <h3>Crime Entry Details</h3>
//       <p><strong>ID:</strong> {entryDetails.id}</p>
//       <p><strong>Full Name:</strong> {entryDetails.fullName}</p>
//       <p><strong>Contact:</strong> {entryDetails.contact}</p>
//       <p><strong>Incident Location:</strong> {entryDetails.incidentLocation}</p>
//       <p><strong>Crime Details:</strong> {entryDetails.crimeDetails}</p>
//       <p><strong>Date:</strong> {new Date(entryDetails.date).toLocaleString()}</p>
//       <p><strong>Witnesses:</strong> {entryDetails.witnesses.join(', ')}</p>
//       <p><strong>Suspect Description:</strong> {entryDetails.suspectDescription}</p>
//       <p><strong>Evidence:</strong> {entryDetails.evidence}</p>
//     </div>
//   );
// };

// export default CrimeList;




// import React, { useEffect, useState } from 'react';
// import './CrimeList.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const CrimeList = () => {
//   const [crimes, setCrimes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCrimes = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/crimes/findAllCrimesComplaint');
//         setCrimes(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchCrimes();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (crimes.length === 0) {
//     return <div>No crimes reported.</div>;
//   }

//   return (
//     <div>
//       <h2>Crime List</h2>
//       <ul>
//         {crimes.map(crime => (
//           <li key={crime.id}>
//             <Link to={`/crimes/${crime.id}`}>{crime.fullName}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CrimeList;














import React from 'react';

const CrimeList = ({ entries, onEntryClick, onDeleteEntry, onEditEntry }) => {
  return (
    <div className="crime-list">
      <h2>Crime Entry List</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <span onClick={() => onEntryClick(entry)}>
              {entry.fullName} - {entry.incidentLocation}
            </span>
            <button className="edit-button" onClick={() => onEditEntry(entry)}>Edit</button>
            <button className="delete-button" onClick={() => onDeleteEntry(entry)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrimeList;
