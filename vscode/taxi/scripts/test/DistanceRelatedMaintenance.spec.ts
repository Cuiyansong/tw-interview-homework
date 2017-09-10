import { } from 'jest';
import { CarInfo } from '../src/CarInfo';
import { TextParser } from '../src/TextParser';
import { Calc } from '../src/DistanceRelatedCalc';

describe("when car had driven 9500 km", () => {
    it("should get maitenance info on the last 500 km", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/10/05|Porsche|9500|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});

describe("when car had driven 9501 km", () => {
    it("should get maitenance info on the last 500 km", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/10/05|Porsche|9501|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});

describe("when car had driven 9499 km", () => {
    it("should get maitenance info on the last 500 km", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/10/05|Porsche|9499|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).toBeNull();
    });
});

describe("when car had driven 10001 km", () => {
    it("should not get maitenance info", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/10/05|Porsche|10001|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).toBeNull();
    });
});

describe("when car had driven 19500 km", () => {
    it("should get maitenance info", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0005|2027/01/11|BYD|19500|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});



