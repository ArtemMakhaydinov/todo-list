import { calculateDate } from "./time-stuff";
import { getDayTasks } from "./task-storage";
import { createDiv } from './html-elements';

const content = document.querySelector('.content');

export function renderContent(dataWeek, dataDay) { //(str, num)
    clearContent();
    renderHead(dataWeek, dataDay);
    renderPriorityBlock('high');
    renderPriorityBlock('low');
    renderTasks(dataWeek, dataDay);
}

export function clearContent() {
    while (content.firstChild) {
        content.firstChild.remove();
    }
}

function renderHead (dataWeek, dataDay) {
    const div = createDiv('content_head', content);
    createDiv('content_head_blank', div)
    renderDate (dataWeek, dataDay, div);
    renderAddButton(div);
}

function renderDate(dataWeek, dataDay, parent) {
    const div = createDiv('content_head_date', parent);
    div.textContent = calculateDate(dataWeek, dataDay);
}

function renderAddButton(parent) {
    const button = createDiv('content_head_add-button', parent);
    button.textContent = '+Add Task';
    button.setAttribute('id', 'add')
}

function renderPriorityBlock(priority) {
    const wrapper = createDiv(`content_${priority}`, content);
}

function renderTasks(dataWeek, dataDay) {
    const dayTasks = getDayTasks(dataWeek, dataDay);
    dayTasks.forEach(task => renderSingleTask(task));
}

function renderSingleTask(obj) {
    const highPrio = document.querySelector('.content_high');
    const lowPrio = document.querySelector('.content_low');
    let wrapper;

    if (obj.highPriority) {
        wrapper = createDiv('content_task', highPrio);
    } else if (!obj.highPriority) {
        wrapper = createDiv('content_task', lowPrio);
    }

    const title = createDiv('content_task_title', wrapper);
    const expiration = createDiv('content_task_expiration', wrapper);
    title.textContent = obj.title;
    expiration.textContent = 'SOON';
}