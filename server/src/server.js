/**
 * Created by arunatebel on 7/28/17.
 */

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const app = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    db.collection('notes').find().toArray()
        .then((result) => {
            return res.json(result);
        })
        .catch((error) => {
            return res.json(error);
        });
});

app.get('/home', (req, res) => {
    db.collection('notes').find().toArray(function (err, results) {
        if (err) {
            return res.json(err);
        }
        res.render('index.ejs', {notes: results});
    });
});

app.post('/notes', (req, res) => {
    db.collection('notes').insertOne(req.body)
        .then((result) => {
            return res.json(result);
        })
        .catch((error) => {
            return res.json(error);
        });
});

app.put('/notes', (req, res) => {
    const note = req.body;
    db.collection('notes').updateOne({"_id": ObjectID(note._id)}, {note: note.note, title: note.title})
        .then((result) => {
            return res.json(result);
        })
        .catch((error) => {
            return res.json(error);
        });
});

app.delete('/notes/:id', (req, res) => {
    db.collection('notes').deleteOne({"_id": ObjectID(req.params.id)})
        .then((result) => {
            return res.json(result);
        })
        .catch((error) => {
            return res.json(error);
        });
});

// mlab => mongodb://root:pass@ds127173.mlab.com:27173/tibznotes
// local => mongodb://localhost:27017/tibznotes
// docker => mongodb://mongo/tibznotes

MongoClient.connect('mongodb://mongo/tibznotes', (err, database) => {
    if (err) {
        console.log(err);
    } else {
        db = database;
    }
    app.listen(3001, () => {
        console.log('listening on 3001')
    })
});