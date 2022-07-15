import { expandWeek, handleDayClick, setNavbar } from './navbar.js';
import { renderContent } from './content-render';
import { renderNewTaskForm, renderEditTaskForm } from './task-creation-render';
import { clickedDay, clickedWeek, dayOfWeek, setClickedWeekDay, weekOfYear } from './time-stuff.js';
import { cancelForm, submitNewForm, submitEditForm } from './form';
import { getTasksLocally, deleteTask, editTask } from './task-storage.js';

document.onload = setClickedWeekDay(weekOfYear, dayOfWeek)
document.onload = setNavbar();
document.onload = getTasksLocally();
document.onload = renderContent(weekOfYear, dayOfWeek);
document.querySelectorAll('.dropdown').forEach(e => e.addEventListener('click', expandWeek));
document.querySelectorAll('.dropdown_content').forEach(e => e.addEventListener('click', handleDayClick));
document.addEventListener('click', function (event) {
    const title = document.getElementById('title');
    if (event.target && event.target.id === 'submit_new' && title.value) {
        submitNewForm();
    } else if (event.target && event.target.id === 'submit_edit' && title.value){
        submitEditForm(Number(event.target.dataset.index));
    } else if (event.target && event.target.id === 'cancel_form') {
        cancelForm();
    } else if (event.target && event.target.id === 'add') {
        renderNewTaskForm();
    } else if (event.target && event.target.id === 'edit') {
        renderEditTaskForm(Number(event.target.dataset.index));
    } else if (event.target && event.target.id === 'delete') {
        deleteTask(Number(event.target.dataset.index));
        renderContent(clickedWeek, clickedDay);
    } else if (event.target && event.target.id === 'complete') {
        // handleCompleteClick()
    }
});