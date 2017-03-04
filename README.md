# node-express-mongo-todoapp
Sample app to use node, express and mongo to create application.

**Todo App **  
git clone https://github.com/Adal-Singh/node-express-mongo-todoapp.git todo

npm install -g express-generator  
npm install -g nodemon  
  
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
  
Start your app and enjoy.  
// For development   
npm start 