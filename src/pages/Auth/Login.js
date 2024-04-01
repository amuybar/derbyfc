
import React, { useState } from 'react';
import './login.css'
import AppBar from '../../components/AppBar/AppBar';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to authenticate the user
    console.log(formData);
  };

  return (
    <div className='Container'><AppBar /><div className='card'>

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div></div>
  );
};

export default Login;
