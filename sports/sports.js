const express = require('express');
const path = require('path');
const sportRouters = require('./routers/sportRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve your HTML, CSS, and assets from the "public" folder
app.use(express.static(path.join(__dirname, 'assets')));

// API Routes
app.use('/api/sports', sportRouters);

app.listen(PORT, () => {
  console.log(`SPYA server running on port ${PORT}`);
});