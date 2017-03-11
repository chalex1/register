(function () {
    'use strict'

    const personFields = {
        _id: {
            service: true,
            caption: ""
        },
        name: {
            service: false,
            caption: "Имя"
        },
        secondName: {
            service: false,
            caption: "Фамилия"
        },
        christianName: {
            service: false,
            caption: "Имя при крещении"
        },
        maidenName: {
            service: false,
            aption: "Девичья фамилия"
        },
        dateOfBirth: {
            service: false,
            caption: "Дата рождения"
        },
        spouse: {
            service: false,
            caption: ""
        },
        relations: {
            service: false,
            caption: ""
        },
        dateOfcatechumenate: {
            service: false,
            caption: "Дата оглашения"
        },
        dateOfBaptism: {
            service: false,
            caption: "Дата крещения"
        },
        namesDay: {
            service: false,
            caption: "День ангела"
        },
        confessor: {
            service: false,
            caption: ""
        },
        dateOfWedding: {
            service: false,
            caption: "Дата венчания"
        },
        address: {
            service: false,
            caption: "Адрес"
        },
        dataOfPassport: {
            service: false,
            caption: "Паспортные данные"
        },
        dateOfPassport: {
            service: false,
            caption: "Дата выдачи паспорта"
        },
        addressOfRegistration: {
            service: false,
            caption: "Адрес прописки"
        },
        innNumber: {
            service: false,
            caption: ""
        },
        phoneNumberHome: {
            service: false,
            caption: "Номер телефонный домашний"
        },
        phoneNumberWork: {
            service: false,
            caption: "Телефонный номер рабочий"
        },
        cellPhoneNumber: {
            service: false,
            caption: "Сотовый телефон"
        },
        work: {
            service: false,
            caption: "Род занятий"
        },
        addressOfWork: {
            service: false,
            caption: "Адрес работы"
        },
        education: {
            service: false,
            caption: "Образование"
        },
        additionalInformationAboutName: {
            service: false,
            caption: "Дополнительная информация об имени"
        }
    };

    /**
     * return associated field by caption or empty string
     */
    module.exports.getAssociatedField = function (caption) {
        for (let field in personFields) {
            if (field.caption === caption) {
                return field;
            }
        }
        return "";
    };

    /**
     * returns short view of fields for person
     */
    module.exports.getShortProjection = function (savedProjection) {
        //TODO use user settings and savedProjection
        var projection = {

        };
        //first 5
        let index = 0;
        for (let field in personFields) {
            if (index <= 5)
                projection[field] = 1;
            else
                projection[field] = 0;
            index = index+1;
        }
        return projection;
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