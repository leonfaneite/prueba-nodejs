
let router = require('express').Router();
router.get('/', function(req, res){
    res.json({
        status: "Api is working",
        message: "welcom to REsthub crafted with love",

        });
    });

    //import contact controller
    var contactController = require("./contactController");
        
    //Contact routes
    router.route('/contacts')
        .get(contactController.index)
        .post(contactController.new);
    
    router.route('/contacts/:contact_id')
        .get(contactController.view)
        .patch(contactController.view)
        .put(contactController.update)
        .delete(contactController.delete)

        //export API roules
 
    module.exports = router;


