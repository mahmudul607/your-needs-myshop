import React, { useState } from 'react';

const PopupLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleIconClick = () => {
    setIsOpen(true);
  };

  const handleLogin = () => {
    // Perform login logic here
    console.log(`Username: ${username}, Password: ${password}`);
    // Reset the form
    setUsername('');
    setPassword('');
    // Close the popup
    setIsOpen(false);
  };

  return (
    <div>
      <div className="icon" onClick={handleIconClick}>
        {/* Your icon image here */}
      </div>
      {isOpen && (
        <div className="popup-container">
          <div className="popup">
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupLogin;
