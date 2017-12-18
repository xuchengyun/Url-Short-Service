var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var useragent = require('express-useragent');

var promise = mongoose.connect('mongodb://xcy1994:88227092@ds129394.mlab.com:29394/mytinyurl', {
    useMongoClient: true,
});

var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
    // Wait for the database connection to establish, then start the app.
});
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.use("/public", express.static(__dirname + "/public"));

app.use(useragent.express());

app.use("/api/v1", restRouter);

app.use("/", indexRouter);

app.use("/:shortUrl", redirectRouter); //not api/v1 as beginning

app.listen(3000);