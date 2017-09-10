"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextParser_1 = require("../src/TextParser");
var WroteOffCalc_1 = require("../src/WroteOffCalc");
describe("when car had been wrote off", function () {
    it("should get car info", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0008|2027/07/10|Ford|15000|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = WroteOffCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
    it("should get car info when has two leap year", function () {
        var userInputValue = "SubmitDate: 2050/05/01" + "\n" + "CAR0001|2044/05/01|Volkswagen|65535|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = WroteOffCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
    it("should get car info when has one leap year", function () {
        var userInputValue = "SubmitDate: 2050/05/01" + "\n" + "CAR0003|2047/05/02|Mercedes-Benz|37789|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = WroteOffCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
    it("should not get car info when has one leap year and one leap month", function () {
        var userInputValue = "SubmitDate: 2050/05/01" + "\n" + "CAR0004|2047/05/03|Honda|59908|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = WroteOffCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).toBeNull();
    });
});
