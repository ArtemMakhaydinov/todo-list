export class Task {
    constructor (title, description, priority, startWeek, startDay, lastsDays) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.startWeek = startWeek;
        this.startDay = startDay;
        this.lastsDays = lastsDays;
    }
}