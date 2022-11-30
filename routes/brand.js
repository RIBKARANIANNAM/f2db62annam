var express = require('express');
const brand_controlers=require('../controllers/brand');
var router = express.Router();
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 
/* GET brand */
router.get('/', brand_controlers.brand_view_all_Page );

/* GET detail brand page */
router.get('/detail', brand_controlers.brand_view_one_Page);
/* GET create brand page */
router.get('/create', secured, brand_controlers.brand_create_Page);
/* GET update brand page */
// A little function to check if we have an authorized user and continue on or 
// redirect to login. 

router.get('/update', secured ,brand_controlers.brand_update_Page);
/* GET delete brand page */
router.get('/delete', secured, brand_controlers.brand_delete_Page);


module.exports = router;
