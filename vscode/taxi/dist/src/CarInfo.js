"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarInfo = /** @class */ (function () {
    function CarInfo(number, purchusDate, brand, miles, bigFixed, personalService) {
        if (personalService === void 0) { personalService = false; }
        this.number = number;
        this.purchusDate = purchusDate;
        this.brand = brand;
        this.miles = miles;
        this.bigFixed = bigFixed;
        this.personalService = personalService;
        this.Number = number;
        this.PurchusDate = purchusDate;
        this.Brand = brand;
        this.Miles = miles;
        this.BigFixed = bigFixed;
        this.PersonalService = personalService;
    }
    return CarInfo;
}());
exports.CarInfo = CarInfo;
