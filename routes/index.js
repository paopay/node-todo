var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/data');
var TodoItem = require('../models/todoitem')


/* GET home page. */
router.get('/', function(req, res) {
  TodoItem.find(function(err, items){
    if(err){
      console.log(err);
    }
    var set = [];
    if(items !== null){
      set = items;
    }
    res.render('index', { title: 'Node-Todo', items: set });
  });
});

router.post('/new', function(req, res) {
  var item = new TodoItem({description: req.body.description});
  item.save(function(err){
    if(err){
      console.log(err);
    }
  });
  res.redirect('/')
});

router.post('/delete/:description', function(req, res) {
  TodoItem.findOne(req.params.description, function(err, item){
    item.remove();
  });
  res.redirect('/');
})

module.exports = router;
