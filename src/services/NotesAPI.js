/**
 * Created by arunatebel on 7/26/17.
 */
import axios from 'axios';

const API_BASE = 'http://localhost:3001';

class NotesAPI {
    static getAll(callback) {
        axios.get(API_BASE + '/').then(function (response) {
            callback(response.data);
        }).catch(function (error) {
            callback(error);
        });
    }

    static insert(note, callback) {
        axios.post(API_BASE + '/notes', note).then(function (response) {
            callback(response);
        }).catch(function (error) {
            callback(error);
        });
    }

    static update(note, callback) {
        axios.put(API_BASE + '/notes', note).then(function (response) {
            callback(response);
        }).catch(function (error) {
            callback(error);
        });
    }

    static remove(note, callback) {
        axios.delete(API_BASE + '/notes/'+ note._id).then(function (response) {
            callback(response);
        }).catch(function (error) {
            callback(error);
        });
    }
}


export default NotesAPI;