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

  mongoose.model('Comments').find({}, usersProjection, function(err, comment) {
    if (!err){ 
      // console.log(comment);
      response.data = comment;
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
		mongoose.model('Comments').create({
	    title : req.body.title,
	    comment : req.body.comment,
	    // fulladdress : req.body.fulladdress,
	    postedon : req.body.postedon,
	    postedby : req.body.postedby,
	    // location : req.body.location
	  }, function (err, note) {
	    if (err) {
	      response.error = 1;
	    	response.message = "There was a problem adding the information to the database.";
	    	res.json(response);
	    } else {
	      //Blob has been created
	      res.json(note);
	    }
	  });
	}else{
		response.error = 1;
  	response.message = "Please send proper data format.";
  	res.json(response);
	}
});

module.exports = router;
