/**
 * Created by arunatebel on 8/13/17.
 */
'use strict';

let mongoose = require('mongoose'),
    TodoList = mongoose.model('TodoList'),
    BaseController = require('../../core/BaseController'),
    TodoRepository = require('../repos/TodoRepository'),
    Todo = mongoose.model('Todo');

class TodoController extends BaseController {

    constructor() {
        super(Todo);
        this.repository = new TodoRepository();
    }

    find(req, res) {
        this.getRepository().find(req.params.id, function (err, todo) {
            if (err) {
                res.send(err);
            }
            res.send(todo);
        });
    }

    create(req, res) {
        this.getRepository().create(new Todo(req.body), req.params.listId, function (err, todoList) {
            if (err) {
                res.send(err);
            }
            res.send(todoList);
        });
    }

    update(req, res) {
        let todoToBeUpdated = req.body;
        todoToBeUpdated._id = req.params.id;
        this.getRepository().update(req.params.id, todoToBeUpdated, function (err, todoList) {
            if (err) {
                res.send(err);
            }
            res.send(todoList);
        });
    }

    remove(req, res) {
        this.getRepository().remove(req.params.id, function (err, todoList) {
            if (err) {
                res.send(err);
            }
            res.send(todoList);
        });
    }
}

module.exports = TodoController;
