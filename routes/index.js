/* <!--
  File Name : index.js
  Name : Divyesh Patel
  Student ID : 301169733
  Date : 10/10/2021
--> */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
/* GET About page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
module.exports = router;
