/**
 * Created by arunatebel on 7/28/17.
 */

const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./todo/routes/TodoRoutes');
const noteRoutes = require('./note/routes/NoteRoutes');
const app = express();
const mongoose = require('mongoose');
require('./todo/models/TodoModel');
require('./note/models/NoteModel');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tibznotes');

todoRoutes(app);
noteRoutes(app);

app.listen(3002);


console.log('Server started on: ' + 3002);

//TODO: Refactor below code
// app.get('/', (req, res) => {
//     db.collection('notes').find().toArray()
//         .then((result) => {
//             return res.json(result);
//         })
//         .catch((error) => {
//             return res.json(error);
//         });
// });
//
// app.get('/home', (req, res) => {
//     db.collection('notes').find().toArray(function (err, results) {
//         if (err) {
//             return res.json(err);
//         }
//         res.render('index.ejs', {notes: results});
//     });
// });
//
// app.post('/notes', (req, res) => {
//     db.collection('notes').insertOne(req.body)
//         .then((result) => {
//             return res.json(result);
//         })
//         .catch((error) => {
//             return res.json(error);
//         });
// });
//
// app.put('/notes', (req, res) => {
//     const note = req.body;
//     db.collection('notes').updateOne({"_id": ObjectID(note._id)}, {note: note.note, title: note.title})
//         .then((result) => {
//             return res.json(result);
//         })
//         .catch((error) => {
//             return res.json(error);
//         });
// });
//
// app.delete('/notes/:id', (req, res) => {
//     db.collection('notes').deleteOne({"_id": ObjectID(req.params.id)})
//         .then((result) => {
//             return res.json(result);
//         })
//         .catch((error) => {
//             return res.json(error);
//         });
// });
//
// // mlab => mongodb://root:pass@ds127173.mlab.com:27173/tibznotes
// // local => mongodb://localhost:27017/tibznotes
// // docker => mongodb://mongo/tibznotes
//
// MongoClient.connect('mongodb://mongo/tibznotes', (err, database) => {
//     if (err) {
//         console.log(err);
//     } else {
//         db = database;
//     }
//     app.listen(3001, () => {
//         console.log('listening on 3001')
//     })
// });