var Brand = require('../models/brand'); 
 
// List of all brands 
exports.brand_list = async function(req, res) { 
    try{ 
        thebrands = await Brand.find(); 
        res.send(thebrands); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// for a specific Costume. 
exports.brand_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: brand detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.brand_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Brand(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
   // {"BrandName":"MK",  "Slogan":"Excellent", "Price":500}

    document.BrandName = req.body.BrandName; 
    document.Slogan = req.body.Slogan; 
    document.Price = req.body.Price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete form on DELETE. 
exports.brand_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: brand delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.brand_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: brand update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.brand_view_all_Page = async function(req, res) { 
    try{ 
        thebrands = await Brand.find(); 
        res.render('brand', { title: 'brand Search Results', results: thebrands }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 