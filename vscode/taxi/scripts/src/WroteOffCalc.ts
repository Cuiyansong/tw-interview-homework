import { CarInfo } from './CarInfo';

export function Calc(carInfo, submitDateString) {
    let submitDateTime = new Date(submitDateString);
    let purchusDateTime = new Date(carInfo.PurchusDate);
    let submitMonth = submitDateTime.getMonth();
    let writeOffYear = carInfo.BigFixed ? purchusDateTime.getFullYear() + 3 : purchusDateTime.getFullYear() + 6;
    let leapOffset = LeapYearMonthOffset(purchusDateTime.getFullYear(), writeOffYear, purchusDateTime.getDate(), purchusDateTime.getMonth() + 1);
    
    purchusDateTime.setFullYear(writeOffYear, purchusDateTime.getMonth() + leapOffset.monthOffset);
    let lastMonth = purchusDateTime.getMonth();
    
    if (purchusDateTime.getFullYear() == submitDateTime.getFullYear() &&
        (lastMonth < submitDateTime.getMonth() || (lastMonth == submitDateTime.getMonth() &&
         purchusDateTime.getDate() - leapOffset.leapDays == submitDateTime.getDate()))) {
        return carInfo;
    }
    return null;
}

function LeapYearMonthOffset(startYear, endYear, days, currentMonth) {
    let hasLeapYeawr = false;
    let leapDays = 0;
    for(var i = startYear; i <= endYear; i++) {
        if(i % 400 == 0 || i % 4 == 0) {
            if(i == startYear && currentMonth > 2) {
                continue;
            }
            leapDays++;
        }
    }
    return { monthOffset: days - leapDays <= 0 ? -1 : 0, leapDays: leapDays};
}