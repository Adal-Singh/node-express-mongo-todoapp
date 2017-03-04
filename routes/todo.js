var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //mongo connection
var response = {"error":0,"message":'',"data":''};

/* GET todo notes listing. */
// Read data from db and send the list of all todo note
router.get('/list', function(req, res, next) {
	var usersProjection = { 
    __v: false,
    _id: false
	};

  mongoose.model('TodoNote').find({}, usersProjection, function(err, notes) {
	    if (!err){ 
	      // console.log(notes);
	      response.data = notes;
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
router.post('/note', function(req, res, next) {
	if(req.body.data!=""){
		mongoose.model('TodoNote').create({
	    data : req.body.data
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
