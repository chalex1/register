(function () {
    'use strict'
    var Datastore = require('nedb'), db = null;


    module.exports.init = function (pathTo) {
        var fs = require("fs");
        var file = pathTo + 'persons.db';
        var exists = fs.existsSync(file);
        // Type 3: Persistent datastore with automatic loading
        db = new Datastore({ filename: file, autoload: true });
        if (!exists) {
            //creating mocks
            var person1 = {
                name: 'имя'
                , secondName: "фамилия"
                , adress: "Какой-то адрес"
            };

            db.insert(person1, function (err, newDoc) {   // Callback is optional
                // newDoc is the newly inserted document, including its _id
                // newDoc has no key called notToBeSaved since its value was undefined
            });
        }
    }
})()