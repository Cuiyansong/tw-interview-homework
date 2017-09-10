import { } from 'jest';
import { CarInfo } from '../src/CarInfo';
import { TextParser } from '../src/TextParser';
import { Calc } from '../src/TimeRelatedCalc';

describe("when car had driven less than 3 years", () => {
    it("should get maitenance info on maintenance last month", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/10/05|Porsche|10000|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });

    it("should not get maitenance info when not the last maintenance month", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2029/08/05|Porsche|10000|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).toBeNull();
    });
});

describe("when car had driven 3 years", () => {
    it("should get maitenance info on maintenance last month for second half of year", () => {
        let userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2027/10/05|Porsche|10000|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });

    it("should get maitenance info on maintenance last month for first half of year", () => {
        let userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2027/04/05|Porsche|10000|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});

describe("when car had driven more than 3 years", () => {
    it("should get maitenance info on maintenance last month for second half of year", () => {
        let userInputValue = "SubmitDate: 2050/05/01" + "\n" + "CAR0006|2046/11/15|Jeep|2000|F";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});

describe("when car had big fixed", () => {
    it("should get maitenance info on maintenance last month when purchus month is Apri", () => {
        let userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2029/04/04|Porsche|10000|T";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });

    it("should get maitenance info on maintenance last month when purchus month is July", () => {
        let userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2029/07/04|Porsche|10000|T";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });

    it("should get maitenance info on maintenance last month when purchus month is Oct", () => {
        let userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2029/10/04|Porsche|10000|T";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });

    it("should get maitenance info on maintenance last month when purchus month is Jan", () => {
        let userInputValue = "SubmitDate: 2030/03/01" + "\n" + "CAR0001|2029/01/04|Porsche|10000|T";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});

describe("when car had personal serivce", () => {
    it("should get maitenance info on maintenance last month of each three month", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0003|2026/07/17|Porsche|13000|F|T";
        let textParser = new TextParser();
        textParser.Parse(userInputValue);

        let result = Calc(textParser.CarInfos[0], textParser.SubmittedDate);

        expect(result).not.toBeNull();
        expect(textParser.CarInfos[0]).toEqual(result);
    });
});

