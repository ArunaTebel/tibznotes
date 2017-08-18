/**
 * Created by arunatebel on 8/13/17.
 */
'use strict';
module.exports = function (app) {
    let APP_CONFIG = require('../../../config/APP_CONFIG.json');
    let mongoose = require('mongoose');
    let NoteController = require('../controllers/NoteController');
    let Note = mongoose.model('Note');

    let NoteCtrl = new NoteController(Note);
    const API_VERSION = APP_CONFIG.api.version;
    const API_BASE_URI_NAME = APP_CONFIG.api.base_uri.name;
    const API_LOCAL_URI_NAME = 'note';

    app.route('/' + API_BASE_URI_NAME + '/' + API_VERSION + '/' + API_LOCAL_URI_NAME + '/list')
        .get(NoteCtrl.list.bind(NoteCtrl));


    app.route('/' + API_BASE_URI_NAME + '/' + API_VERSION + '/' + API_LOCAL_URI_NAME + '/:id')
        .get(NoteCtrl.find.bind(NoteCtrl))
        .post(NoteCtrl.create.bind(NoteCtrl))
        .put(NoteCtrl.update.bind(NoteCtrl))
        .delete(NoteCtrl.remove.bind(NoteCtrl));

};