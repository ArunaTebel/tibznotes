/**
 * Created by arunatebel on 8/13/17.
 */
'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TodoSchema = new Schema({
    Name: {
        type: String,
        Required: true
    },
    Status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

let TodoListSchema = new Schema({
    Name: {
        type: String,
        Required: true
    },
    Todos: [TodoSchema],
    Created_Date: {
        type: Date,
        default: Date.now
    },
    Status: {
        type: [{
            type: String,
            enum: ['active', 'archived']
        }],
        default: ['active']
    }
});

module.exports = mongoose.model('Todo', TodoSchema);
module.exports = mongoose.model('TodoList', TodoListSchema);