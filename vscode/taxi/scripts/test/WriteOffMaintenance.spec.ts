import { } from 'jest';
import { CarInfo } from '../src/CarInfo';
import { TextParser } from '../src/TextParser';
import { Calc } from '../src/WriteOffCalc';

describe("when car didn't have big fixed", () => {
    it("should get maitenance info on last month of 6th year", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0009|2024/10/22|Ford|90300|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });

    it("should not get maitenance info not on last month of 6th year", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2024/07/05|Porsche|9500|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).toBeNull();
    });
});

describe("when car had big fixed", () => {
    it("should get maitenance info on last month of 6th year", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0004|2027/11/01|BYD|23000|T";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });

    it("should not get maitenance info not on last month of 6th year", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0004|2027/12/01|BYD|23000|T";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).toBeNull();
    });
});