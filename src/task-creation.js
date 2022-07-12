import { format } from "date-fns";

export class Task {
    constructor (title, description, highPriority, duration ,startWeek, startDay) {
        this.title = title;
        this.description = description;
        this.highPriority = highPriority;
        this.duration = duration;
        this.startWeek = Number(format(new Date(), 'w'));
        this.startDay = Number(format(new Date(), 'e'));
    }
}