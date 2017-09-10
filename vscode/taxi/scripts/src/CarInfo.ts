export class CarInfo {
    Number: string;
    PurchusDate: string;
    Brand: string;
    Miles: number;
    BigFixed: boolean;
    PersonalService: boolean;

    constructor(public number: string, public purchusDate: string,
        public brand: string, public miles: number, public bigFixed: boolean,
        public personalService = false) {

        this.Number = number;
        this.PurchusDate = purchusDate;
        this.Brand = brand;
        this.Miles = miles;
        this.BigFixed = bigFixed;
        this.PersonalService = personalService;
    }
}