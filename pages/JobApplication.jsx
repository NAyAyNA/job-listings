import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function JobApplication() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const job = state?.job;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const application = { name, email, jobTitle: job?.title };

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', application);
      if (response.status === 201) {
        alert('Application submitted successfully!');
        navigate('/success');
      }
    } catch (error) {
      alert('Failed to submit application.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Apply for {job?.title}</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}
