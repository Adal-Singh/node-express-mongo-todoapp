var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("text : "+req.query.usd);
	var INR = 66.75;

	if(req.query.usd != undefined){
		var response = {"error":0,"message":'',"data":''};
		if(!isNaN(req.query.usd)){
			var inr = req.query.usd * INR;
			response.data = inr;
			res.json(response);
		}else{
			response.error = 1;
			response.message = "Please provide valid number.";
			res.json(response);
		}
	}else{
  	res.send(' Hello World ');
	}
});

module.exports = router;
