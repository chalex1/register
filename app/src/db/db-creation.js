(function (imports){

'use strict'

module.exports.init  = function(){

/*Now after NPM installing the sqlite3 module, you may think the next step is to create this file for use. 
We could create the file and place it in a common place for use...or we could create the file on the fly, which sqlite3 will do for us.
 First, however, we need to check if the file exists, which will help us with some operations later.*/
var fs = require("fs");
var file = "register.db";
var exists = fs.existsSync(file);

/* Next we need to connect to our file/database. 
Providing a file that does not exist will cause sqlite3 to create it for us, otherwise the file will be opened for access.*/ 
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

  if(!exists) {
    db.run("CREATE TABLE Person (thing TEXT)");
  };
  return 'db has creaed'
};

module.exports.info = "some info"

})()