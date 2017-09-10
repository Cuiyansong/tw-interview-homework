"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextParser_1 = require("../src/TextParser");
var MaintenanceManager_1 = require("../src/MaintenanceManager");
var OutPutManager_1 = require("../src/OutPutManager");
describe("when input first testcase", function () {
    it("should get right output info", function () {
        var userInputValue = "SubmitDate: 2030/09/01\nCAR0001|2025/04/05|Porsche|10000|F\nCAR0002|2029/10/14|Porsche|9000|F\nCAR0003|2026/08/17|Porsche|13000|F\nCAR0004|2027/11/01|BYD|23000|T\nCAR0005|2027/01/11|BYD|19500|F\nCAR0006|2029/07/01|Audi|10001|T\nCAR0007|2028/04/19|Ford|9800|F\nCAR0008|2027/07/10|Ford|15000|T\nCAR0009|2024/10/22|Ford|90300|F\n            ";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var manager = new MaintenanceManager_1.MaintenaceManager(textParser.SubmittedDate);
        manager.CheckCarStatus(textParser.CarInfos);
        var resluts = new OutPutManager_1.OutPutManager().Write(manager);
        expect(resluts).toEqual("\nReminder\n==================\n* Time-related maintenance coming soon...\nAudi: 1 (CAR0006)\nPorsche: 1 (CAR0002)\n\n* Distance-related maintenance coming soon...\nBYD: 1 (CAR0005)\nFord: 1 (CAR0007)\nPorsche: 1 (CAR0001)\n\n* Write-off coming soon...\nBYD: 1 (CAR0004)\nFord: 1 (CAR0009)\n");
    });
});
describe("when input second testcase", function () {
    it("should get right output info", function () {
        var userInputValue = "SubmitDate: 2050/05/01\nCAR0001|2044/05/01|Volkswagen|65535|F\nCAR0002|2044/05/03|BMW|100001|F\nCAR0003|2047/05/02|Mercedes-Benz|37789|T\nCAR0004|2047/05/03|Honda|59908|T\nCAR0005|2049/12/10|Peugeot|49999|F\nCAR0006|2046/11/15|Jeep|2000|F\nCAR0007|2046/11/16|Jeep|5000|F\n            ";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var manager = new MaintenanceManager_1.MaintenaceManager(textParser.SubmittedDate);
        manager.CheckCarStatus(textParser.CarInfos);
        var resluts = new OutPutManager_1.OutPutManager().Write(manager);
        expect(resluts).toEqual("\nReminder\n==================\n* Time-related maintenance coming soon...\nJeep: 2 (CAR0006, CAR0007)\n\n* Distance-related maintenance coming soon...\nPeugeot: 1 (CAR0005)\n\n* Write-off coming soon...\nBMW: 1 (CAR0002)\nHonda: 1 (CAR0004)\n");
    });
});
describe("when input third testcase", function () {
    it("should get right output info", function () {
        var userInputValue = "SubmitDate: 2030/09/01\nCAR0001|2025/04/05|Porsche|10000|F\nCAR0002|2029/10/14|Porsche|9000|F\nCAR0003|2026/07/17|Porsche|13000|F|T\nCAR0004|2027/11/01|BYD|23000|T\nCAR0005|2027/01/11|BYD|19500|F\nCAR0006|2029/07/01|Audi|10001|T\nCAR0007|2028/04/19|Ford|9800|F\nCAR0008|2027/07/10|Ford|15000|T\nCAR0009|2024/10/22|Ford|90300|F\n            ";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var manager = new MaintenanceManager_1.MaintenaceManager(textParser.SubmittedDate);
        manager.CheckCarStatus(textParser.CarInfos);
        var resluts = new OutPutManager_1.OutPutManager().Write(manager);
        expect(resluts).toEqual("\nReminder\n==================\n* Time-related maintenance coming soon...\nAudi: 1 (CAR0006)\nPorsche: 2 (CAR0002, CAR0003)\n\n* Distance-related maintenance coming soon...\nBYD: 1 (CAR0005)\nFord: 1 (CAR0007)\nPorsche: 1 (CAR0001)\n\n* Write-off coming soon...\nBYD: 1 (CAR0004)\nFord: 1 (CAR0009)\n");
    });
});
