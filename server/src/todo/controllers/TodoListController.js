/**
 * Created by arunatebel on 8/13/17.
 */
'use strict';

let mongoose = require('mongoose'),
    TodoList = mongoose.model('TodoList'),
    BaseController = require('../../core/BaseController');

class TodoListController extends BaseController {
    constructor() {
        super(TodoList);
    }
}

module.exports = TodoListController;


