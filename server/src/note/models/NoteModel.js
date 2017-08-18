/**
 * Created by arunatebel on 8/13/17.
 */
'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NoteSchema = new Schema({
    Title: {
        type: String,
        Required: true
    },
    Note: {
        type: String,
        Required: true
    }
});

module.exports = mongoose.model('Note', NoteSchema);
