"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextParser_1 = require("../src/TextParser");
var MaintenanceManager_1 = require("../src/MaintenanceManager");
var OutPutManager_1 = require("../src/OutPutManager");
describe("when user input car informations", function () {
    it("should get output info and with ordered brand", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" +
            "CAR0001|2025/04/05|Porsche|10000|F" + "\n" +
            "CAR0002|2029/10/14|Porsche|9000|F" + "\n" +
            "CAR0003|2026/08/17|Porsche|13000|F" + "\n" +
            "CAR0004|2027/11/01|BYD|23000|T" + "\n" +
            "CAR0005|2027/01/11|BYD|19500|F" + "\n" +
            "CAR0006|2029/07/01|Audi|10001|T" + "\n" +
            "CAR0007|2028/04/19|Ford|9800|F" + "\n" +
            "CAR0008|2027/07/10|Ford|15000|T" + "\n" +
            "CAR0009|2024/10/22|Ford|90300|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var manager = new MaintenanceManager_1.MaintenaceManager(textParser.SubmittedDate);
        manager.CheckCarStatus(textParser.CarInfos);
        var resluts = new OutPutManager_1.OutPutManager().Write(manager);
        expect(resluts).toEqual("\nReminder\n==================\n* Time-related maintenance coming soon...\nAudi: 1 (CAR0006)\nPorsche: 1 (CAR0002)\n\n* Distance-related maintenance coming soon...\nBYD: 1 (CAR0005)\nFord: 1 (CAR0007)\nPorsche: 1 (CAR0001)\n\n* Write-off coming soon...\nBYD: 1 (CAR0004)\nFord: 1 (CAR0009)\n");
    });
    it("should get output info and two same brand", function () {
        var userInputValue = "SubmitDate: 2030/09/01" + "\n" +
            "CAR0001|2029/10/14|Porsche|9000|F" + "\n" +
            "CAR0002|2029/10/14|Porsche|9000|F";
        var textParser = new TextParser_1.TextParser();
        textParser.Parse(userInputValue);
        var manager = new MaintenanceManager_1.MaintenaceManager(textParser.SubmittedDate);
        manager.CheckCarStatus(textParser.CarInfos);
        var resluts = new OutPutManager_1.OutPutManager().Write(manager);
        expect(resluts).toEqual("\nReminder\n==================\n* Time-related maintenance coming soon...\nPorsche: 2 (CAR0001, CAR0002)\n\n* Distance-related maintenance coming soon...\n\n\n* Write-off coming soon...\n\n");
    });
});
