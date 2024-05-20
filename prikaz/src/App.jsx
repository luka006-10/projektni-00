import React, { useState, useEffect } from 'react';
import jsonData from '../../result.json'; // Assuming your JSON file is named data.json and is in the same directory
import axios from 'axios';

function App() {
  const [players, setPlayers] = useState([]);
  const [formData, setFormData] = useState({
    ImeIgraca: '',
    DatumRodjenjaIgraca: '',
    VisinaIgraca: '',
    PozicijaIgraca: '',
    NacionalnostIgraca: '',
    TezinaIgraca: ''
  });

  useEffect(() => {
    // You can fetch data from an API here or set it directly if it's static
    setPlayers(jsonData);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/players', formData)
      .then(response => {
        console.log('Player added:', response.data);
        // Optionally, update the players list to include the new player
        setPlayers([...players, formData]);
      })
      .catch(error => {
        console.error('There was an error adding the player!', error);
      });
  };

  return (
    <div>
      <h1>Football Players</h1>
      <ul>
        {players.map(player => (
          <li key={player.Igrac_ID}>
            <p>Name: {player.ImeIgraca}</p>
            <p>Date of Birth: {player.DatumRodjenjaIgraca}</p>
            <p>Height: {player.VisinaIgraca} cm</p>
            <p>Position: {player.PozicijaIgraca}</p>
            <p>Nationality: {player.NacionalnostIgraca}</p>
            <p>Weight: {player.TezinaIgraca} kg</p>
          </li>
        ))}
      </ul>
      <h2>Add New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="ImeIgraca" value={formData.ImeIgraca} onChange={handleChange} required />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="DatumRodjenjaIgraca" value={formData.DatumRodjenjaIgraca} onChange={handleChange} required />
        </label>
        <label>
          Height:
          <input type="number" name="VisinaIgraca" value={formData.VisinaIgraca} onChange={handleChange} required />
        </label>
        <label>
          Position:
          <input type="text" name="PozicijaIgraca" value={formData.PozicijaIgraca} onChange={handleChange} required />
        </label>
        <label>
          Nationality:
          <input type="text" name="NacionalnostIgraca" value={formData.NacionalnostIgraca} onChange={handleChange} required />
        </label>
        <label>
          Weight:
          <input type="number" name="TezinaIgraca" value={formData.TezinaIgraca} onChange={handleChange} required />
        </label>
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default App;
