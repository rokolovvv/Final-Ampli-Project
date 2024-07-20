import React, { useState } from 'react';
import Select from 'react-select';
import airports from './airports.json';
import './App.css';

const FlightSearchForm = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!from || !to) {
      alert('Будь ласка, виберіть аеропорти відправлення та прибуття');
      return;
    }

    const formatDate = (date) => {
      const d = new Date(date);
      return d.toISOString().split('T')[0];
    };

    const formattedDepartDate = formatDate(departDate);
    const formattedReturnDate = returnDate ? formatDate(returnDate) : '';

    let skyscannerUrl = `https://www.skyscanner.net/transport/flights/${from.iata}/${to.iata}/${formattedDepartDate}/`;
    if (formattedReturnDate) {
      skyscannerUrl += `${formattedReturnDate}/`;
    }

    window.location.href = skyscannerUrl;
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <div>
        <label>Arrival from:</label>
        <Select
          options={airports}
          className='select'
          getOptionLabel={(option) => `${option.name} (${option.iata})`}
          getOptionValue={(option) => option.iata}
          onChange={setFrom}
          value={from}
          isClearable
          placeholder="Choose airport"
        />
      </div>
      <div>
        <label>Departure to:</label>
        <Select
          options={airports}
          className='select'
          getOptionLabel={(option) => `${option.name} (${option.iata})`}
          getOptionValue={(option) => option.iata}
          onChange={setTo}
          value={to}
          isClearable
          placeholder="Choose airport"
        />
      </div>
      <div>
        <label>Departure Date:</label>
        <input
          type="date"
          value={departDate}
          onChange={(e) => setDepartDate(e.target.value)}
          required
        />
      </div>
      <div className='date'>
        <label>Return Date:</label>
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>
      <button className='btn' variant="contained" type="submit">SEARCH</button>
    </form>
  );
};

export default FlightSearchForm;
