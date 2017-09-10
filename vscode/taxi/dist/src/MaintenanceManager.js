"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeRelatedCalc_1 = require("./TimeRelatedCalc");
var DistanceRelatedCalc_1 = require("./DistanceRelatedCalc");
var WriteOffCalc_1 = require("./WriteOffCalc");
var WroteOffCalc_1 = require("./WroteOffCalc");
var MaintenaceManager = /** @class */ (function () {
    function MaintenaceManager(submitedDate) {
        this.TimeRelatedCars = new Array();
        this.DistanceRelatedCars = new Array();
        this.WriteOffCars = new Array();
        this.SubmittedDate = submitedDate;
    }
    MaintenaceManager.prototype.CheckCarStatus = function (carInfos) {
        var _this = this;
        carInfos.forEach(function (element) {
            var wroteOffInfo = WroteOffCalc_1.Calc(element, _this.SubmittedDate);
            if (wroteOffInfo != null) {
                return;
            }
            var writeOffInfo = WriteOffCalc_1.Calc(element, _this.SubmittedDate);
            if (writeOffInfo != null) {
                _this.WriteOffCars.push(writeOffInfo);
                return;
            }
            var distanceRelatedInfo = DistanceRelatedCalc_1.Calc(element, _this.SubmittedDate);
            if (distanceRelatedInfo != null) {
                _this.DistanceRelatedCars.push(distanceRelatedInfo);
                return;
            }
            var timeRelatedInfo = TimeRelatedCalc_1.Calc(element, _this.SubmittedDate);
            if (timeRelatedInfo != null) {
                _this.TimeRelatedCars.push(timeRelatedInfo);
                return;
            }
        });
    };
    return MaintenaceManager;
}());
exports.MaintenaceManager = MaintenaceManager;
