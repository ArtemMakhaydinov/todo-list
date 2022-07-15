export class Div {
    constructor(divClass, parent) {
        this.divClass = divClass;
        this.parent = parent;
    }
    create() {
        this.element = document.createElement('div');
        this.addClass();
        this.append();
        return this;
    }
    addClass() {
        this.element.classList.add(this.divClass);
    }
    append() {
        this.parent.appendChild(this.element);
    }
}

export class Form {
    constructor(formClass, parent) {
        this.formClass = formClass;
        this.parent = parent;
    }
    create() {
        this.element = document.createElement('form');
        this.addClass();
        this.append();
        return this;
    }
    addClass() {
        this.element.classList.add(this.formClass);
    }
    append() {
        this.parent.appendChild(this.element);
    }
}

export class Label {
    constructor(labelClass, forInput, text, parent) {
        this.labelClass = labelClass;
        this.forInput = forInput;
        this.text = text;
        this.parent = parent;
    }
    create() {
        this.element = document.createElement('label');
        this.addClass();
        this.setAttribute();
        this.setTextContent();
        this.append();
        return this;
    }
    addClass() {
        this.element.classList.add(this.labelClass);
    }
    setAttribute() {
        this.element.setAttribute('for', this.forInput);
    }
    setTextContent() {
        this.element.textContent = this.text;
    }
    append() {
        this.parent.appendChild(this.element);
    }
}

export class Input {
    constructor(inputClass, inputId, inputType, parent) {
        this.inputClass = inputClass;
        this.inputId = inputId;
        this.inputType = inputType;
        this.parent = parent;
    }
    create() {
        this.element = document.createElement('input');
        this.addClass();
        this.setAttribute();
        this.append();
        return this;
    }
    addClass() {
        this.element.classList.add(this.inputClass);
    }
    setAttribute() {
        this.element.setAttribute('id', this.inputId);
        this.element.setAttribute('type', this.inputType);
    }
    append() {
        this.parent.appendChild(this.element);
    }
}

export class Textarea {
    constructor(textareaClass, textareaId, parent) {
        this.textareaClass = textareaClass;
        this.textareaId = textareaId;
        this.parent = parent;
    }
    create() {
        this.element = document.createElement('textarea');
        this.addClass();
        this.setAttribute();
        this.append();
        return this;
    }
    addClass() {
        this.element.classList.add(this.textareaClass);
    }
    setAttribute() {
        this.element.setAttribute('id', this.textareaId);
        this.element.setAttribute('rows', 5);
        this.element.setAttribute('cols', 20);
    }
    append() {
        this.parent.appendChild(this.element);
    }
}