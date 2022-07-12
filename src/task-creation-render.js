import { createDiv, createInput, createLabel, createTextarea } from './html-elements';
import { clearContent } from './content-render';

export function renderNewTaskForm() {
    clearContent();
    const form = createForm();
    renderTitleForm(form);
    renderDescriptionForm(form);
    renderDurationAndPriority(form);
    renderButtons(form);
}

export function createForm() {
    const form = document.createElement('form');
    const content = document.querySelector('.content');
    form.classList.add('content_form');
    content.appendChild(form);
    return form;
}

function renderTitleForm(parent) {
    const titleDiv = createDiv('content_form_title', parent);
    createLabel('content_form_title_label', 'title', 'Title', titleDiv);
    createInput('content_form_title_input', 'title', 'text', titleDiv);
}

function renderDescriptionForm(parent) {
    const descriptionDiv = createDiv('content_form_description', parent);
    createLabel('content_form_description_label', 'description', 'Description', descriptionDiv);
    createTextarea('content_form_description_input', 'description', descriptionDiv);
}

function renderDurationAndPriority(parent) {
    const div = createDiv('content_form_dur-and-prio', parent);
    renderPriorityForm(div);
    renderDurationForm(div);
}

function renderDurationForm(parent) {
    const durationDiv = createDiv('content_form_duration', parent);
    createLabel('content_form_duration_label', 'duration', 'Duration', durationDiv);
    const durationInput = createInput('content_form_duration_input', 'duration', 'number', durationDiv);
    durationInput.setAttribute('value', 0);
    durationInput.setAttribute('min', 0);
}

function renderPriorityForm(parent) {
    const priorityDiv = createDiv('content_form_priority', parent);
    createLabel('content_form_priority_label', 'priority', 'High Priority', priorityDiv);
    const input = createInput('content_form_priority_input', 'priority', 'checkbox', priorityDiv);
    input.setAttribute('checked', '');
}

function renderButtons(parent) {
    const buttonsDiv = createDiv('content_form_buttons', parent);
    renderAddButton(buttonsDiv);
    renderCancelButton(buttonsDiv);
}

function renderAddButton(parent) {
    const submitButton = createDiv('content_form_button_submit', parent);
    submitButton.textContent = 'Add Task';
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit');
}

function renderCancelButton(parent) {
    const cancelButton = createDiv('content_form_button_cancel', parent);
    cancelButton.textContent = 'Cancel';
    cancelButton.setAttribute('type', 'button');
    cancelButton.setAttribute('id', 'cancel');
}