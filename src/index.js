import { expandWeek, showToday, handleDayClick } from './navbar.js';
import { renderContent } from './content-render';
import { renderNewTaskForm } from './task-creation-render';
import { setClickedWeekDay } from './time-stuff.js';
import { format } from "date-fns/esm";
import { cancelForm, submitForm } from './form';

document.onload = setClickedWeekDay('this', Number(format(new Date(), 'i')))
document.onload = showToday();
document.onload = renderNewTaskForm();
// document.onload = renderContent('this', Number(format(new Date(), 'i')));
document.querySelectorAll('.dropdown').forEach(e => e.addEventListener('click', expandWeek));
document.querySelectorAll('.dropdown_content').forEach(e => e.addEventListener('click', handleDayClick));
document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'submit') {
        submitForm();
    } else if (event.target && event.target.id === 'cancel') {
        cancelForm();
    }
});