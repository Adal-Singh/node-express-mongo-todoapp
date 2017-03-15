var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //mongo connection
var response = {"error":0,"message":'',"data":''};

/* GET users listing. */
router.get('/list', function(req, res, next) {
	var usersProjection = { 
    __v: false,
    _id: false
	};

  mongoose.model('Users').find({}, usersProjection, function(err, users) {
    if (!err){ 
      // console.log(users);
      response.data = users;
  		res.json(response);
    } else {
    	// throw err;
    	response.error = 1;
    	response.message = err.toString();
    	res.json(response);
    }
	});
});

// Save data and send created record
router.post('/', function(req, res, next) {
	if(req.body.data!=""){
		var address = { "address": req.body.address,"location":[req.body.longitude,req.body.latitude]};

		mongoose.model('Users').create({
	    name : req.body.name,
	    email : req.body.email,
	    fulladdress : address,
	    type : req.body.type
	  }, function (err, user) {
	    if (err) {
	      response.error = 1;
	    	response.message = "There was a problem adding the information to the database.";
	    	res.json(response);
	    } else {
	      //Blob has been created
	      res.json(user);
	    }
	  });
	}else{
		response.error = 1;
  	response.message = "Please send proper data format.";
  	res.json(response);
	}
});

module.exports = router;
