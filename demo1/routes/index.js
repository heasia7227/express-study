var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json({
        code: 200,
        data: "json data",
    });
});

module.exports = router;
