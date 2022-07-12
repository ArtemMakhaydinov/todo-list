import { format, add, sub } from "date-fns/esm";

const dayOfWeek = Number(format(new Date(), 'e'));
const weekOfYear = Number(format(new Date(), 'w')); //, { useAdditionalDayOfYearTokens: true }
export let clickedDay;
export let clickedWeek;


export function findTaskPlace(obj) {
    // const storageIndex = ;
    console.log(obj);
    return storageIndex;
}

export function calculateDate(dataWeek, dataDay) {
    dataDay = Number(dataDay);
    let today = format(new Date(), 'EEEE dd/MM/yyyy');
    let daysFromToday;

    if (dataWeek === 'last') {
        daysFromToday = dataDay - dayOfWeek - 7;
        return sub(today, {days : daysFromToday});
    } else if (dataWeek === 'next') {
        daysFromToday = dataDay - dayOfWeek + 7;
        return add(today, {days : daysFromToday});
    } else if (dataWeek === 'this') {
        daysFromToday = dataDay - dayOfWeek;
        return today;
    }
}

export function setClickedWeekDay(week, day) { //(str, num)
    clickedWeek = week;
    clickedDay = day;
}