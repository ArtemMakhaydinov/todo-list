import { renderContent } from './content-render';
import { Task } from './task-creation';
import { addTask } from './task-storage';
import { clickedDay, clickedWeek } from './time-stuff';

export function submitForm() {
    getFormData();
    renderContent(clickedWeek, clickedDay);
}

function getFormData() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').checked;
    const duration = document.getElementById('duration').value;
    const task = new Task(title, description, priority, duration, clickedWeek, clickedDay);
    addTask(task);
}

export function cancelForm() {
    renderContent(clickedWeek, clickedDay);
}