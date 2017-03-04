var express = require('express');
var router = express.Router();
var fs = require("fs"),
    path = require("path");

/* GET users listing. */
router.get('/list', function(req, res, next) {
	var response = {"error":0,"message":'',"data":''};
	// var p = "../"
	var p = (req.query.path!="")? req.query.path : "";

	fs.readdir(p, function (err, files) {
	    if (err) {
	    	response.error =1;
	    	response.message = err.toString();
	    	res.json(response);
	    	return;
	        // throw err;
	    }
	    
    	response.data = files;
    	res.json(response);
	});
});

module.exports = router;
