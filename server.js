const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes =require('./routes/htmlRoutes');

// Create a html 
const app = express();
const PORT =process.env.PORT || 3001;

// Parse URL encoded & JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Host public folder
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on port

app.listen(PORT, () => {
    console.log(`API server now on PORT: ${PORT}`);
});
