"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Calc(carInfo, submitDateString) {
    var submitDateTime = new Date(submitDateString);
    var purchusDateTime = new Date(carInfo.PurchusDate);
    var purchusMonth = purchusDateTime.getMonth() + 1;
    var submitMonth = submitDateTime.getMonth() + 1;
    if (carInfo.BigFixed || carInfo.PersonalService) {
        var maintenanceMonths = [purchusMonth % 12, (purchusMonth + 3) % 12, (purchusMonth + 6) % 12, (purchusMonth + 9) % 12].map(function (month) {
            return month = 0 ? 12 : month;
        });
        if (maintenanceMonths.some(function (m) { return m - submitMonth == 1 || m - submitMonth == 0; })) {
            return carInfo;
        }
    }
    else {
        if (submitDateTime.getFullYear() - purchusDateTime.getFullYear() < 3) {
            if (purchusMonth - submitMonth == 1 || purchusMonth - submitMonth == 0) {
                return carInfo;
            }
        }
        else {
            var halfYearMaitance = purchusMonth > 6 ? purchusMonth - 6 : purchusMonth + 6;
            if (purchusMonth - submitMonth == 1 ||
                purchusMonth - submitMonth == 0 ||
                halfYearMaitance - submitMonth == 1 ||
                halfYearMaitance - submitMonth == 0) {
                return carInfo;
            }
        }
    }
    return null;
}
exports.Calc = Calc;
