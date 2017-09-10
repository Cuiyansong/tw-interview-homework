import { CarInfo } from './CarInfo';

export class OutPutManager {
    Write(manager) {
        let submitDateTime = new Date(manager.SubmitDateString);
        let timeRelated = GetStringTemplate(manager.TimeRelatedCars);
        let distanceRelated = GetStringTemplate(manager.DistanceRelatedCars);
        let writeOff = GetStringTemplate(manager.WriteOffCars);
        let outputTempate =
            `
Reminder
==================
* Time-related maintenance coming soon...
${timeRelated}

* Distance-related maintenance coming soon...
${distanceRelated}

* Write-off coming soon...
${writeOff}
`;
        return outputTempate;
    }
}

function GetStringTemplate(carInfos) {
    return carInfos
        .sort((a, b) => {
            if (a.Brand < b.Brand) return -1;
            if (a.Brand > b.Brand) return 1;
            return 0;
        })
        .reduce((next, info) => {
            let sameBrandInfo = next.find(i => i.Brand === info.Brand);
            if (sameBrandInfo) {
                sameBrandInfo.Numbers = [sameBrandInfo.Number, info.Number];
                return next;
            }
            next.push(info);
            return next;
        }, [])
        .reduce((next, info) => {
            let numbers = (info.Numbers || []).join(", ");
            let infoTemplate = !info.Numbers ? `${info.Brand}: 1 (${info.Number})` :
                `${info.Brand}: ${info.Numbers.length} (${numbers})`;
            next += infoTemplate + "\n";
            return next;
        }, "")
        .trim("\n");
}