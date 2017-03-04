**Todo App **  
npm install -g express-generator  
npm install -g nodemon  
  
express todo  
cd todo && npm install  
  
// Make sure we are running app with nodemon in development enviornment in package.json.  
// For the live server we will use the pm2  
  

"scripts": {

    "start": "nodemon ./bin/www"

},  
  
**Install mongodb :** https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/  
  
Make connection with proper db name: model/db.js  
// mongoose.connect( 'mongodb://localhost:27017/todo-note' );  
  
That's it.  
  
Start you app and enjoy.  
// For development   
npm start 