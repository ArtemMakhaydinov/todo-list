import { weekOfYear } from "./time-stuff";

let taskStorage = [[], [], [], [], [], [], [],
[{title : 1}], [{title : 2}], [{title : 3}], [{title : 4}], [], [], [],
[], [], [], [], [], [], []];

export function addTask(obj) {
    taskStorage[calculateStorageIndex(obj.startWeek, obj.startDay)].push(obj);
}

export function getDayTasks(dataWeek, dataDay) {
    const index = calculateStorageIndex(dataWeek, dataDay);
    return taskStorage[index];
}

function calculateStorageIndex(week, day) {
    const weekDifference = week - weekOfYear;
    if (weekDifference === -1) {
        return (day - 1);
    } else if (weekDifference === 0) {
        return (day + 6);
    } else if (weekDifference === 1) {
        return (day + 13);
    }
}

export function findTaskPlace(obj) {
    const weekDifference = obj.startWeek - weekOfYear;
    if(weekDifference === -1) {
        return (obj.startDay - 1);
    } else if (weekDifference === 0) {
        return (obj.startDay + 6);
    } else if (weekDifference === 1) {
        return (obj.startDay + 13);
    } else {
        console.log('ERROR with ' + obj);
    }
}
