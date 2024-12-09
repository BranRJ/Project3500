const fs = require('fs');
const path = require('path');

exports.processPDF = async (req, res) => {
    try {
        const filePath = req.file.path;
        const fileName = req.file.originalname;

        // TODO: Process PDF using AI API

        res.status(200).json({
            message: `File ${fileName} uploaded and is being processed.`,
        });

        // Remove the file after processing
        fs.unlinkSync(filePath);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
