import { setNavbar } from './navbar.js';
import { dayOfWeek, setClickedWeekDay, weekOfYear } from './time-stuff.js';
import { getTasksLocally, deleteTask } from './task-storage.js';
import { handleCompleteClick, renderContent, expandWeek, handleDayClick, submitNewForm, 
    submitEditForm, renderNewTaskForm, renderEditTaskForm } from './UI';

document.onload = setClickedWeekDay(weekOfYear, dayOfWeek)
document.onload = setNavbar();
document.onload = getTasksLocally();
document.onload = renderContent();
document.querySelectorAll('.dropdown').forEach(e => e.addEventListener('click', expandWeek));
document.querySelectorAll('.dropdown_content').forEach(e => e.addEventListener('click', handleDayClick));
document.addEventListener('click', function (event) {
    const title = document.getElementById('title');
    if (event.target && event.target.id === 'submit_new' && title.value) {
        submitNewForm();
    } else if (event.target && event.target.id === 'submit_edit' && title.value){
        submitEditForm(Number(event.target.dataset.index));
    } else if (event.target && event.target.id === 'cancel_form') {
        renderContent();
    } else if (event.target && event.target.id === 'add') {
        renderNewTaskForm();
    } else if (event.target && event.target.id === 'edit') {
        renderEditTaskForm(Number(event.target.dataset.index));
    } else if (event.target && event.target.id === 'delete') {
        deleteTask(Number(event.target.dataset.index));
        renderContent();
    } else if (event.target && event.target.id === 'complete') {
        handleCompleteClick(Number(event.target.dataset.index));
    }
});