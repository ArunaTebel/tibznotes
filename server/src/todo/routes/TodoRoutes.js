/**
 * Created by arunatebel on 8/13/17.
 */
'use strict';
module.exports = function (app) {
    let APP_CONFIG = require('../../../config/APP_CONFIG.json');
    let mongoose = require('mongoose');
    let TodoListController = require('../controllers/TodoListController');
    let TodoController = require('../controllers/TodoController');
    let TodoList = mongoose.model('TodoList'),
        Todo = mongoose.model('Todo');

    let TodoCtrl = new TodoController(Todo);
    let TodoListCtrl = new TodoListController(TodoList);
    const API_VERSION = APP_CONFIG.api.version;
    const API_BASE_URI_NAME = APP_CONFIG.api.base_uri.name;
    const API_LOCAL_URI_NAME = 'todo';

    app.route('/' + API_BASE_URI_NAME + '/' + API_VERSION + '/' + API_LOCAL_URI_NAME + '/list')
        .get(TodoListCtrl.list.bind(TodoListCtrl))
        .post(TodoListCtrl.create.bind(TodoListCtrl))
        .delete(TodoListCtrl.clear.bind(TodoListCtrl));


    app.route('/' + API_BASE_URI_NAME + '/' + API_VERSION + '/' + API_LOCAL_URI_NAME + '/list/:id')
        .get(TodoListCtrl.find.bind(TodoListCtrl))
        .put(TodoListCtrl.update.bind(TodoListCtrl))
        .delete(TodoListCtrl.remove.bind(TodoListCtrl));

    app.route('/' + API_BASE_URI_NAME + '/' + API_VERSION + '/' + API_LOCAL_URI_NAME + '/todo/:listId')
        .post(TodoCtrl.create.bind(TodoCtrl));

    app.route('/' + API_BASE_URI_NAME + '/' + API_VERSION + '/' + API_LOCAL_URI_NAME + '/todo/:id')
        .get(TodoCtrl.find.bind(TodoCtrl))
        .put(TodoCtrl.update.bind(TodoCtrl))
        .delete(TodoCtrl.remove.bind(TodoCtrl))
};