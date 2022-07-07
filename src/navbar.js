import { format } from 'date-fns';

export function expandWeek() {
    collapseWeek();
    const week = this.dataset.week;
    const days = document.querySelectorAll(`.${week}_week_day`);
    days.forEach(day => day.classList.add('dropdown_show'));
}

function collapseWeek() {
    const allDays = document.querySelectorAll('.dropdown_content');
    allDays.forEach(day => day.classList.remove('dropdown_show'));
}

export function showToday () {
    const today = format(new Date(), 'i');
    const thisWeekDays = document.querySelectorAll('.this_week_day');
    thisWeekDays.forEach(day => {
        day.classList.remove('today');
        if(day.dataset.day === today && day.dataset.week === 'this') day.classList.add('today');
    });
}

export function handleDayClick () {
    console.log(this.dataset.day);
    console.log(this.dataset.week);
}