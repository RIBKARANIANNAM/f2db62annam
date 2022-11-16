var Engine = require('../models/brand');

// List of all brands 
exports.brand_list = async function (req, res) {
    try {
        thebrand = await brand.find();
        res.send(theEngines);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS 
// Handle a show all view 
exports.brand_view_all_Page = async function (req, res) {
    try {
        thebrands = await brand.find();
        res.render('brand', { title: 'Brand Search Results', results: thebrand });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific brand. 
exports.brand_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Brand.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle brand create on POST. 
exports.brand_create_post = async function (req, res) {
    console.log(req.body)
    let document = new brand();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.BrandName = req.body.BrandName;
    document.Slogan = req.body.Slogan;
    document.Price = req.body.Price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle brand delete form on DELETE. 
exports.brand_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Brand.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle brand update form on PUT. 
exports.brand_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Engine.findById(req.params.id)
        // Do updates of properties 
        if (req.body.BrandName)
            toUpdate.BrandName = req.body.BrandName;
        if (req.body.Slogan)
            toUpdate.Slogan = req.body.Slogan;
        if (req.body.Price)
            toUpdate.Price = req.body.Price;
        
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
}; 

// Handle a show one view with id specified by query 
exports.brand_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await brand.findById(req.query.id) 
        res.render('branddetails',{ title: 'brand Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.brand_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('brandcreate', { title: 'brand Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.brand_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Engine.findById(req.query.id) 
        res.render('brandupdate', { title: 'brand Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle a delete one view with id from query 
exports.brand_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await brand.findById(req.query.id) 
        res.render('branddelete', { title: 'brand Delete', toShow:result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 