"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Calc(carInfo, submitDateString) {
    var submitDateTime = new Date(submitDateString);
    var purchusDateTime = new Date(carInfo.PurchusDate);
    var submitMonth = submitDateTime.getMonth();
    var writeOffYear = carInfo.BigFixed ? purchusDateTime.getFullYear() + 3 : purchusDateTime.getFullYear() + 6;
    var leapOffset = LeapYearMonthOffset(purchusDateTime.getFullYear(), writeOffYear, purchusDateTime.getDate());
    purchusDateTime.setFullYear(writeOffYear, purchusDateTime.getMonth() + leapOffset.monthOffset);
    var lastMonth = purchusDateTime.getMonth();
    if (purchusDateTime.getFullYear() == submitDateTime.getFullYear() &&
        (lastMonth - submitMonth == 1 || lastMonth - submitMonth == 0)) {
        return carInfo;
    }
    return null;
}
exports.Calc = Calc;
function LeapYearMonthOffset(startYear, endYear, days) {
    var hasLeapYeawr = false;
    var leapDays = 0;
    for (var i = startYear; i <= endYear; i++) {
        if (i % 400 == 0 || i % 4 == 0) {
            leapDays++;
        }
    }
    return { monthOffset: days - leapDays <= 0 ? -1 : 0, leapDays: leapDays };
}
