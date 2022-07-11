import { expandWeek,showToday, handleDayClick } from './navbar.js';
import { renderContent } from './content-render';
import { renderNewTaskForm } from './task-creation-render';
import { format } from "date-fns/esm";

document.onload = renderNewTaskForm();
// document.onload = renderContent('this', Number(format(new Date(), 'i')));
document.querySelectorAll('.dropdown').forEach(e => e.addEventListener('click', expandWeek));
document.querySelectorAll('.dropdown_content').forEach(e => e.addEventListener('click', handleDayClick));