(function () {
    'use strict'
     let db;


    module.exports.init = function (personsdb) {
        db = personsdb;
    };

    module.exports.getPersons = function (person, callback, projection, page, quantity, sortBy) {
        //sorting and pagination
        //db.find({}).sort({ planet: 1 }).skip(1).limit(2).exec(function (err, docs) {});
        //projection
        //db.find({ planet: 'Mars' }, { planet: 1, system: 1, _id: 0 }, function (err, docs) {});


        var personlike = person || {};
        
        
        db.find(personlike, projection, function (err, docs){
            callback(docs, err);
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

})()