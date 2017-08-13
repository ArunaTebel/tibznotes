/**
 * Created by arunatebel on 8/13/17.
 */

class BaseDocumentRepository {

    create(Document, callback) {
        Document.save(function (error, Document) {
            callback(error, Document);
        });
    }

    find(DocumentModel, id, callback) {
        DocumentModel.findById(id, function (error, Document) {
            callback(error, Document);
        });
    }

    update(DocumentModel, conditions, update, options, callback) {
        DocumentModel.findOneAndUpdate(conditions, update, options, function (error, Document) {
            callback(error, Document);
        });
    }

    remove(DocumentModel, id, callback) {
        DocumentModel.remove({_id: id}, function (error) {
            callback(error);
        });
    }

    list(DocumentModel, callback) {
        DocumentModel.find({}, function (error, DocumentList) {
            callback(error, DocumentList);
        });
    }

    clear(DocumentModel, callback) {
        DocumentModel.remove({}, function (error) {
            callback(error)
        });
    }
}

module.exports = BaseDocumentRepository;