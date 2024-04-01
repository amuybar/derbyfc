
import React, { useState } from 'react';
import './register.css'
import AppBar from '../../components/AppBar/AppBar';
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
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
    // Here you can add logic to submit the form data
    console.log(formData);
  };

  return (
    <><div className='Container'>
      <AppBar/>
    <div className='card'>
      <h2>Derby FC Membership Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required />
        </label>
        <br />
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
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required />
        </label>
        <br />
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default Register;
