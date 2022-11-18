var brand = require('../models/brand');
// List of all brand
exports.brand_list = async function(req, res) {
    try{ 
        results = await brand.find(); 
        res.send(results); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
};
// for a specific brand.
exports.brand_detail = function(req, res) {
res.send('NOT IMPLEMENTED: brand detail: ' + req.params.id);
};
// Handle brand create on POST.
exports.brand_create_post = async function(req, res) {
    console.log(req.body) 
    let document = new brand(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"MachineType":"Refrigerator","Capacity":1,"useType":"Domestic","Energy":"solar"}
    document.BrandName = req.body.BrandName; 
    document.Slogan = req.body.Slogan; 
    document.Price = req.body.Price; 
    try{ 
        let results = await document.save(); 
        res.send(results); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
};

// Handle brand delete form on DELETE.
exports.brand_delete = function(req, res) {
res.send('NOT IMPLEMENTED: brand delete DELETE ' + req.params.id);
};
// Handle brand update form on PUT.
exports.brand_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: brand update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.brand_view_all_Page = async function(req, res) {
    try{
    thebrands = await brand.find();
    res.render('brand', { title: 'brand Search Results', results: thebrands });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// for a specific brand.
exports.brand_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    results = await brand.findById( req.params.id)
    res.send(results)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle brand update form on PUT.
exports.brand_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await brand.findById( req.params.id)
    // Do updates of properties
    if(req.body.BrandName)
    toUpdate.BrandName = req.body.BrandName;
    if(req.body.Slogan) toUpdate.Slogan = req.body.Slogan;
    if(req.body.Price) toUpdate.Price = req.body.Price;
    
    let results = await toUpdate.save();
    console.log("Sucess " + results)
    res.send(results)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};
// Handle brand delete on DELETE.
exports.brand_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    results = await brand.findByIdAndDelete( req.params.id)
    console.log("Removed " + results)
    res.send(results)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.brand_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    results = await brand.findById( req.query.id)
    res.render('branddetail',
    { title: 'brand Detail', toShow: results });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a machine.
// No body, no in path parameter, no query.
// Does not need to be async
exports.brand_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('brandcreate', { title: 'brand Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a brand.
// query provides the id
exports.brand_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let results = await brand.findById(req.query.id)
    res.render('brandupdate', { title: 'brand Update', toShow: results });
    }
    catch(err){Brand
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.brand_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    results = await brand.findById(req.query.id)
    res.render('branddelete', { title: 'brand Delete', toShow:
    results });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};