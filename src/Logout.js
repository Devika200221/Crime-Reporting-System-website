  // LogoutPage.js

  import React from 'react';
  import './Logout.css'; // Import CSS file for styling

  const Logout = () => {
    // Handle logout action here
    const handleLogout = () => {
      // Perform logout actions here (e.g., clear session, remove tokens, etc.)
      // For the sake of simplicity, let's just alert a message
      alert('Logged out successfully!');
    };

    return (
      <div className="logout-container">
        <h1>Logout Page</h1>
        <p>Are you sure you want to logout?</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };

  export default Logout;
