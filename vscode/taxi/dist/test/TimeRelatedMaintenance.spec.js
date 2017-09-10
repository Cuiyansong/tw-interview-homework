"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextParser_1 = require("../src/TextParser");
var TimeRelatedCalc_1 = require("../src/TimeRelatedCalc");
describe("when car had driven less than 3 years", function () {
    it("should get maitenance info on maintenance last month", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/10/05|Porsche|10000|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = TimeRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
    it("should not get maitenance info when not the last maintenance month", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/08/05|Porsche|10000|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = TimeRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).toBeNull();
    });
});
describe("when car had driven 3 years", function () {
    it("should get maitenance info on maintenance last month for second half of year", function () {
        var userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2027/10/05|Porsche|10000|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = TimeRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
    it("should get maitenance info on maintenance last month for first half of year", function () {
        var userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2027/04/05|Porsche|10000|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = TimeRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});
describe("when car had driven more than 3 years", function () {
    it("should get maitenance info on maintenance last month for second half of year", function () {
        var userInputValue = "SubmitDate: 2050/05/01" + "\n" + "CAR0006|2046/11/15|Jeep|2000|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = TimeRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});
describe("when car had big fixed", function () {
    it("should get maitenance info on maintenance last month when purchus month is Apri", function () {
        var userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2029/04/04|Porsche|10000|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = TimeRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
    it("should get maitenance info on maintenance last month when purchus month is July", function () {
        var userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2029/07/04|Porsche|10000|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = TimeRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
    it("should get maitenance info on maintenance last month when purchus month is Oct", function () {
        var userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2029/10/04|Porsche|10000|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = TimeRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
    it("should get maitenance info on maintenance last month when purchus month is Jan", function () {
        var userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2029/01/04|Porsche|10000|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = TimeRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});
describe("when car had personal serivce", function () {
    it("should get maitenance info on maintenance last month of each three month", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0003|2026/07/17|Porsche|13000|F|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = TimeRelatedCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});
