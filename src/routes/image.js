const express = require('express');
const ImageController = require('../controllers/imageController');
const { DEFAULT_IMAGE_PATH } = require('../config/defaultPaths'); 
const router = express.Router();

const imageController = new ImageController(DEFAULT_IMAGE_PATH);

// Get image by number (as param or query)
router.get('/image/:number?', (req, res) => {
    const number = req.params.number || req.query.number;
    if (!number) {
        return res.status(400).json({ error: 'No image number provided.' });
    }
    const imagePath = imageController.getImagePath(number);
    if (imagePath) {
        res.status(200).json({ imagePath });
    } else {
        res.status(404).json({ error: 'Image not found' });
    }
});

// Get random image
router.get('/random', (req, res) => {
    const imagePath = imageController.getRandomImagePath();
    if (imagePath) {
        res.status(200).json({ imagePath });
    } else {
        res.status(404).json({ error: 'No images available' });
    }
});

// Get random image in range
router.get('/random-range', (req, res) => {
    const { start, end } = req.query;
    if (!start || !end) {
        return res.status(400).json({ error: 'Please provide start and end query parameters.' });
    }
    const imagePath = imageController.getRandomImagePathInRange(start, end);
    if (imagePath) {
        res.status(200).json({ imagePath });
    } else {
        res.status(404).json({ error: 'No image found in the given range.' });
    }
});

// List all image URLs
router.get('/list', (req, res) => {
    const images = imageController.listImageUrls();
    res.status(200).json({ images });
});

module.exports = router;