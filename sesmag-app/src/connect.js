// Function to test database connection
const testConnection = async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Database connected:', res.rows[0]);
    } catch (err) {
        console.error('Database connection error:', err);
    }
};

testConnection();