import { clickedWeek, clickedDay } from "./time-stuff";

export class Task {
    constructor (title, description, highPriority, duration) {
        this.title = title;
        this.description = description;
        this.highPriority = highPriority;
        this.duration = duration;
        this.startWeek = clickedWeek;
        this.startDay = clickedDay;
    }
}