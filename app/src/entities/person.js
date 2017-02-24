(function(){
    module.exports.create = function(){
       var newbie = {
            id: undefined,
            name: "",
            secondName: "",
            christianName: "",
            maidenName: "",
            dateOfBirth: new Date(),
            spouse: undefined,
            relations: [],
            dateOfcatechumenate: undefined,
            dateOfBaptism: undefined,            
            namesDay: "",
            confessor: undefined,
            dateOfWedding: undefined,
            address: "",
            dataOfPassport: "",
            dateOfPassport: "",
            addressOfRegistration: "",
            innNumber: "",
            phoneNumberHome: "",
            phoneNumberWork: "",
            cellPhoneNumber: "",
            work: "",
            addressOfWork: "",
            education: "",
            additionalInformationAboutName: ""
       };
       return newbie;
    };
})()