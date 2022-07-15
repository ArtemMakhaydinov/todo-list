import { Sample } from "./task-creation";
import { clickedDay, clickedWeek } from "./time-stuff";

export let taskStorage = [];

export function addTask(obj) {
    obj.index = taskStorage.length;
    taskStorage.push(obj);
}

export function getDayTasks() {
    const dayTasks = taskStorage.filter(task => findDayTasks(task));
    return dayTasks;
}

function findDayTasks(task) {
    const clickedValue = clickedDay + clickedWeek * 7;
    const taskStartValue = task.startDay + task.startWeek * 7;
    if (clickedValue >= taskStartValue &&
        clickedValue <= (taskStartValue + task.duration)) {
        return true;
    }
    return false;
}

export function deleteTask(index) {
    taskStorage.splice(index, 1);
    if (taskStorage.length > 0) resortTasks();
}

export function resortTasks() {
    taskStorage.map((task, index) => task.index = index);
    storeTasksLocally()
}

export function storeTasksLocally() {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(taskStorage));
}

export function getTasksLocally() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    
    if (savedTasks) {
        savedTasks.map(obj => {
            const sample = new Sample;
            taskStorage.push(Object.assign(sample, obj));
        })
    }
}