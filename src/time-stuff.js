import { format, add, sub } from "date-fns/esm";

export const dayOfWeek = Number(format(new Date(), 'i'));
export const weekOfYear = Number(format(new Date(), 'I')); //, { useAdditionalDayOfYearTokens: true }
export let clickedWeek;
export let clickedDay;

export function calculateDate(dataWeek, dataDay) {
    let daysFromToday;
    const weekDifference = dataWeek - weekOfYear;

    if (weekDifference === -1) {
        daysFromToday = dataDay - dayOfWeek - 7;
    } else if (weekDifference === 1) {
        daysFromToday = dataDay - dayOfWeek + 7;
    } else if (weekDifference === 0) {
        daysFromToday = dataDay - dayOfWeek;
    }

    return format((add(new Date(), {days : daysFromToday})), 'EEEE dd/MM');
}

export function setClickedWeekDay(week, day) { //(str, num)
    clickedWeek = week;
    clickedDay = day;

}