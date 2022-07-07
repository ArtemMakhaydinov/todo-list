export class Task {
    constructor (title, description, priority, startWeek, startDay, lastsDays) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.startDay = startDay;
        this.lastsDays = lastsDays;
    }
}