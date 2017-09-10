import { } from 'jest';
import { CarInfo } from '../src/CarInfo';
import { TextParser } from '../src/TextParser';

describe("when input submit date", () => {
    it("should get submit date", () => {
        let userInputValue = "SubmitDate: 2030/09/01";
        let textParser = new TextParser();
        
        textParser.Parse(userInputValue);
        
        expect(textParser.SubmittedDate).toBe("2030/09/01");
    });
});

describe("when input a submit date and car info string", () => {
    it("should get car number, purchus date, brand, miles, big fixed", () => {
        let userInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2025/04/05|Porsche|10000|F";
        let textParser = new TextParser();
        
        textParser.Parse(userInputValue);
        
        expect(textParser.SubmittedDate).toBe("2030/09/01");
        expect(textParser.CarInfos[0]).toEqual(new CarInfo("CAR0001", "2025/04/05", "Porsche", 10000, false));
    })
})

describe("when input a submit date and multi car infos string", () => {
    it("should get multi car infos", () => {
        let useInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0001|2025/04/05|Porsche|10000|F" + "\n" + "CAR0006|2029/07/01|Audi|10001|T";
        let textParser = new TextParser();
        
        textParser.Parse(useInputValue);
        
        expect(textParser.SubmittedDate).toBe("2030/09/01");
        expect(textParser.CarInfos[0]).toEqual(new CarInfo("CAR0001", "2025/04/05", "Porsche", 10000, false));
        expect(textParser.CarInfos[1]).toEqual(new CarInfo("CAR0006", "2029/07/01", "Audi", 10001, true));
    })
})

describe("when input a submit date and multi car infos string and with personal service", () => {
    it("should get car infos", () => {
        let useInputValue = "SubmitDate: 2030/09/01" + "\n" + "CAR0003|2026/07/17|Porsche|13000|F|T";
        let textParser = new TextParser();
        
        textParser.Parse(useInputValue);
        
        expect(textParser.SubmittedDate).toBe("2030/09/01");
        expect(textParser.CarInfos[0]).toEqual(new CarInfo("CAR0003", "2026/07/17", "Porsche", 13000, false, true));
    })
})

