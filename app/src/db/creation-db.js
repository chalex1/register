(function (imports) {

  'use strict'
  var Datastore = require('nedb');

  /**
   * Create a new db if it doesn't exist
   * @pathToDb - path to place where db 'd be created
   */
  module.exports.create = function (pathToDb) {
    var dbs = {};
    var fs = require("fs");

    var personsFile = pathToDb + '/persons.db';
    var existsPersons = fs.existsSync(personsFile);
    var dbpersons = new Datastore({ filename: personsFile, autoload: true });

    dbs.persons = dbpersons;

    var relationtypesFile = pathToDb + '/relationstypes.db';
    var dbrelationtypes = new Datastore({ filename: relationtypesFile, autoload: true });

    dbs.relationTypes = dbrelationtypes;

    var ceremonyNamesFile = pathToDb + '/ceremonynames.db';
    var dbceremotyNames = new Datastore({ filename: ceremonyNamesFile, autoload: true });

    dbs.ceremonyNames = dbceremotyNames;

    return dbs;
  };


  // module.exports.init = function () {

  //   /*Now after NPM installing the sqlite3 module, you may think the next step is to create this file for use. 
  //   We could create the file and place it in a common place for use...or we could create the file on the fly, which sqlite3 will do for us.
  //    First, however, we need to check if the file exists, which will help us with some operations later.*/
  //   var fs = require("fs");
  //   var file = "register.db";
  //   var exists = fs.existsSync(file);

  //   console.log('File register.db exists: ' + exists);

  //   /* Next we need to connect to our file/database. 
  //   Providing a file that does not exist will cause sqlite3 to create it for us, otherwise the file will be opened for access.*/
  //   var sqlite3 = require("sqlite3").verbose();
  //   var db = new sqlite3.Database(file);

  //   if (!exists) {
  //     db.run("CREATE TABLE Person (thing TEXT)");
  //   };
  //   return 'db has created'
  // };

  // module.exports.info = "some info"

})()