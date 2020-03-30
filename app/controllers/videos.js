const express = require("express");
var mysql = require('../../config/dbcon.js');

const courseHelpers = require('../helpers/course');
const renderCoursePage = courseHelpers.renderCoursePage;

const router = express.Router();

/* ROUTES */

router.post("/add", function(req, res) {
    let { title, url, courseId } = req.body;
    url = encodeURI(url);
    mysql.pool.query(`INSERT INTO videos (title, url, votes, courseId) VALUES (?, ?, ?, ?)`, [title, url, 1, courseId], 
        function(err, rows){
            if(err){
                console.error(err);
                return;
            }
            res.type = 'redirect';
            renderCoursePage(courseId, res);
        }
    );
});

router.post("/upvote", function(req, res) {
    const { videoId, courseId } = req.body;
    mysql.pool.query(`UPDATE videos SET votes = votes + 1 WHERE id = ?`, [videoId], 
        function(err, rows){
            if(err){
                console.error(err);
                return;
            }
            res.json({result: 'true'});
        }
    );
});

router.post("/downvote", function(req, res) {
    const { videoId, courseId } = req.body;
    mysql.pool.query(`UPDATE books SET votes = votes - 1 WHERE id = ?`, [videoId], 
        function(err, rows){
            if(err){
                console.error(err);
                return;
            }
            res.json({result: 'true'});
        }
    );
});


module.exports = router;