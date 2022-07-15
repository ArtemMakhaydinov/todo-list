import { renderContent } from './content-render';
import { setClickedWeekDay, weekOfYear, dayOfWeek } from './time-stuff';

export function setNavbar() {
    document.querySelectorAll('.last_week_day').forEach(day => day.dataset.week = weekOfYear - 1);
    document.querySelectorAll('.this_week_day').forEach(day => day.dataset.week = weekOfYear);
    document.querySelectorAll('.next_week_day').forEach(day => day.dataset.week = weekOfYear + 1);
    showToday();
}

export function collapseWeek() {
    const allDays = document.querySelectorAll('.dropdown_content');
    allDays.forEach(day => day.classList.remove('dropdown_show'));
}

function showToday() {
    document.querySelectorAll('.this_week_day').forEach(day => {
        day.classList.remove('today');
        if (Number(day.dataset.day) === dayOfWeek) day.classList.add('today', 'clicked');
    });
}

export function showClickedDay() {
    document.querySelectorAll('.dropdown_content').forEach(day => {
        day.classList.remove('clicked')
    });
    this.classList.add('clicked');
}