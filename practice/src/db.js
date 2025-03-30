const { Pool } = require('pg');

require('dotenv').config();

const connectionString = process.env.DATABASE_URL || process.argv[2];

if (!connectionString) {
    console.error('Error: No database connection string provided.');
    process.exit(1);
}

const pool = new Pool({
    connectionString,
});

pool.connect()
    .then(() => console.log('Connected to the PostgreSQL database successfully.'))
    .catch((err) => {
        console.error('Error connecting to the database:', err.message);
        process.exit(1);
    });

module.exports = pool;