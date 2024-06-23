import React, { useState } from 'react';
import './Missing.css';

const Missing = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    age: '',
    date: '',
    phoneNumber: '',
    location: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="form-container">
      <h2>Missing Person Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input 
            type="text" 
            name="id" 
            value={formData.id} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Age:
          <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Date:
          <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Phone Number:
          <input 
            type="tel" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Location:
          <input 
            type="text" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Photo:
          <input 
            type="file" 
            name="photo" 
            accept="image/*" 
            onChange={handleChange} 
            required 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Missing;
