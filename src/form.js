import { Task } from './task-creation';

export function getNewFormData() {
    const title = document.getElementById('title').value;
    const priority = document.getElementById('priority').checked;
    const duration = Number(document.getElementById('duration').value);
    return new Task(title, priority, duration);
}

export function getEditFormData(index) {
    const title = document.getElementById('title').value;
    const priority = document.getElementById('priority').checked;
    const duration = Number(document.getElementById('duration').value);
    return new Task(title, priority, duration);
}
