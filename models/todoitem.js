var mongoose = require('mongoose');

var todoSchema = {description: String};

module.exports = mongoose.model('TodoItem', todoSchema);