/**
 * Created by arunatebel on 8/13/17.
 */
const BaseDocumentRepository = require('../../core/BaseDocumentRepository');
const mongoose = require('mongoose');
const Note = mongoose.model('Note');

class NoteRepository extends BaseDocumentRepository {
    // create(Todo, todoListId, callback) {
    //     super.update(Note, {_id: todoListId}, {'$push': {'Todos': Todo}}, {
    //         upsert: true,
    //         new: true
    //     }, function (error, todoList) {
    //         callback(error, todoList)
    //     });
    // }
    //
    // update(todoId, updatedTodo, callback) {
    //     Note.findOneAndUpdate({"Todos._id": todoId}, {"$set": {"Todos.$": updatedTodo}}, {new: true}, function (error, TodoList) {
    //         callback(error, TodoList);
    //     });
    // }
    //
    // remove(todoId, callback) {
    //     Note.findOneAndUpdate({}, {"$pull": {"Todos": {_id: todoId}}}, {new: true}, function (error, TodoList) {
    //         callback(error, TodoList);
    //     });
    // }
}

module.exports = NoteRepository;