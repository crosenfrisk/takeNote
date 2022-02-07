const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const { notes } = require('./db/db.json');

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));

// Use apiRoutes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.get('.db.json', (req, res) => {
  res.send("testing hello!");
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});