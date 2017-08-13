/**
 * Created by arunatebel on 8/13/17.
 */
'use strict';
module.exports = function (app) {
    let mongoose = require('mongoose');
    let TodoListController = require('../controllers/TodoListController');
    let TodoController = require('../controllers/TodoController');
    let TodoList = mongoose.model('TodoList'),
        Todo = mongoose.model('Todo');

    let TodoCtrl = new TodoController(Todo);
    let TodoListCtrl = new TodoListController(TodoList);

    // TodoListController Routes
    app.route('/todo_list')
        .get(TodoListCtrl.list.bind(TodoListCtrl))
        .post(TodoListCtrl.create.bind(TodoListCtrl))
        .delete(TodoListCtrl.clear.bind(TodoListCtrl));


    app.route('/todo_list/:id')
        .get(TodoListCtrl.find.bind(TodoListCtrl))
        .put(TodoListCtrl.update.bind(TodoListCtrl))
        .delete(TodoListCtrl.remove.bind(TodoListCtrl));

    app.route('/todo')
        .get(TodoCtrl.list.bind(TodoCtrl))
        .delete(TodoCtrl.clear.bind(TodoCtrl));

    app.route('/todo/:listId')
        .post(TodoCtrl.create.bind(TodoCtrl));

    app.route('/todo/:id')
        .get(TodoCtrl.find.bind(TodoCtrl))
        .put(TodoCtrl.update.bind(TodoCtrl))
        .delete(TodoCtrl.remove.bind(TodoCtrl))
};