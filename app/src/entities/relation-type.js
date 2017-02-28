(function () {
    'use strict'

    const structure = {
        _id: [],
        name: [""]
    };

    module.exports.equals = function (o1, o2) {
        if (module.exports.isRelationType(o1)
            && module.exports.isRelationType(o2)
            && o1.name === o2.name)
            return true;
        else
            return false;
    };

    module.exports.isRelationType = function (o) {
        if (o.name)
            return true;
        else
            return false;
    };

    module.exports.getStructure = function () {
        return structure;
    }
})()