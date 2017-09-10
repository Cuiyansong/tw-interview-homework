"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextParser_1 = require("../src/TextParser");
var WriteOffCalc_1 = require("../src/WriteOffCalc");
describe("when car didn't have big fixed", function () {
    it("should get maitenance info on last month of 6th year", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0009|2024/10/22|Ford|90300|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = WriteOffCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
    it("should not get maitenance info not on last month of 6th year", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2024/07/05|Porsche|9500|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = WriteOffCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).toBeNull();
    });
});
describe("when car had big fixed", function () {
    it("should get maitenance info on last month of 6th year", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0004|2027/11/01|BYD|23000|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = WriteOffCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
    it("should not get maitenance info not on last month of 6th year", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0004|2027/12/01|BYD|23000|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var result = WriteOffCalc_1.Calc(textParser.CarInfos[0], textParser.SubmittedDate);
        expect(result).toBeNull();
    });
});
