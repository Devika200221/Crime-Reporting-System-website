import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const AdminRegister = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!fullName) {
      errors.fullName = 'Full name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!contactNumber) {
      errors.contactNumber = 'Contact number is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const adminData = {
        fullName: fullName,
        email: email,
        password: password,
        contactNumber: contactNumber
      };

      axios.post('http://localhost:8083/adminRegister/addAdminRegister', adminData)
        .then((response) => {
          console.log("SUCCESSFULLY REGISTERED");
          window.location.href = "/adminlogin"; // Redirect after successful registration
        })
        .catch((error) => {
          console.log("ERROR IN REGISTERING ", error);
        });
    }
  };

  return (
    <div className='container'>
      <h1>Admin Registration Form</h1>
      <div className="login-container">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <p>{errors.fullName}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            {errors.contactNumber && <p>{errors.contactNumber}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
        <p> Have an account? <a href="/adminlogin">Login here</a></p>
      </div>
    </div>
  );
};

export default AdminRegister;
