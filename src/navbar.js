import { renderContent } from './content-render';
import { setClickedWeekDay, weekOfYear, dayOfWeek } from './time-stuff';

export function setNavbar() {
    document.querySelectorAll('.last_week_day').forEach(day => day.dataset.week = weekOfYear - 1);
    document.querySelectorAll('.this_week_day').forEach(day => day.dataset.week = weekOfYear);
    document.querySelectorAll('.next_week_day').forEach(day => day.dataset.week = weekOfYear + 1);
    showToday();
}

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

function showToday() {
    document.querySelectorAll('.this_week_day').forEach(day => {
        day.classList.remove('today');
        if (Number(day.dataset.day) === dayOfWeek) day.classList.add('today', 'clicked');
    });
}

export function handleDayClick() {
    setClickedWeekDay(Number(this.dataset.week), Number(this.dataset.day));
    renderContent(Number(this.dataset.week), Number(this.dataset.day));
    showClickedDay.call(this);
}

function showClickedDay() {
    document.querySelectorAll('.dropdown_content').forEach(day => {
        day.classList.remove('clicked')
    });
    this.classList.add('clicked');
}