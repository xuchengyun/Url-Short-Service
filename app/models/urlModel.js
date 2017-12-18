/**
 * Created by xuchengyun on 9/7/17.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UrlSchema = new Schema ({
    shortUrl: String,
    longUrl: String
});

var urlModel = mongoose.model("UrlModel", UrlSchema);

module.exports = urlModel;