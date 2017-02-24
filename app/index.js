// const db = require('./src/db/db-creation');

// alert(db.info);

// console.log('testing working with db');

// db.init();

// const persons = require('./src/db/persons-wrapper');
// persons.init("C:/");
// alert('ok');

const registerDb = require('./src/db/register-db');
const xlsparser = require('./src/import/xlsparser');

registerDb.getPersons({}, function (persons) {
    alert(JSON.stringify(persons));

});

let parsed = xlsparser.parse('example.xlsx');

registerDb.addPerson(parsed, function (added) {
    alert(JSON.stringify(added));
});


