const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// get and post api routes
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// individual book routes
router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;