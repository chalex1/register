(function () {
    'use strict'
    const dbcreation = require('./creation-db');
    const db = dbcreation.create('./db');

    const personsWrapper = require('./persons-wrapper-db');
    personsWrapper.init(db.persons);

    const mocks = require('./mocks-db');
    personsWrapper.addPerson(mocks.createPersonsMocks(), function () { })

    /**
     * get all persons like personLike
     * @param  personLike - 
     * @param  callback - function(newPersons:Array)
     */
    module.exports.getPersons = function (personLike, callback) {
        personsWrapper.getPersons(personLike, callback);
    };

    module.exports.addPerson = function (person, callback) {
        personsWrapper.addPerson(person, callback);
    }

    module.exports.updatePerson = function (person, callback) {
        personsWrapper.updatePerson(person, callback);
    };

    module.exports.deletePerson = function (person, callback) {
        personsWrapper.delete(person, callback);
    };




})()