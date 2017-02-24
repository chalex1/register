(function () {
    'use strict'
    const xlsx = require('xlsx');
    /*
    see the demo: http://oss.sheetjs.com/js-xlsx/
    see the page: https://www.npmjs.com/package/xlsx
    */
    /**
     * parse xls according to column columnmap
     * @param {columnxls:field}
     */
    module.exports.parse = function (filepath, columnmap) {

        var workbook = xlsx.readFile(filepath);
        var rowObjectArray;
        for (let i = 0; i < workbook.SheetNames.length; i++) {
            var sheet = workbook.SheetNames[i];
            rowObjectArray = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
            //needs only first
            break;
        }
        return rowObjectArray;
        //todo according to columnmap

    };
    module.exports.getcolumnmap = function (filepath) {

    };
})()