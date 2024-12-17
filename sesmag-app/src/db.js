const { Client } = require('pg');

// PostgreSQL connection configuration
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'brandon',     // Replace with your username
  password: 'faceofspace', // Replace with your password
  database: 'sesmag', // Replace with your database name
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database successfully!');
    
    // Example query
    const res = await client.query('SELECT NOW()');
    console.log('Server Time:', res.rows[0]);

    // Close the connection
    await client.end();
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

connectToDatabase();
