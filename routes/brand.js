var express = require('express');
const brand_controlers= require('../controllers/brand'); 
var router = express.Router();

/* GET home page. */
router.get('/', brand_controlers.brand_view_all_Page ); 

module.exports = router;
