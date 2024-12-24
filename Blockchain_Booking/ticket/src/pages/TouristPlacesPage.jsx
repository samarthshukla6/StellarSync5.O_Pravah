import React, { useState } from 'react';

// Mock ticket data
const tickets = [
  {
    id: 1,
    name: 'Ticket to Taj Mahal',
    price: 'Rs250',
    status: 'Confirmed',
    userEmail: 'tusharjaiswaltj01@gmail.com',
  },
  {
    id: 2,
    name: 'Ticket to Jaipur City Palace',
    price: '340',
    status: 'Confirmed',
    userEmail: 'sentrodsena@gmail.com',
  },
  {
    id: 3,
    name: 'Ticket to Qutub Minar',
    price: '430',
    status: 'Confirmed',
    userEmail: 'samarthshukla150604@gmail.com',
  },
  {
    id: 4,
    name: 'Ticket to Gateway of India',
    price: '645',
    status: 'Confirmed',
    userEmail: 'tusharjaiswaltj01@gmail.com',
  },
];

const TicketPage = () => {
  const [ticketData, setTicketData] = useState(tickets);

  // Function to cancel a ticket
  const cancelTicket = (ticketId, userEmail) => {
    // Update ticket status to 'Cancelled'
    const updatedTickets = ticketData.map((ticket) =>
      ticket.id === ticketId ? { ...ticket, status: 'Cancelled' } : ticket
    );
    setTicketData(updatedTickets);

    // Send email notification to user
    sendEmail(userEmail, ticketId);
  };

  // Function to send email
  const sendEmail = (email, ticketId) => {
    // You can replace this with an actual API call to send an email
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ticketId,
        recipientEmail: email,
        message: `Your ticket with ID ${ticketId} has been cancelled.`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Email sent to ${email}: ${data.message}`);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send email.');
      });
  };

  return (
    <div className="text-white min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-700 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Your Tickets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ticketData.map((ticket) => (
            <div key={ticket.id} className="bg-gray-900 border-white border-2 rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">{ticket.name}</h2>
                <p className="text-white mt-2">Price: {ticket.price}</p>
                <p className="text-white mt-2">Status: {ticket.status}</p>
                <button
                  onClick={() => cancelTicket(ticket.id, ticket.userEmail)}
                  className="mt-4 text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Cancel Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
