// modified from zookeeper
// import "../../server";

// const path = require('path');
// const router = require('express').Router();

// app.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/notes.html'));
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../public/index.html'));
// });


// router.get('/api/db', (req, res) => {
//     let results = notes;
//     if (req.query) {
//       results = filterByQuery(req.query, results);
//     }
//     res.json(results);
//   });
  
// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
//   });

// module.exports = router;