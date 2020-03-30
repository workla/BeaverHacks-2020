const controllers = require("./controllers");
const config = require("../config");

module.exports.registerRoutes = app => {
  app.use("/", controllers.home);
  app.use("/course", controllers.course);
  app.use("/books", controllers.books);
  app.use("/videos", controllers.videos);
  app.use("/textbook", controllers.textbook);
  app.use("/lectures", controllers.lectures);
};

module.exports.registerErrorHandlers = app => {
  app.use(function(err, req, res, next) {
    console.error(err.message);
    res.status(err.status || 500);
    res.render("500", {
      message: err.message,
      error: config.env === "development" ? err : {}
    });
  });
};
