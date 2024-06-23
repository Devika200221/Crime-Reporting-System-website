// import React, { useState, useEffect } from 'react';
// import './Crime.css';
// import CrimeList from './CrimeList';
// import axios from 'axios';

// const Crime = () => {
//   const [formData, setFormData] = useState({
//     id: '',
//     fullName: '',
//     contact: '',
//     incidentLocation: '',
//     crimeDetails: '',
//     date: '',
//     witnesses: [''],
//     suspectDescription: '',
//     evidence: ''
//   });

//   const [entries, setEntries] = useState(() => {
//     const savedEntries = localStorage.getItem('crimeEntries');
//     return savedEntries ? JSON.parse(savedEntries) : [];
//   });

//   const [selectedEntry, setSelectedEntry] = useState(null);

//   useEffect(() => {
//     localStorage.setItem('crimeEntries', JSON.stringify(entries));
//   }, [entries]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleWitnessChange = (index, value) => {
//     const newWitnesses = formData.witnesses.map((witness, i) => i === index ? value : witness);
//     setFormData({
//       ...formData,
//       witnesses: newWitnesses
//     });
//   };

//   const addWitness = () => {
//     setFormData({
//       ...formData,
//       witnesses: [...formData.witnesses, '']
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8083/crimes/saveCrimesComplaint', {
//         ...formData,
//         Date: new Date(formData.date).toISOString(), // Ensure date is in correct format
//       });
//       if (response.status === 200) {
//         setEntries([...entries, formData]);
//         setFormData({
//           id: '',
//           fullName: '',
//           contact: '',
//           incidentLocation: '',
//           crimeDetails: '',
//           date: '',
//           witnesses: [''],
//           suspectDescription: '',
//           evidence: ''
//         });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleEntryClick = (entry) => {
//     setSelectedEntry(entry);
//   };

//   const handleDeleteEntry = (entryToDelete) => {
//     const updatedEntries = entries.filter(entry => entry !== entryToDelete);
//     setEntries(updatedEntries);
//   };

//   return (
//     <div className="crime-entry-container">
//       <div className="crime-entry-form">
//         <h2>Crime Entry Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="id">ID:</label>
//             <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="fullName">Full Name:</label>
//             <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contact">Contact:</label>
//             <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="incidentLocation">Incident Location:</label>
//             <input type="text" id="incidentLocation" name="incidentLocation" value={formData.incidentLocation} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="crimeDetails">Crime Details:</label>
//             <textarea id="crimeDetails" name="crimeDetails" value={formData.crimeDetails} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="date">Date:</label>
//             <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Witnesses:</label>
//             {formData.witnesses.map((witness, index) => (
//               <input key={index} type="text" value={witness} onChange={(e) => handleWitnessChange(index, e.target.value)} required />
//             ))}
//             <button type="button" onClick={addWitness}>Add Witness</button>
//           </div>
//           <div className="form-group">
//             <label htmlFor="suspectDescription">Suspect Description:</label>
//             <textarea id="suspectDescription" name="suspectDescription" value={formData.suspectDescription} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="evidence">Evidence:</label>
//             <textarea id="evidence" name="evidence" value={formData.evidence} onChange={handleChange} required />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <div className="crime-entry-list">
//         <h2>Crime Entry List</h2>
//         <ul>
//           {entries.map((entry, index) => (
//             <li key={index}>
//               <span onClick={() => handleEntryClick(entry)}>
//                 {entry.fullName} - {entry.incidentLocation}
//               </span>
//               <button className="delete-button" onClick={() => handleDeleteEntry(entry)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {selectedEntry && (
//         <CrimeList entry={selectedEntry} onClose={() => setSelectedEntry(null)} />
//       )}
//     </div>
//   );
// };

// export default Crime;




// crime.js
// import React, { useState, useEffect } from 'react';
// import './Crime.css';
// import CrimeList from './CrimeList';
// import axios from 'axios';

// const Crime = () => {
//   const [formData, setFormData] = useState({
//     id: '',
//     fullName: '',
//     contact: '',
//     incidentLocation: '',
//     crimeDetails: '',
//     date: '',
//     witnesses: [''],
//     suspectDescription: '',
//     evidence: ''
//   });

//   const [entries, setEntries] = useState(() => {
//     const savedEntries = localStorage.getItem('crimeEntries');
//     return savedEntries ? JSON.parse(savedEntries) : [];
//   });

//   const [selectedEntry, setSelectedEntry] = useState(null);

//   useEffect(() => {
//     localStorage.setItem('crimeEntries', JSON.stringify(entries));
//   }, [entries]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleWitnessChange = (index, value) => {
//     const newWitnesses = formData.witnesses.map((witness, i) => i === index ? value : witness);
//     setFormData({
//       ...formData,
//       witnesses: newWitnesses
//     });
//   };

//   const addWitness = () => {
//     setFormData({
//       ...formData,
//       witnesses: [...formData.witnesses, '']
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formattedData = {
//         ...formData,
//         date: formData.date + "T00:00:00", 
//       };

//       const response = await axios.post('http://localhost:8083/crimes/saveCrimesComplaint', formattedData, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       if (response.status === 200) {
//         setEntries([...entries, formData]);
//         setFormData({
//           id: '',
//           fullName: '',
//           contact: '',
//           incidentLocation: '',
//           crimeDetails: '',
//           date: '',
//           witnesses: [''],
//           suspectDescription: '',
//           evidence: ''
//         });
//       }
//     } catch (error) {
//       console.error('Error submitting crime entry:', error);
//     }
//   };

//   const handleEntryClick = (entry) => {
//     setSelectedEntry(entry);
//   };

//   const handleDeleteEntry = (entryToDelete) => {
//     const updatedEntries = entries.filter(entry => entry !== entryToDelete);
//     setEntries(updatedEntries);
//   };

//   return (
//     <div className="crime-entry-container">
//       <div className="crime-entry-form">
//         <h2>Crime Entry Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="id">ID:</label>
//             <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="fullName">Full Name:</label>
//             <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contact">Contact:</label>
//             <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="incidentLocation">Incident Location:</label>
//             <input type="text" id="incidentLocation" name="incidentLocation" value={formData.incidentLocation} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="crimeDetails">Crime Details:</label>
//             <textarea id="crimeDetails" name="crimeDetails" value={formData.crimeDetails} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="date">Date:</label>
//             <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Witnesses:</label>
//             {formData.witnesses.map((witness, index) => (
//               <input key={index} type="text" value={witness} onChange={(e) => handleWitnessChange(index, e.target.value)} required />
//             ))}
//             <button type="button" onClick={addWitness}>Add Witness</button>
//           </div>
//           <div className="form-group">
//             <label htmlFor="suspectDescription">Suspect Description:</label>
//             <textarea id="suspectDescription" name="suspectDescription" value={formData.suspectDescription} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="evidence">Evidence:</label>
//             <textarea id="evidence" name="evidence" value={formData.evidence} onChange={handleChange} required />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <div className="crime-entry-list">
//         <h2>Crime Entry List</h2>
//         <ul>
//           {entries.map((entry, index) => (
//             <li key={index}>
//               <span onClick={() => handleEntryClick(entry)}>
//                 {entry.fullName} - {entry.incidentLocation}
//               </span>
//               <button className="delete-button" onClick={() => handleDeleteEntry(entry)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {selectedEntry && (
//         <CrimeList entry={selectedEntry} onClose={() => setSelectedEntry(null)} />
//       )}
//     </div>
//   );
// };

// export default Crime;








// import React, { useState, useEffect } from 'react';
// import './Crime.css';
// import CrimeList from './CrimeList';
// import CrimeRegistered from './CrimeRegistered';
// import axios from 'axios';

// const Crime = () => {
//   const [formData, setFormData] = useState({
//     id: '',
//     fullName: '',
//     contact: '',
//     incidentLocation: '',
//     crimeDetails: '',
//     date: '',
//     witnesses: [''],
//     suspectDescription: '',
//     evidence: ''
//   });

//   const [entries, setEntries] = useState(() => {
//     const savedEntries = localStorage.getItem('crimeEntries');
//     return savedEntries ? JSON.parse(savedEntries) : [];
//   });

//   const [selectedEntry, setSelectedEntry] = useState(null);
//   const [selectedEntryToUpdate, setSelectedEntryToUpdate] = useState(null);

//   useEffect(() => {
//     localStorage.setItem('crimeEntries', JSON.stringify(entries));
//   }, [entries]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleWitnessChange = (index, value) => {
//     const newWitnesses = formData.witnesses.map((witness, i) => i === index ? value : witness);
//     setFormData({
//       ...formData,
//       witnesses: newWitnesses
//     });
//   };

//   const addWitness = () => {
//     setFormData({
//       ...formData,
//       witnesses: [...formData.witnesses, '']
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formattedData = {
//         ...formData,
//         date: formData.date + "T00:00:00", 
//       };

//       const response = await axios.post('http://localhost:8083/crimes/saveCrimesComplaint', formattedData, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       if (response.status === 200) {
//         setEntries([...entries, formData]);
//         setFormData({
//           id: '',
//           fullName: '',
//           contact: '',
//           incidentLocation: '',
//           crimeDetails: '',
//           date: '',
//           witnesses: [''],
//           suspectDescription: '',
//           evidence: ''
//         });
//       }
//     } catch (error) {
//       console.error('Error submitting crime entry:', error);
//     }
//   };

//   const handleEntryClick = (entry) => {
//     setSelectedEntry(entry);
//   };

//   const handleDeleteEntry = (entryToDelete) => {
//     const updatedEntries = entries.filter(entry => entry !== entryToDelete);
//     setEntries(updatedEntries);
//   };

//   const handleEditEntry = (entryToEdit) => {
//     setSelectedEntryToUpdate(entryToEdit);
//     setFormData(entryToEdit);
//   };

//   const handleUpdateEntry = async (e) => {
//     e.preventDefault();
//     try {
//       const formattedData = {
//         ...formData,
//         date: formData.date + "T00:00:00", 
//       };

//       const response = await axios.put(`http://localhost:8083/crimes/updateCrimesComplaint/${formData.id}`, formattedData, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       if (response.status === 200) {
//         const updatedEntries = entries.map(entry => 
//           entry.id === formData.id ? formattedData : entry
//         );
//         setEntries(updatedEntries);
//         setSelectedEntryToUpdate(null);
//         setFormData({
//           id: '',
//           fullName: '',
//           contact: '',
//           incidentLocation: '',
//           crimeDetails: '',
//           date: '',
//           witnesses: [''],
//           suspectDescription: '',
//           evidence: ''
//         });
//       }
//     } catch (error) {
//       console.error('Error updating crime entry:', error);
//     }
//   };

//   return (
    
//     <div className="crime-container">
//       <form onSubmit={selectedEntryToUpdate ? handleUpdateEntry : handleSubmit}>
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           placeholder="Full Name"
//           required
//         />
//         <input
//           type="text"
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
//           placeholder="Contact"
//           required
//         />
//         <input
//           type="text"
//           name="incidentLocation"
//           value={formData.incidentLocation}
//           onChange={handleChange}
//           placeholder="Incident Location"
//           required
//         />
//         <textarea
//           name="crimeDetails"
//           value={formData.crimeDetails}
//           onChange={handleChange}
//           placeholder="Crime Details"
//           required
//         />
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           required
//         />
//         {formData.witnesses.map((witness, index) => (
//           <input
//             key={index}
//             type="text"
//             value={witness}
//             onChange={(e) => handleWitnessChange(index, e.target.value)}
//             placeholder="Witness"
//           />
//         ))}
//         <button type="button" onClick={addWitness}>Add Witness</button>
//         <textarea
//           name="suspectDescription"
//           value={formData.suspectDescription}
//           onChange={handleChange}
//           placeholder="Suspect Description"
//         />
//         <input
//           type="text"
//           name="evidence"
//           value={formData.evidence}
//           onChange={handleChange}
//           placeholder="Evidence"
//         />
//         <button type="submit">{selectedEntryToUpdate ? "Update" : "Submit"}</button>
//       </form>
//       <CrimeList
//         entries={entries}
//         onEntryClick={handleEntryClick}
//         onDeleteEntry={handleDeleteEntry}
//         onEditEntry={handleEditEntry}
//       />
//       {selectedEntry && <CrimeRegistered entry={selectedEntry} />}
//     </div>
//   );
// };

// export default Crime;







import React, { useState, useEffect } from 'react';
import './Crime.css';
import CrimeList from './CrimeList';
import CrimeRegistered from './CrimeRegistered';
import axios from 'axios';

const Crime = () => {
  const [formData, setFormData] = useState({
    id: '',
    fullName: '',
    contact: '',
    incidentLocation: '',
    crimeDetails: '',
    date: '',
    witnesses: [''],
    suspectDescription: '',
    evidence: ''
  });

  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('crimeEntries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  const [selectedEntry, setSelectedEntry] = useState(null);
  const [selectedEntryToUpdate, setSelectedEntryToUpdate] = useState(null);

  useEffect(() => {
    localStorage.setItem('crimeEntries', JSON.stringify(entries));
  }, [entries]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleWitnessChange = (index, value) => {
    const newWitnesses = formData.witnesses.map((witness, i) => i === index ? value : witness);
    setFormData({
      ...formData,
      witnesses: newWitnesses
    });
  };

  const addWitness = () => {
    setFormData({
      ...formData,
      witnesses: [...formData.witnesses, '']
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...formData,
        date: formData.date + "T00:00:00", 
      };

      const response = await axios.post('http://localhost:8083/crimes/saveCrimesComplaint', formattedData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        setEntries([...entries, formData]);
        setFormData({
          id: '',
          fullName: '',
          contact: '',
          incidentLocation: '',
          crimeDetails: '',
          date: '',
          witnesses: [''],
          suspectDescription: '',
          evidence: ''
        });
      }
    } catch (error) {
      console.error('Error submitting crime entry:', error);
    }
  };

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  const handleDeleteEntry = async (entryToDelete) => {
    try {
      const response = await axios.delete(`http://localhost:8083/crimes/deleteCrimesComplaint/${entryToDelete.id}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        const updatedEntries = entries.filter(entry => entry.id !== entryToDelete.id);
        setEntries(updatedEntries);
        setSelectedEntry(null);
        if (selectedEntryToUpdate && selectedEntryToUpdate.id === entryToDelete.id) {
          setSelectedEntryToUpdate(null);
          setFormData({
            id: '',
            fullName: '',
            contact: '',
            incidentLocation: '',
            crimeDetails: '',
            date: '',
            witnesses: [''],
            suspectDescription: '',
            evidence: ''
          });
        }
      }
    } catch (error) {
      console.error('Error deleting crime entry:', error);
    }
  };

  const handleEditEntry = (entryToEdit) => {
    setSelectedEntryToUpdate(entryToEdit);
    setFormData(entryToEdit);
  };

  const handleUpdateEntry = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...formData,
        date: formData.date + "T00:00:00", 
      };

      const response = await axios.put(`http://localhost:8083/crimes/updateCrimesComplaint/${formData.id}`, formattedData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        const updatedEntries = entries.map(entry => 
          entry.id === formData.id ? formattedData : entry
        );
        setEntries(updatedEntries);
        setSelectedEntryToUpdate(null);
        setFormData({
          id: '',
          fullName: '',
          contact: '',
          incidentLocation: '',
          crimeDetails: '',
          date: '',
          witnesses: [''],
          suspectDescription: '',
          evidence: ''
        });
      }
    } catch (error) {
      console.error('Error updating crime entry:', error);
    }
  };

  return (
    <div className="crime-container">
      <form onSubmit={selectedEntryToUpdate ? handleUpdateEntry : handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact"
          required
        />
        <input
          type="text"
          name="incidentLocation"
          value={formData.incidentLocation}
          onChange={handleChange}
          placeholder="Incident Location"
          required
        />
        <textarea
          name="crimeDetails"
          value={formData.crimeDetails}
          onChange={handleChange}
          placeholder="Crime Details"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        {formData.witnesses.map((witness, index) => (
          <input
            key={index}
            type="text"
            value={witness}
            onChange={(e) => handleWitnessChange(index, e.target.value)}
            placeholder="Witness"
          />
        ))}
        <button type="button" onClick={addWitness}>Add Witness</button>
        <textarea
          name="suspectDescription"
          value={formData.suspectDescription}
          onChange={handleChange}
          placeholder="Suspect Description"
        />
        <input
          type="text"
          name="evidence"
          value={formData.evidence}
          onChange={handleChange}
          placeholder="Evidence"
        />
        <button type="submit">{selectedEntryToUpdate ? "Update" : "Submit"}</button>
      </form>
      <CrimeList
        entries={entries}
        onEntryClick={handleEntryClick}
        onDeleteEntry={handleDeleteEntry}
        onEditEntry={handleEditEntry}
      />
      {selectedEntry && <CrimeRegistered entry={selectedEntry} />}
    </div>
  );
};

export default Crime;
