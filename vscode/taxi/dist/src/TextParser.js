"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarInfo_1 = require("./CarInfo");
var TextParser = /** @class */ (function () {
    function TextParser() {
        this.CarInfos = new Array();
    }
    TextParser.prototype.Parse = function (userInputContent) {
        var _this = this;
        var userInputArray = userInputContent.split("\n");
        this.SubmittedDate = userInputArray[0].split(":")[1].trim();
        userInputArray.splice(0, 1);
        userInputArray.forEach(function (element) {
            _this.CarInfos.push(_this.CarInfoParser(element));
        });
    };
    ;
    TextParser.prototype.CarInfoParser = function (carInfoString) {
        var infos = carInfoString.split("|");
        var personalService = infos.length == 6 ? infos[5] == "T" ? true : false : false;
        return new CarInfo_1.CarInfo(infos[0], infos[1], infos[2], +infos[3], infos[4] == "T" ? true : false, personalService);
    };
    ;
    return TextParser;
}());
exports.TextParser = TextParser;
