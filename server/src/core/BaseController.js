/**
 * Created by arunatebel on 8/13/17.
 */

const BaseDocumentRepository = require('./BaseDocumentRepository');

// let Model;

class BaseController {

    constructor(model) {
        this.Model = model;
        this.repository = new BaseDocumentRepository();
    }

    getModel() {
        return this.Model;
    }

    getRepository() {
        return this.repository;
    }

    list(req, res) {
        this.getRepository().list(this.getModel(), function (err, DocumentList) {
            if (err) {
                res.send(err);
            }
            res.json(DocumentList);
        });
    };


    create(req, res) {
        let modelClass = this.getModel();
        const model = new modelClass(req.body);
        this.getRepository().create(model, function (err, Document) {
            if (err) {
                res.send(err);
            }
            res.json(Document);
        });
    };


    find(req, res) {
        const model = this.getModel();
        this.getRepository().find(model, req.params.id, function (err, Document) {
            if (err) {
                res.status(400);
                res.send(err);
            } else if (Document === null) {
                res.status(404);
                res.send({"Error": 'No ' + model.collection.collectionName + ' found for ID: ' + req.params.id})
            }
            res.json(Document);
        });
    };


    update(req, res) {
        this.getRepository().update(this.getModel(), {_id: req.params.id}, req.body, {new: true}, function (err, Document) {
            if (err) {
                res.send(err);
            }
            res.json(Document);
        });
    };


    clear(req, res) {
        const model = this.getModel();
        this.getRepository().clear(model, function (err) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'All documents of type ' + model.collection.collectionName + ' deleted.'});
        });
    };


    remove(req, res) {
        const model = this.getModel();
        this.getRepository().remove(model, req.params.id, function (err) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Successfully deleted the ' + model.collection.collectionName + ' having the id: ' + req.params.id});
        });
    };
}

module.exports = BaseController;