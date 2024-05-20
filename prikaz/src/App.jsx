import React, { useState, useEffect } from 'react';
import jsonData from '../../result.json'; // Assuming your JSON file is named data.json and is in the same directory

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // You can fetch data from an API here or set it directly if it's static
    setPlayers(jsonData);
  }, []);

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
    </div>
  );
}

export default App;
