// route for adding an item to the menu

const express = require('express');
const router = express.Router();
const { addMenuItem } = require('../controllers/addMenuItem');

router.post('/', (req, res, next) => {
    next();
}, addMenuItem);

module.exports = router;
