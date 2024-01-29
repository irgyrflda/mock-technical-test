const router = require("express").Router();
const books = require('./books.routes');

router.use('/books', books);

module.exports = router;