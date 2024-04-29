// import React, { useState } from 'react';
 
// function LoginData() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [error, setError] = useState('');
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!username.trim() || !password.trim()) {
//       setError('Please enter both username and password.');
//     } else {
//       setLoggedIn(true);
//       setError('');
//       alert('Logged in successfully!');
//     }
//   };
 
//   return (
// <div>
//       {loggedIn ? (
// <div>
// <h2>Welcome, {username}!</h2>
// <button onClick={() => setLoggedIn(false)}>Logout</button>
// </div>
//       ) : (
// <form onSubmit={handleSubmit}>
// <h2>Login</h2>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
// <div>
// <label htmlFor="username">Username:</label>
// <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
// </div>
// <div>
// <label htmlFor="password">Password:</label>
// <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
// </div>
// <button type="submit">Login</button>
// </form>
//       )}
// </div>
//   );
// }
 
// export default LoginData;
import React, { useState } from 'react';

const LoginEvent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    const usernameRegex = /^[a-zA-Z]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/.,><-]).{8,}$/;

    if (!usernameRegex.test(username)) {
      setError('Username must contain only alphabetical characters.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.'
      );
      return;
    }

    // If validation passes, you can proceed with login logic
    // For now, let's just alert success
    alert('Login successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginEvent;
