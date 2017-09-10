"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Calc(carInfo, submitDateString) {
    if ((carInfo.Miles % 10000 >= 9500 && carInfo.Miles % 10000 < 10000) || carInfo.Miles % 10000 == 0) {
        return carInfo;
    }
    return null;
}
exports.Calc = Calc;
