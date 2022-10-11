const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes =require('./routes/htmlRoutes');

// create a html 
const app = express();
const PORT =process.env.PORT || 3001;

// parse route middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/api, apiRoutes');
app.use('/', htmlRoutes);

// start the server on port

app.listen(PORT, () => console.log('Listening on PORT: ${PORT}'));
