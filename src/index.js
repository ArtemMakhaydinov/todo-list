import { expandWeek, handleDayClick, setNavbar } from './navbar.js';
import { renderContent } from './content-render';
import { renderNewTaskForm } from './task-creation-render';
import { dayOfWeek, setClickedWeekDay, weekOfYear } from './time-stuff.js';
import { cancelForm, submitForm } from './form';

document.onload = setClickedWeekDay(weekOfYear, dayOfWeek)
document.onload = setNavbar();
document.onload = renderContent(weekOfYear, dayOfWeek);
document.querySelectorAll('.dropdown').forEach(e => e.addEventListener('click', expandWeek));
document.querySelectorAll('.dropdown_content').forEach(e => e.addEventListener('click', handleDayClick));
document.addEventListener('click', function (event) {
    const title = document.getElementById('title');
    if (event.target && event.target.id === 'submit' && title.value) {
        submitForm();
    } else if (event.target && event.target.id === 'cancel') {
        cancelForm();
    } else if (event.target && event.target.id === 'add') {
        renderNewTaskForm();
    }
});