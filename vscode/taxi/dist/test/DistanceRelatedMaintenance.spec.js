"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextParser_1 = require("../src/TextParser");
var DistanceRelatedCalc_1 = require("../src/DistanceRelatedCalc");
describe("when car had driven 9500 km", function () {
    it("should get maitenance info on the last 500 km", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/10/05|Porsche|9500|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = DistanceRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});
describe("when car had driven 9501 km", function () {
    it("should get maitenance info on the last 500 km", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/10/05|Porsche|9501|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = DistanceRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});
describe("when car had driven 9499 km", function () {
    it("should get maitenance info on the last 500 km", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/10/05|Porsche|9499|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = DistanceRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).toBeNull();
    });
});
describe("when car had driven 10001 km", function () {
    it("should not get maitenance info", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/10/05|Porsche|10001|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = DistanceRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).toBeNull();
    });
});
describe("when car had driven 19500 km", function () {
    it("should get maitenance info", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0005|2027/01/11|BYD|19500|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = DistanceRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});
