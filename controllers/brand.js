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
exports.brand_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: brand create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.brand_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: brand delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.brand_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: brand update PUT' + req.params.id); 
}; 