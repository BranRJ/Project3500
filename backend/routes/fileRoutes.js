const express = require('express');
const multer = require('multer');
const { processPDF } = require('../controllers/fileController');

const router = express.Router();

// Multer setup
const upload = multer({ dest: 'uploads/' });

// Route to handle PDF upload
router.post('/upload', upload.single('file'), processPDF);

module.exports = router;
