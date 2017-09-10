"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextParser_1 = require("../src/TextParser");
var MaintenanceManager_1 = require("../src/MaintenanceManager");
describe("when input with car infomations", function () {
    it("should get maintenance informations", function () {
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
        expect(manager.TimeRelatedCars.length).toBe(2);
        expect(manager.TimeRelatedCars.some(function (c) { return c.Number === "CAR0006"; })).toBeTruthy();
        expect(manager.TimeRelatedCars.some(function (c) { return c.Number === "CAR0002"; })).toBeTruthy();
        expect(manager.DistanceRelatedCars.length).toBe(3);
        expect(manager.DistanceRelatedCars.some(function (c) { return c.Number === "CAR0005"; })).toBeTruthy();
        expect(manager.DistanceRelatedCars.some(function (c) { return c.Number === "CAR0007"; })).toBeTruthy();
        expect(manager.DistanceRelatedCars.some(function (c) { return c.Number === "CAR0001"; })).toBeTruthy();
        expect(manager.WriteOffCars.length).toBe(2);
        expect(manager.WriteOffCars.some(function (c) { return c.Number === "CAR0004"; })).toBeTruthy();
        expect(manager.WriteOffCars.some(function (c) { return c.Number === "CAR0009"; })).toBeTruthy();
    });
});
