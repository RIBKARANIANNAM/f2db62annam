var express = require('express');
const brand_controlers=require('../controllers/brand');
var router = express.Router();

/* GET machines */
router.get('/', brand_controlers.brand_view_all_Page );

/* GET detail machine page */
router.get('/detail', brand_controlers.brand_view_one_Page);
/* GET create machine page */
router.get('/create', brand_controlers.brand_create_Page);
/* GET create update page */
router.get('/update', brand_controlers.brand_update_Page);
/* GET delete machine page */
router.get('/delete', brand_controlers.brand_delete_Page);


module.exports = router;
