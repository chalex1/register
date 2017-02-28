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

})()