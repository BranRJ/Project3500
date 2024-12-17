const { Client } = require('pg');

// PostgreSQL connection configuration
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'brandon',
  password: 'faceofspace',
  database: 'sesmag',
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
