(function () {
    'use strict'
    const dbcreation = require('./creation-db');
    const db = dbcreation.create('./db');

    const personsWrapper = require('./persons-wrapper-db');
    personsWrapper.init(db.persons);

    const person = require('./../entities/person');

    // const mocks = require('./mocks-db');
    // personsWrapper.addPerson(mocks.createPersonsMocks(), function () { })

    /**
     * get all persons like personLike
     * @param  personLike - 
     * @param  callback - function(newPersons:Array)
     */
    module.exports.getPersonsShort = function (personLike, callback, page, quantity, sortBy) {
        personsWrapper.getPersons(personLike, callback, person.getShortProjection(), page, quantity, sortBy);
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