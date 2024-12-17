// Save file metadata to database
const saveFileMetadata = async (filename) => {
    try {
        const query = 'INSERT INTO Files (filename) VALUES ($1) RETURNING *';
        const values = [filename];
        const res = await pool.query(query, values);
        return res.rows[0];
    } catch (err) {
        console.error('Error saving file metadata:', err);
    }
};

// Save chat history to database
const saveChatHistory = async (userMessage, aiResponse) => {
    try {
        const query = 'INSERT INTO ChatHistory (user_message, ai_response) VALUES ($1, $2) RETURNING *';
        const values = [userMessage, aiResponse];
        const res = await pool.query(query, values);
        return res.rows[0];
    } catch (err) {
        console.error('Error saving chat history:', err);
    }
};

module.exports = { saveFileMetadata, saveChatHistory };