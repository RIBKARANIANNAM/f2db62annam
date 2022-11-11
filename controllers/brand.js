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
 
 
// for a specific brand.
exports.brand_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Brand.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
 
// Handle brand create on POST. 
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
 
// Handle brand update form on PUT.
exports.brand_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Brand.findById( req.params.id)
 // Do updates of properties
 if(req.body.BrandName)
 toUpdate.BrandName = req.body.BrandName;
 if(req.body.Slogan) toUpdate.Slogan = req.body.Slogan;
 if(req.body.Price) toUpdate.Price = req.body.Price;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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