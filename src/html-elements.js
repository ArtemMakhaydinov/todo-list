export function createDiv(divClass, parent) {
    const div = document.createElement('div');
    div.classList.add(divClass);
    parent.appendChild(div);
    return div;
}

export function createLabel(labelClass, forInput, text, parent) {
    const label = document.createElement('label');
    label.classList.add(labelClass);
    label.setAttribute('for', forInput);
    label.textContent = text;
    parent.appendChild(label);
    return label;
}

export function createInput(inputClass, inputId, inputType, parent) {
    const input = document.createElement('input');
    input.classList.add(inputClass);
    input.setAttribute('id', inputId);
    input.setAttribute('type', inputType);
    parent.appendChild(input);
    return input;
}

export function createForm() {
    const form = document.createElement('form');
    const content = document.querySelector('.content');
    form.classList.add('content_form');
    form.setAttribute('onsubmit', 'getFormData(); return false');
    content.appendChild(form);
    return form;
}

export function createTextarea(textareaClass, textareaId, parent) {
    const textarea = document.createElement('textarea');
    textarea.classList.add(textareaClass);
    textarea.setAttribute('id', textareaId);
    textarea.setAttribute('rows', 5);
    textarea.setAttribute('cols', 20);
    parent.appendChild(textarea);
    return textarea;
}

export function createSpan(spanClass, spanContent, parent) {
    const span = document.createElement('span');
    span.classList.add(spanClass);
    span.textContent = spanContent;
    parent.appendChild(span);
    return span;
}