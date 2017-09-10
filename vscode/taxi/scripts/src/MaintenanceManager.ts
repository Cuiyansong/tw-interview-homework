import { CarInfo } from './CarInfo';
import { Calc as TimeCalc } from './TimeRelatedCalc';
import { Calc as DistanceCalc } from './DistanceRelatedCalc';
import { Calc as WriteOffCalc } from './WriteOffCalc';
import { Calc as WroteOffCalc } from './WroteOffCalc';

export class MaintenaceManager {
    public SubmittedDate: string;
    public TimeRelatedCars: Array<CarInfo> = new Array<CarInfo>();
    public DistanceRelatedCars: Array<CarInfo> = new Array<CarInfo>();
    public WriteOffCars: Array<CarInfo> = new Array<CarInfo>();

    constructor(submitedDate) {
        this.SubmittedDate = submitedDate;
    }

    CheckCarStatus(carInfos) {
        carInfos.forEach(element => {
            let wroteOffInfo = WroteOffCalc(element, this.SubmittedDate);
            if (wroteOffInfo != null) {
                return;
            }
            let writeOffInfo = WriteOffCalc(element, this.SubmittedDate);
            if (writeOffInfo != null) {
                this.WriteOffCars.push(writeOffInfo);
                return;
            }
            let distanceRelatedInfo = DistanceCalc(element, this.SubmittedDate);
            if (distanceRelatedInfo != null) {
                this.DistanceRelatedCars.push(distanceRelatedInfo);
                return;
            }
            var timeRelatedInfo = TimeCalc(element, this.SubmittedDate);
            if (timeRelatedInfo != null) {
                this.TimeRelatedCars.push(timeRelatedInfo);
                return;
            }
        });
    }
}