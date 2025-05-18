const express = require('express');
const imageRoutes = require('./routes/image');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Log all GET and POST requests
app.use((req, res, next) => {
    if (req.method === 'GET' || req.method === 'POST') {
        console.log(`${req.method} ${req.url}`);
        if (req.method === 'POST') {
            console.log('Request body:', req.body);
        }
    }
    next();
});

app.use('/api/images', imageRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});