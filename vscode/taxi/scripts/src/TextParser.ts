import { CarInfo } from './CarInfo';

export class TextParser {
    public SubmittedDate: string;
    public CarInfos: Array<CarInfo> = new Array<CarInfo>();

    Parse(userInputContent) {
        var userInputArray = userInputContent.split("\n");
        this.SubmittedDate = userInputArray[0].split(":")[1].trim();
        userInputArray.splice(0, 1);
        userInputArray.forEach(element => {
            this.CarInfos.push(this.CarInfoParser(element));
        });
    };

    CarInfoParser(carInfoString) {
        let infos = carInfoString.split("|");
        let personalService = infos.length == 6 ? infos[5] == "T" ? true : false : false;
        return new CarInfo(infos[0], infos[1], infos[2], +infos[3], infos[4] == "T" ? true : false, personalService);
    };
}