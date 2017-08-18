/**
 * Created by arunatebel on 8/18/17.
 */
/**
 * @api {get} /todo/list/:id Retrieve the list of Todo Lists
 * @apiName GetListOfTodoLists
 * @apiGroup TodoList
 *
 * @apiParam {Number} id TodoList's unique ID.
 *
 * @apiSuccess {String} _id Unique Identifier of the Todo List
 * @apiSuccess {String} Name  Name of the Todo List
 * @apiSuccess {String} Status  Status of the Todo List
 * @apiSuccess {Array} Created_Date  Created_Date of the Todo List
 * @apiSuccess {Timestamp} Created_Date  Created Date of the Todo List
 * @apiSuccess {Array} Todos  The list of Todo Items in the Todo List
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "_id": "5996f99459fa9b23c70c8ec4",
 *    "Name": "Personal Todo List",
 *    "__v": 0,
 *    "Status": [
 *        "active"
 *    ],
 *    "Created_Date": "2017-08-18T14:28:36.189Z",
 *    "Todos": [
 *        {
 *            "Name": "Buy Milk",
 *            "_id": "5996fb08e8bf6f25212376e6",
 *            "Status": [
 *                "pending"
 *            ]
 *        },
 *       {
 *            "Name": "Go to Mars",
 *            "_id": "599701c680d7bc28f3ab828f",
 *            "Status": [
 *                "pending"
 *            ]
 *        }
 *    ]
 * }
 *
 * @apiError TodoListNotFound Todo List with the given ID was not found
 *
 * @apiErrorExample TodoListNotFound: Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "Error": "No todolists found for ID: 5996f99459fa9b23c70c8ec9"
 *     }
 * @apiError CastToObjectIdFailed Cast to ObjectId failed for the given ID (ID was not in proper format)
 *
 * @apiErrorExample CastToObjectIdFailed: Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *          "message": "Cast to ObjectId failed for value \"5996f99459fa9b23c70c8ec9s\" at path \"_id\" for model \"TodoList\"",
 *          "name": "CastError",
 *          "stringValue": "\"5996f99459fa9b23c70c8ec9s\"",
 *          "kind": "ObjectId",
 *          "value": "5996f99459fa9b23c70c8ec9s",
 *          "path": "_id"
 *    }
 *
 */