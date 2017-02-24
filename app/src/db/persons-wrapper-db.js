(function () {
    'use strict'
     let db;


    module.exports.init = function (personsdb) {
        db = personsdb;
    };

    module.exports.getPersons = function (person, callback) {
        let personlike = person || {};
        let result = {};
        db.find(personlike, function (err, docs){
            callback(docs);
        });
    };

    module.exports.addPerson = function (person, callback) {
        //to be sure it s a new person
        delete person._id;
        db.insert(person,function (err, newDocs){
            callback(newDocs);
        });
    }

    module.exports.updatePerson = function (person, callback) {
        db.update({ _id: person._id }, person, function (err, numReplaced){
            callback(numReplaced);
        });
    };

    module.exports.deletePerson = function (person, callback) {
        db.remove({ _id: person._id }, { multi: true }, function (err, numRemoved) {
            callback(numRemoved);
        });
    };
    // module.exports.init = function (pathTo) {
    //     var fs = require("fs");
    //     var file = pathTo + 'persons.db';
    //     var exists = fs.existsSync(file);
    //     // Type 3: Persistent datastore with automatic loading
    //     db = new Datastore({ filename: file, autoload: true });
    //     if (!exists) {
    //         //creating mocks
    //         var person1 = {
    //             name: 'имя'
    //             , secondName: "фамилия"
    //             , adress: "Какой-то адрес"
    //         };

    //         db.insert(person1, function (err, newDoc) {   // Callback is optional
    //             // newDoc is the newly inserted document, including its _id
    //             // newDoc has no key called notToBeSaved since its value was undefined
    //         });
    //     }
    // }
})()