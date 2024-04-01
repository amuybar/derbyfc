// src/TicketProcessing.js

import React, { useState, useEffect } from 'react';

const TicketProcessing = () => {
  const [ticketDetails, setTicketDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching matchday and opponent details from backend
    const fetchMatchDetails = async () => {
      try {
        // Example API call to fetch match details
        const response = await fetch('https://api.example.com/match-details');
        if (response.ok) {
          const data = await response.json();
          setTicketDetails(data);
        } else {
          console.error('Failed to fetch match details');
        }
      } catch (error) {
        console.error('Error fetching match details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatchDetails();
  }, []);

  //dummy
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    ticketType: 'standard',
    quantity: 1,
    matchday: '2024-04-15',
    opponent: 'Opponent Team',
    amountPaid: 0
  });
  setFormData(prevState => ({
    ...prevState,
    ticketNumber: generateTicketNumber(),
    amountPaid: 8
  }));


  const generateTicketNumber = () => {
    // Generate a random 6-digit number
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handlePurchase = () => {
    // Calculate amount paid based on ticket type and quantity
    let amount = 0;
    switch (formData.ticketType) {
      case 'standard':
        amount = 20 * formData.quantity;
        break;
      case 'premium':
        amount = 30 * formData.quantity;
        break;
      case 'vip':
        amount = 50 * formData.quantity;
        break;
      default:
        amount = 0;
    }

    // Generate ticket number
    const ticketNumber = generateTicketNumber();

    // Update ticket details with ticket number
    setTicketDetails(prevDetails => ({
      ...prevDetails,
      ticketNumber: ticketNumber,
      amountPaid: amount
    }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Ticket Processing</h2>
      {ticketDetails && (
        <div>
          <p>Matchday: {ticketDetails.matchday}</p>
          <p>Opponent: {ticketDetails.opponent}</p>
        </div>
      )}
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Your form inputs here */}
        <button onClick={handlePurchase}>Process Ticket</button>
      </form>
      {ticketDetails && (
        <div>
          <h3>Ticket Information</h3>
          <p>Ticket Number: {ticketDetails.ticketNumber}</p>
          <p>Amount Paid: ${ticketDetails.amountPaid}</p>
        </div>
      )}
    </div>
  );
};

export default TicketProcessing;
