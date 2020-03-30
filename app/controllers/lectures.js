const express = require("express");
var mysql = require('../../config/dbcon.js');

const courseHelpers = require('../helpers/course');
const getLecturesRatings = courseHelpers.getLecturesRatings;

const router = express.Router();

/* ROUTES */

router.get("/rate", function(req, res) {
    const { rating } = req.body;

    let lectRating = 'lectVotes' + rating;

    mysql.pool.query(`UPDATE course SET ? = ? + 1 WHERE id = ?`, [lectRating, lectRating, courseId], 
        function(err, rows){
            if(err){
                console.error(err);
                return;
            }
            
            var context = {};
            mysql.pool.query(`SELECT * FROM courses WHERE courses.id=?`, 
                            [courseId], function(err, rows, fields){
                if(err){
                    console.error(err);
                    return;
                }
                let courseData = rows[0];
                let lecturesRatings = getLecturesRatings(courseData);

                res.json(lecturesRatings)
            });

        }
    );
});

module.exports = router;