const { createPool } = require('mysql');
const fs = require('fs');

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'AdSte10000d',
    connectionLimit: 10
});

pool.query('SELECT * FROM fudbaldb.igrac', (err, res) => {
    if (err) {
        console.error('Error querying database:', err);
        return;
    }

    console.log('Query result:', res);

    // Convert the result to JSON
    const jsonData = JSON.stringify(res);

    // Write the JSON data to a file
    fs.writeFile('result.json', jsonData, (err) => {
        if (err) {
            console.error('Error writing JSON to file:', err);
            return;
        }
        console.log('JSON data has been written to result.json');
    });
});

