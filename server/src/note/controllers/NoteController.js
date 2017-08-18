/**
 * Created by arunatebel on 8/13/17.
 */
'use strict';

let mongoose = require('mongoose'),
    BaseController = require('../../core/BaseController'),
    NoteRepository = require('../repos/NoteRepository'),
    Note = mongoose.model('Note');

class NoteController extends BaseController {

    constructor() {
        super(Note);
    }

}

module.exports = NoteController;
