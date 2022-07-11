import { format, add, sub } from "date-fns/esm";

const todayOfWeek = Number(format(new Date(), 'i'));
const todayOfYear = Number(format(new Date(), 'D', { useAdditionalDayOfYearTokens: true }));


export function findTaskPlace(obj) {
    const storageIndex = (todayOfWeek + 6) + (obj.startDay - todayOfYear);
    return storageIndex;
}

export function calculateDate(dataWeek, dataDay) {
    dataDay = Number(dataDay);
    let today = format(new Date(), 'EEEE dd/MM/yyyy');
    let daysFromToday;

    if (dataWeek === 'last') {
        daysFromToday = dataDay - todayOfWeek - 7;
        return sub(today, {days : daysFromToday});
    } else if (dataWeek === 'next') {
        daysFromToday = dataDay - todayOfWeek + 7;
        return add(today, {days : daysFromToday});
    } else if (dataWeek === 'this') {
        daysFromToday = dataDay - todayOfWeek;
        return today;
    }
}