import { } from 'jest';
import { CarInfo } from '../src/CarInfo';
import { TextParser } from '../src/TextParser';
import { Calc } from '../src/WroteOffCalc';

describe("when car had been wrote off", () => {
    it("should get car info", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0008|2027/07/10|Ford|15000|T";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });

    it("should get car info when has two leap year", () => {
        let userInputValue = "SubmitDate: 2050/05/01" + "\n" + "CAR0001|2044/05/01|Volkswagen|65535|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });

    it("should get car info when has one leap year", () => {
        let userInputValue = "SubmitDate: 2050/05/01" + "\n" + "CAR0003|2047/05/02|Mercedes-Benz|37789|T";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });

    it("should not get car info when has one leap year and one leap month", () => {
        let userInputValue = "SubmitDate: 2050/05/01" + "\n" + "CAR0004|2047/05/03|Honda|59908|T";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).toBeNull();
    });
});