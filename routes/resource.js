var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var brand_controller = require('../controllers/brand');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// brand ROUTES ///
// POST request for creating a brand.
router.post('/brand', brand_controller.brand_create_post);
// DELETE request to delete brand.
router.delete('/brand/:id', brand_controller.brand_delete);
// PUT request to update brand.
router.put('/brand/:id', brand_controller.brand_update_put);
// GET request for one brand.
router.get('/brand/:id', brand_controller.brand_detail);
// GET request for list of all brand items.
router.get('/brand', brand_controller.brand_list);
module.exports = router;