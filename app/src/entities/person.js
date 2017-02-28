(function () {
    'use strict'

    /**
     * structure of entity
     * Object{field:[aliases]}
     * in aliases - all that possible, first is the most suitable. Empty array means service field
     */
    const structure = {
        _id: [],
        name: ["Имя"],
        secondName: ["Фамилия"],
        christianName: ["Имя при крещении"],
        maidenName: ["Девичья фамилия"],
        dateOfBirth: ["Дата рождения"],
        spouse: [],
        relations: [],
        dateOfcatechumenate: ["Дата оглашения"],
        dateOfBaptism: ["Дата крещения"],
        namesDay: ["День ангела"],
        confessor: [],
        dateOfWedding: ["Дата венчания"],
        address: ["Адрес"],
        dataOfPassport: ["Паспортные данные"],
        dateOfPassport: ["Дата выдачи паспорта"],
        addressOfRegistration: ["Адрес прописки"],
        innNumber: [""],
        phoneNumberHome: ["Номер телефонный домашний"],
        phoneNumberWork: ["Телефонный номер рабочий"],
        cellPhoneNumber: ["Сотовый телефон"],
        work: ["Род занятий"],
        addressOfWork: ["Адрес работы"],
        education: ["Образование"],
        additionalInformationAboutName: ["Дополнительная информация об имени"]
    }

    module.exports.getAssociatedField = function (caption) {
        for (let field in structure) {
            if (structure[field].length > 0) {
                for (let alias in structure[field]) {
                    if (alias === caption) {
                        return field;
                    }
                }
            }
        }
        return "";
    };

    module.exports.create = function () {
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