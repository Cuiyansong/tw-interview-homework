"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OutPutManager = /** @class */ (function () {
    function OutPutManager() {
    }
    OutPutManager.prototype.Write = function (manager) {
        var submitDateTime = new Date(manager.SubmitDateString);
        var timeRelated = GetStringTemplate(manager.TimeRelatedCars);
        var distanceRelated = GetStringTemplate(manager.DistanceRelatedCars);
        var writeOff = GetStringTemplate(manager.WriteOffCars);
        var outputTempate = "\nReminder\n==================\n* Time-related maintenance coming soon...\n" + timeRelated + "\n\n* Distance-related maintenance coming soon...\n" + distanceRelated + "\n\n* Write-off coming soon...\n" + writeOff + "\n";
        return outputTempate;
    };
    return OutPutManager;
}());
exports.OutPutManager = OutPutManager;
function GetStringTemplate(carInfos) {
    return carInfos
        .sort(function (a, b) {
        if (a.Brand < b.Brand)
            return -1;
        if (a.Brand > b.Brand)
            return 1;
        return 0;
    })
        .reduce(function (next, info) {
        var sameBrandInfo = next.find(function (i) { return i.Brand === info.Brand; });
        if (sameBrandInfo) {
            sameBrandInfo.Numbers = [sameBrandInfo.Number, info.Number];
            return next;
        }
        next.push(info);
        return next;
    }, [])
        .reduce(function (next, info) {
        var numbers = (info.Numbers || []).join(", ");
        var infoTemplate = !info.Numbers ? info.Brand + ": 1 (" + info.Number + ")" :
            info.Brand + ": " + info.Numbers.length + " (" + numbers + ")";
        next += infoTemplate + "\n";
        return next;
    }, "")
        .trim("\n");
}
