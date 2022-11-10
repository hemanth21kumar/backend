module.exports = app => {
    const table = require('../controllers/data.controller.js');
    var router = require("express").Router();
    router.post("/", table.create);
    router.get("/", table.findAll);

    app.use('/api/table', router);
}