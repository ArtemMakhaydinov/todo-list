import { Div, Input, Label} from './html-elements';
import { taskStorage } from './task-storage';

export function renderTitleForm(parent, index) {
    const div = (new Div('content_form_title', parent)).create();
    const label = (new Label('content_form_title_label', 'title', 'Title', div.element)).create();
    const input = (new Input('content_form_title_input', 'title', 'text', div.element)).create();
    input.element.setAttribute('required', '');
    input.element.setAttribute('maxlength', '70');
    if (typeof index !== 'undefined') {
        input.element.value = taskStorage[index].title;
    }
}

export function renderDurationAndPriority(parent, index) {
    const div = (new Div('content_form_dur-and-prio', parent)).create();
    renderPriorityForm(div.element, index);
    renderDurationForm(div.element, index);
}

function renderDurationForm(parent, index) {
    const div = (new Div('content_form_duration', parent)).create();
    const label = (new Label('content_form_duration_label', 'duration', 'Duration', div.element)).create();
    const input = (new Input('content_form_duration_input', 'duration', 'number', div.element)).create();
    input.element.setAttribute('value', 0);
    input.element.setAttribute('min', 0);
    if (typeof index !== 'undefined') {
        input.element.value = taskStorage[index].duration;
    }
}

function renderPriorityForm(parent, index) {
    const div = (new Div('content_form_priority', parent)).create();
    const label = (new Label('content_form_priority_label', 'priority', 'High Priority', div.element)).create();
    const input = (new Input('content_form_priority_input', 'priority', 'checkbox', div.element)).create();
    input.element.setAttribute('checked', '');
    if (typeof index !== 'undefined') {
        input.element.checked = taskStorage[index].highPriority;
    }
}

export function renderButtons(parent, index) {
    const div = (new Div('content_form_buttons', parent)).create();
    renderAddButton(div.element, index);
    renderCancelButton(div.element);
}

function renderAddButton(parent, index) {
    const input = (new Input('content_form_button_submit', 'submit_new', 'submit', parent)).create();
    input.element.setAttribute('value', 'Add Task');
    if (typeof index !== 'undefined') {
        input.element.dataset.index = index;
        input.element.setAttribute('value', 'Edit Task');
        input.element.setAttribute('id', 'submit_edit');
    }
}

function renderCancelButton(parent) {
    const div = (new Div('content_form_button_cancel', parent)).create();
    div.element.textContent = 'Cancel';
    div.element.setAttribute('type', 'button');
    div.element.setAttribute('id', 'cancel_form');
}