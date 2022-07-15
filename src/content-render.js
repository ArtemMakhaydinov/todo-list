import { calculateDate, clickedWeek, clickedDay, calculateTaskDaysLeft } from "./time-stuff";
import { getDayTasks } from "./task-storage";
import { Div } from './html-elements';

export const content = document.querySelector('.content');

export function renderContent() { //(str, num)
    clearContent();
    renderHead();
    (new Div('content_high', content)).create();
    (new Div('content_low', content)).create();
    renderTasks();
}

export function clearContent() {
    while (content.firstChild) {
        content.firstChild.remove();
    }
}

function renderHead() {
    const div = (new Div('content_head', content)).create();
    const blank = (new Div('content_head_blank', div.element)).create();
    renderDate(div.element);
    renderAddButton(div.element);
}

function renderDate(parent) {
    const div = (new Div('content_head_date', parent)).create();
    div.element.textContent = calculateDate(clickedWeek, clickedDay);
}

function renderAddButton(parent) {
    const button = (new Div('content_head_add-button', parent)).create();
    button.element.textContent = '+Add Task';
    button.element.setAttribute('id', 'add')
}

function renderTasks() {
    const dayTasks = getDayTasks(clickedWeek, clickedDay);
    dayTasks.forEach(task => renderSingleTask(task));
}

function renderSingleTask(obj) {
    const wrapper = renderSingleTaskDiv(obj);
    renderSingleTaskCheckbox(obj, wrapper.element);
    renderSingleTaskTitle(obj, wrapper.element);
    renderSingleTaskEditButton(obj, wrapper.element);
    renderSingleTaskExpiration(obj, wrapper.element);
    renderSingleTaskDeleteButton(obj, wrapper.element);
}

function renderSingleTaskDiv(obj) {
    const highPrio = document.querySelector('.content_high');
    const lowPrio = document.querySelector('.content_low');
    if (obj.highPriority) {
        return (new Div('content_task', highPrio)).create();
    } else if (!obj.highPriority) {
        return (new Div('content_task', lowPrio)).create();
    }
}

function renderSingleTaskCheckbox(obj, parent) {
    const div = (new Div('content_task_complete', parent)).create();
    div.element.setAttribute('data-index', obj.index);
    div.element.setAttribute('id', 'complete');
}

function renderSingleTaskTitle(obj, parent) {
    const div = (new Div('content_task_title', parent)).create();
    div.element.setAttribute('data-index', obj.index);
    div.element.textContent = obj.title;
}

function renderSingleTaskExpiration(obj, parent) {
    const div = (new Div('content_task_expiration', parent)).create();
    div.element.textContent = calculateTaskDaysLeft(obj) + 'd left';
}

function renderSingleTaskEditButton(obj, parent) {
    const div = (new Div('content_task_edit', parent)).create();
    div.element.setAttribute('data-index', obj.index);
    div.element.setAttribute('id', 'edit');
    div.element.textContent = '✎';
}

function renderSingleTaskDeleteButton(obj, parent) {
    const div = (new Div('content_task_delete', parent)).create();
    div.element.setAttribute('data-index', obj.index);
    div.element.setAttribute('id', 'delete');
    div.element.textContent = '⛌';
}