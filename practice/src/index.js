const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello!');
});

// Configure the PostgreSQL connection
const pool = require('./db');

// API endpoint to fetch current date and time from the database
app.get('/datetime', async (req, res) => {
    try {
        console.log("date time route hit");
        const result = await pool.query('SELECT NOW() AS current_datetime');
        res.json({ datetime: result.rows[0].current_datetime });
    } catch (error) {
        console.error('Error fetching date and time:', error);
        res.status(500).send('Internal Server Error');
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});