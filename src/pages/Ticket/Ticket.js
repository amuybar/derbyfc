// src/TicketPurchase.js

import React, { useState } from 'react';
import './ticket.css'
import AppBar from '../../components/AppBar/AppBar';
const TicketPurchase = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    ticketType: 'standard',
    quantity: 1
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
    // Here you can add logic to process ticket purchase
    console.log(formData);
  };

  return (
    <div className='Container'><AppBar/>
    <div className='card'>
      <h2>Buy Matchday Ticket :Police Stadi</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input 
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Ticket Type:
          <select 
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
          >
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
          </select>
        </label>
        <br />
        <label>
          Quantity:
          <input 
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </label>
        <br />
        <button type="submit">Buy Ticket</button>
      </form>
    </div>
    </div>
  );
};

export default TicketPurchase;
