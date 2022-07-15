import { storeTasksLocally, taskStorage, addTask, resortTasks } from "./task-storage";
import { clearContent, renderHead, renderTasks, content } from './content-render';
import { collapseWeek, showClickedDay } from './navbar';
import { Div, Form } from "./html-elements";
import { setClickedWeekDay } from "./time-stuff";
import { getNewFormData, getEditFormData } from './form';
import { renderTitleForm, renderDurationAndPriority, renderButtons} from './task-creation-render';

export function renderContent() {
    clearContent();
    renderHead();
    (new Div('content_high', content)).create();
    (new Div('content_low', content)).create();
    renderTasks();
}

export function expandWeek() {
    collapseWeek();
    const week = this.dataset.week;
    const days = document.querySelectorAll(`.${week}_week_day`);
    days.forEach(day => day.classList.add('dropdown_show'));
}

export function handleDayClick() {
    setClickedWeekDay(Number(this.dataset.week), Number(this.dataset.day));
    renderContent(Number(this.dataset.week), Number(this.dataset.day));
    showClickedDay.call(this);
}

export function submitNewForm() {
    const task = getNewFormData();
    addTask(task);
    resortTasks();
    renderContent();
}

export function submitEditForm(index) {
    const editedTask = getEditFormData(index);
    taskStorage[index].setTask(editedTask);
    resortTasks();
    renderContent();
}

export function renderNewTaskForm() {
    clearContent();
    const content = document.querySelector('.content');
    const form = (new Form('content_form', content)).create();
    renderTitleForm(form.element);
    renderDurationAndPriority(form.element);
    renderButtons(form.element);
}

export function renderEditTaskForm(index) {
    clearContent();
    const content = document.querySelector('.content');
    const form = (new Form('content_form', content)).create();
    renderTitleForm(form.element, index);
    renderDurationAndPriority(form.element, index);
    renderButtons(form.element, index);
}

export function handleCompleteClick(index) {
    taskStorage[index].setComplete();
    storeTasksLocally();
    renderContent()
}