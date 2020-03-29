const express = require("express");
var mysql = require('../../config/dbcon.js');

const router = express.Router();

router.get("/:courseId", function(req, res) {
    var context = {};
    console.log(req.params.courseId);
    mysql.pool.query('SELECT * FROM users WHERE id=?', [req.params.courseId], function(err, rows, fields){
        if(err){
            console.error(err);
            return;
        }
        context.id = rows[0].id;
        context.name = rows[0].name;
        console.log(context);
        res.render('home/index');
    });
});

module.exports = router;