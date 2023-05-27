import React, { useState } from 'react';
import classes from "./CreateStudy.module.scss";
import { FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

const Login = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [loginError, setLoginError] = useState('');
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform validation and login logic here
    if (username === '' || pin === '') {
      setLoginError('Please enter both username and PIN.');
    } else {
      // Send login request to server or perform local validation
      // Example logic to check if username and pin match a user in the database
      // You can replace this with your own authentication logic
      fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, pin }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Successful login
            // Redirect to the authenticated page or perform other actions
            // return <Redirect to="/Dashboard" />;
                 history.push('/Dashboard');

          } else {
            // Failed login
            setLoginError('Invalid username or PIN.');
          }
        })
        .catch((error) => {
          // Handle login error
          console.error('Error:', error);
          setLoginError('An error occurred during login.');
        });
    }
  };

  return (
    <div className={classes.createstudy}>
      <div className={classes.createstudy__content}>
        <div className={classes.iconContainer}>
          <FaUser className={classes.icon} />
        </div>
        <h2>Welcome</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="pin">PIN:</label>
          <input
            type="password"
            id="pin"
            value={pin}
            onChange={handlePinChange}
          />
        </div>
        
        <div className={classes.buttonContainer}>
          <button onClick={handleLogin}>Login</button>
        </div>
        {loginError && <p>{loginError}</p>}
      </div>
    </div>
  );
};

export default Login;
