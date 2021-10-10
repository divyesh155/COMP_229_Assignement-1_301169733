/* <!--
  File Name : users.js
  Name : Divyesh Patel
  Student ID : 301169733
  Date : 10/10/2021
--> */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
