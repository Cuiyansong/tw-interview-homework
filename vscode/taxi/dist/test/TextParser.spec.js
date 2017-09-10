"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarInfo_1 = require("../src/CarInfo");
var TextParser_1 = require("../src/TextParser");
describe("when input submit date", function () {
    it("should get submit date", function () {
        var userInputValue = "SubmitDate: 2030/09/01";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        expect(textParser.SubmittedDate).toBe("2030/09/01");
    });
});
describe("when input a submit date and car info string", function () {
    it("should get car number, purchus date, brand, miles, big fixed", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2025/04/05|Porsche|10000|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        expect(textParser.SubmittedDate).toBe("2030/09/01");
        expect(textParser.CarInfos[0]).toEqual(new CarInfo_1.CarInfo("CAR0001", "2025/04/05", "Porsche", 10000, false));
    });
});
describe("when input a submit date and multi car infos string", function () {
    it("should get multi car infos", function () {
        var useInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2025/04/05|Porsche|10000|F" + "\n" + "CAR0006|2029/07/01|Audi|10001|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(useInputValue);
        expect(textParser.SubmittedDate).toBe("2030/09/01");
        expect(textParser.CarInfos[0]).toEqual(new CarInfo_1.CarInfo("CAR0001", "2025/04/05", "Porsche", 10000, false));
        expect(textParser.CarInfos[1]).toEqual(new CarInfo_1.CarInfo("CAR0006", "2029/07/01", "Audi", 10001, true));
    });
});
describe("when input a submit date and multi car infos string and with personal service", function () {
    it("should get car infos", function () {
        var useInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0003|2026/07/17|Porsche|13000|F|T";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(useInputValue);
        expect(textParser.SubmittedDate).toBe("2030/09/01");
        expect(textParser.CarInfos[0]).toEqual(new CarInfo_1.CarInfo("CAR0003", "2026/07/17", "Porsche", 13000, false, true));
    });
});
