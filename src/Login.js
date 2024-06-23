// // login.js
// import React, { useState } from 'react';
// import './Login.css'; // Import external CSS file
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const errors = {};
//     if (!email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Email address is invalid';
//     }
//     if (!password) {
//       errors.password = 'Password is required';
//     } else if (!/(?=.*[A-Z])(?=.*\d).{6,}/.test(password)) {
//       errors.password = 'Password must be at least 6 characters with one capital character and numbers';
//     }
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       try {
//         const response = await axios.post('http://localhost:8083/login/addlogin', {
//           emailid: email, 
//           password: password,
//         });
//         if (response.status === 200) {
//           console.log('Login successful');
//           window.location.href = "/Crime"; 
//         }
//       } catch (error) {
//         if (error.response && error.response.data) {
//           setErrors({ email: error.response.data.message });
//         } else {
//           console.error('Error:', error);
//         }
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <h1>To Login oneself,<br /> please provide the Login data <br />HERE</h1>
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <p className="error-message">{errors.email}</p>}
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <p className="error-message">{errors.password}</p>}
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//         <p>Don't have an account? <a href="/registration">Register here</a></p>
//       </div>
//     </div>
//   );
// };

// export default Login;






// login.js
import React, { useState } from 'react';
import './Login.css'; // Import external CSS file
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (!/(?=.*[A-Z])(?=.*\d).{6,}/.test(password)) {
      errors.password = 'Password must be at least 6 characters with one capital character and numbers';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('http://localhost:8083/login/addlogin', {
          emailid: email, // Ensure the key matches the backend entity field
          password: password,
        });
        if (response.status === 200) {
          console.log('Login successful');
          // Use `window.location.replace` instead of `window.location.href`
          window.location.replace("/Crime"); // Redirect to the Crime page
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setErrors({ email: error.response.data.message });
        } else {
          console.error('Error:', error);
        }
      }
    }
  };

  return (
    <div className="container">
      <h1>To Login oneself,<br /> please provide the Login data <br />HERE</h1>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>Don't have an account? <a href="/registration">Register here</a></p>
      </div>
    </div>
  );
};

export default Login;