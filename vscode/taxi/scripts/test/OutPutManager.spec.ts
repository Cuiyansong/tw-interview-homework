import { } from 'jest';
import { CarInfo } from '../src/CarInfo';
import { TextParser } from '../src/TextParser';
import { MaintenaceManager } from '../src/MaintenanceManager';
import { OutPutManager } from '../src/OutPutManager';

describe("when user input car informations", () => {
    it("should get output info and with ordered brand", () => {
        let userInputValue =
            "SubmitDate: 2030/09/01" + "\n" +
            "CAR0001|2025/04/05|Porsche|10000|F" + "\n" +
            "CAR0002|2029/10/14|Porsche|9000|F" + "\n" +
            "CAR0003|2026/08/17|Porsche|13000|F" + "\n" +
            "CAR0004|2027/11/01|BYD|23000|T" + "\n" +
            "CAR0005|2027/01/11|BYD|19500|F" + "\n" +
            "CAR0006|2029/07/01|Audi|10001|T" + "\n" +
            "CAR0007|2028/04/19|Ford|9800|F" + "\n" +
            "CAR0008|2027/07/10|Ford|15000|T" + "\n" +
            "CAR0009|2024/10/22|Ford|90300|F";

        let textParser = new TextParser();
        textParser.Parse(userInputValue);
        var manager = new MaintenaceManager(textParser.SubmittedDate);
        manager.CheckCarStatus(textParser.CarInfos);
        let resluts = new OutPutManager().Write(manager);

        expect(resluts).toEqual(
`
Reminder
==================
* Time-related maintenance coming soon...
Audi: 1 (CAR0006)
Porsche: 1 (CAR0002)

* Distance-related maintenance coming soon...
BYD: 1 (CAR0005)
Ford: 1 (CAR0007)
Porsche: 1 (CAR0001)

* Write-off coming soon...
BYD: 1 (CAR0004)
Ford: 1 (CAR0009)
`);
    });

    it("should get output info and two same brand", () => {
        let userInputValue =
            "SubmitDate: 2030/09/01" + "\n" +
            "CAR0001|2029/10/14|Porsche|9000|F" + "\n" +
            "CAR0002|2029/10/14|Porsche|9000|F";

        let textParser = new TextParser();
        textParser.Parse(userInputValue);
        var manager = new MaintenaceManager(textParser.SubmittedDate);
        manager.CheckCarStatus(textParser.CarInfos);
        let resluts = new OutPutManager().Write(manager);

        expect(resluts).toEqual(
`
Reminder
==================
* Time-related maintenance coming soon...
Porsche: 2 (CAR0001, CAR0002)

* Distance-related maintenance coming soon...


* Write-off coming soon...

`);
    });
});