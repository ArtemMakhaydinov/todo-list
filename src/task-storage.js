import { Sample, Task } from "./task-creation";
import { dayOfWeek, weekOfYear } from "./time-stuff";

export let taskStorage = [];

export function addTask(obj) {
    obj.index = taskStorage.length;
    taskStorage.push(obj);
    resortTasks();
}

export function getDayTasks(week, day) {
    const dayTasks = taskStorage.filter(task => findDayTasks(week, day, task));
    return dayTasks;
}

function findDayTasks(week, day, task) {
    const dayDifference = day - dayOfWeek - (week - weekOfYear) * 7;
    const taskStartDifference = task.startDay - dayOfWeek - (task.startWeek - weekOfYear) * 7;
    if (dayDifference >= taskStartDifference &&
        dayDifference <= (taskStartDifference + task.duration)) {
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

export function editTask(index, obj) {
    const task = taskStorage[index];
    task.title = obj.title;
    task.description = obj.description;
    task.priority = obj.priority;
    task.duration = obj.duration;
}

function storeTasksLocally() {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(taskStorage));
}

export function getTasksLocally() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.map(task => {
            task = Object.assign(Sample, task)
            console.log(task);
            taskStorage.push(task)
        })
    }
}

