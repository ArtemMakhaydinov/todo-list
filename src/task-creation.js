import { clickedWeek, clickedDay } from "./time-stuff";

export class Task {
    constructor(title, description, highPriority, duration) {
        this.title = title;
        this.description = description;
        this.highPriority = highPriority;
        this.duration = duration;
        this.startWeek = clickedWeek;
        this.startDay = clickedDay;
        this.complete = false;
    }
    setTask(obj) {
        this.title = obj.title;
        this.description = obj.description;
        this.priority = obj.priority;
        this.duration = obj.duration;
    }
    setComplete() {
        this.complete ? this.complete = false : this.complete = true;
    }
}

export class Sample {
    setTask(obj) {
        this.title = obj.title;
        this.description = obj.description;
        this.priority = obj.priority;
        this.duration = obj.duration;
    }
    setComplete() {
        this.complete ? this.complete = false : this.complete = true;
    }
}