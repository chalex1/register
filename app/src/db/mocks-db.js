(function () {
    'use strict'
    const person = require('../entities/person');
    module.exports.createPersonsMocks = function () {
        let persons = [];
        persons.push(person.create());
        return persons;

    };
})()