import { renderContent } from './content-render';
import { Task } from './task-creation';
import { addTask, editTask } from './task-storage';
import { clickedDay, clickedWeek } from './time-stuff';

export function submitNewForm() {
    getNewFormData();
    renderContent(clickedWeek, clickedDay);
}

export function submitEditForm(index) {
    console.log(index);
    getEditFormData(index);
    renderContent(clickedWeek, clickedDay);
}

function getNewFormData() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').checked;
    const duration = Number(document.getElementById('duration').value);
    const task = new Task(title, description, priority, duration);
    addTask(task);
}

function getEditFormData(index) {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').checked;
    const duration = Number(document.getElementById('duration').value);
    const task = new Task(title, description, priority, duration);
    editTask(index, task);
}

export function cancelForm() {
    renderContent(clickedWeek, clickedDay);
}