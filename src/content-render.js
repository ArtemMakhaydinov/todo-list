import { calculateDate } from "./time-stuff";
import { getDayTasks } from "./task-storage";

const content = document.querySelector('.content');

export function renderContent(dataWeek, dataDay) {
    renderDate(dataWeek, dataDay);
    renderPriorityBlock('high');
    renderPriorityBlock('middle');
    renderPriorityBlock('low');
    renderTasks(dataWeek, dataDay);
}

function renderDate(dataWeek, dataDay) {
    let div = createDiv('content_date', content);
    div.textContent = calculateDate(dataWeek, dataDay);
}

function renderPriorityBlock(priority) {
    const wrapper = createDiv(`content_${priority}`, content);
    const textDiv = createDiv(`content_${priority}_text`, wrapper);
    textDiv.textContent = priority[0].toUpperCase + priority.slice(1) + ' Priority Tasks';
}

function renderTasks(dataWeek, dataDay) {
    const dayTasks = getDayTasks(dataWeek, dataDay);
    dayTasks.forEach(task => renderSingleTask(task));
}

function renderSingleTask(obj) {
    const highPrio = document.querySelector('.content_high');
    const middlePrio = document.querySelector('.content_middle');
    const lowPrio = document.querySelector('.content_low');

    if (obj.priority === 'high') {
        const wrapper = createDiv('content_task', highPrio);
    } else if (obj.priority === 'middle') {
        const wrapper = createDiv('content_task', middlePrio);
    } else if (obj.priority === 'low') {
        const wrapper = createDiv('content_task', lowPrio);
    }

    const title = createDiv('content_task_title', wrapper);
    const expiration = createDiv('content_task_expiration', wrapper);
    title.textContent = obj.title;
    expiration.textContent = 'SOON';
}

// ELEMENT FACTORY

function createDiv(divClass, parent) {
    const div = document.createElement('div');
    div.classList.add(divClass);
    parent.appendChild(div);
    return div;
}