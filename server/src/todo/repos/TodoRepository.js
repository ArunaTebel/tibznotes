/**
 * Created by arunatebel on 8/13/17.
 */
const BaseDocumentRepository = require('../../core/BaseDocumentRepository');
const mongoose = require('mongoose');
const TodoList = mongoose.model('TodoList');

class TodoRepository extends BaseDocumentRepository {
    create(Todo, todoListId, callback) {
        super.update(TodoList, {_id: todoListId}, {'$push': {'Todos': Todo}}, {
            upsert: true,
            new: true
        }, function (error, todoList) {
            callback(error, todoList)
        });
    }

    update(todoId, updatedTodo, callback) {
        TodoList.findOneAndUpdate({"Todos._id": todoId}, {"$set": {"Todos.$": updatedTodo}}, {new: true}, function (error, TodoList) {
            callback(error, TodoList);
        });
    }

    remove(todoId, callback) {
        TodoList.findOneAndUpdate({}, {"$pull": {"Todos": {_id: todoId}}}, {new: true}, function (error, TodoList) {
            callback(error, TodoList);
        });
    }
}

module.exports = TodoRepository;