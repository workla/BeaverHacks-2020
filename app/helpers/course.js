var mysql = require('../../config/dbcon.js');

function renderCoursePage(courseId, res) {
    getCourseData(courseId, res);
}

function getCourseData(courseId, res) {
    var context = {};
    mysql.pool.query(`SELECT * FROM courses WHERE courses.id=?`, 
                    [courseId], function(err, rows){
        if(err){
            res.render("home/index");
            return;
        }
        let courseData = rows[0];
        if (!courseData) {
            res.render("home/index");
            return;
        }
        context.id = courseData.id;
        context.name = courseData.name;

        context.lectures = getLecturesRatings(courseData);
        context.textbook = getTextbookRatings(courseData);

        getCourseBooks(context, res);
        
    });
    
};

function getLecturesRatings(data) {
    let lecturesRatings = {};
    totalVotes = data.lectVotes1 + data.lectVotes2 + data.lectVotes3 + data.lectVotes4 + data.lectVotes5;
    lecturesRatings.one = data.lectVotes1 ? Math.round(data.lectVotes1 / totalVotes * 100) : 0;
    lecturesRatings.two = data.lectVotes2 ? Math.round(data.lectVotes2 / totalVotes * 100) : 0;
    lecturesRatings.three = data.lectVotes3 ? Math.round(data.lectVotes3 / totalVotes * 100) : 0;
    lecturesRatings.four = data.lectVotes4 ? Math.round(data.lectVotes4 / totalVotes * 100) : 0;
    lecturesRatings.five = data.lectVotes5 ? Math.round(data.lectVotes5 / totalVotes * 100) : 0;
    return lecturesRatings;
}

function getTextbookRatings(data) {
    let textbookRatings = {};
    totalVotes = data.textVotes1 + data.textVotes2 + data.textVotes3 + data.textVotes4 + data.textVotes5;
    textbookRatings.one = data.textVotes1 ? Math.round(data.textVotes1 / totalVotes * 100) : 0;
    textbookRatings.two = data.textVotes2 ? Math.round(data.textVotes2 / totalVotes * 100) : 0;
    textbookRatings.three = data.textVotes3 ? Math.round(data.textVotes3 / totalVotes * 100) : 0;
    textbookRatings.four = data.textVotes4 ? Math.round(data.textVotes4 / totalVotes * 100) : 0;
    textbookRatings.five = data.textVotes5 ? Math.round(data.textVotes5 / totalVotes * 100) : 0;
    return textbookRatings;
}

function getCourseBooks(context, res) {
    mysql.pool.query(`SELECT id, title, url, votes FROM books WHERE books.courseId=?`, 
                    [context.id], function(err, rows, fields){
        if(err){
            console.error(err);
            return;
        }
        context.books = rows;
        context.books.sort((a, b) => b.votes - a.votes);
        for (book in context.books) {
            book.url = decodeURI(book.url);
        }
        getCourseVideos(context, res);
        return;
    });
}

function getCourseVideos(context, res) {
    mysql.pool.query(`SELECT id, title, url, votes FROM videos WHERE videos.courseId=?`, 
                    [context.id], function(err, rows){
        if(err){
            console.error(err);
            return;
        }
        context.videos = rows;
        context.videos.sort((a, b) => b.votes - a.votes);
        for (video in context.videos) {
            video.url = decodeURI(video.url);
        }
        console.log(context);
        if (res.type == 'redirect') {
            res.redirect(`/course/${context.id}`);
        } else {
            res.render('classBody', context);
        }
    });
}

exports.renderCoursePage = renderCoursePage;
exports.getLecturesRatings = getLecturesRatings;
exports.getTextbookRatings = getTextbookRatings;