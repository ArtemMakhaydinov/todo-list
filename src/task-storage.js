import { findTaskPlace } from "./time-stuff.js";

let taskStorage = [[], [], [], [], [], [], [],
[], [], [], [], [{ title: 'test task', priority: 'high', }, { title: 'test task', priority: 'high', }, { title: 'test task', priority: 'low', }], [], [],
[], [], [], [], [], [], []];

export function addTask(obj) {
    taskStorage[findTaskPlace(obj)].push(obj);
}

export function getDayTasks(dataWeek, dataDay) {
    const index = calculateStorageIndex(dataWeek, dataDay);
    return taskStorage[index];
}

function calculateStorageIndex(dataWeek, dataDay) {
    if (dataWeek === 'last') {
        return (dataDay - 1);
    } else if (dataWeek === 'this') {
        return (dataDay + 6);
    } else if (dataWeek === 'next') {
        return (dataDay + 13);
    }
}