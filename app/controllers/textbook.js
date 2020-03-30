const express = require("express");
var mysql = require('../../config/dbcon.js');

const courseHelpers = require('../helpers/course');
const getTextbookRatings = courseHelpers.getTextbookRatings;

const router = express.Router();

/* ROUTES */

router.get("/rate", function(req, res) {
    const { rating } = req.body;

    let textRating = 'textVotes' + rating;

    mysql.pool.query(`UPDATE course SET ? = ? + 1 WHERE id = ?`, [textRating, textRating, courseId], 
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
                let textbookRatings = getTextbookRatings(courseData);

                res.json(textbookRatings)
            });

        }
    );
});

module.exports = router;