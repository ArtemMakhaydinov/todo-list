import { clickedWeek, clickedDay, weekOfYear, dayOfWeek } from "./time-stuff";

export class Task {
    constructor(title, highPriority, duration) {
        this.title = title;
        this.highPriority = highPriority;
        this.duration = duration;
        this.startWeek = clickedWeek;
        this.startDay = clickedDay;
        this.complete = false;
    }
    setTask(obj) {
        this.title = obj.title;
        this.highPriority = obj.highPriority;
        this.duration = obj.duration;
    }
    setComplete() {
        this.complete ? this.complete = false : this.complete = true;
    }
    isExpired() {
        const durationWeeks = Math.floor(this.duration / 7);
        const durationDays = this.duration - durationWeeks * 7;
        const expirationWeek = this.startWeek + durationWeeks;
        const expirationDay = this.startDay + durationDays;
        if (expirationWeek < weekOfYear) {
            return true;
        } else if ( expirationWeek > weekOfYear) {
            return false;
        } else if (expirationWeek == weekOfYear) {
            if (expirationDay < dayOfWeek) {
                return true
            } else {
                return false
            }
        }
    }
}

export class Sample {
    setTask(obj) {
        this.title = obj.title;
        this.highPriority = obj.highPriority;
        this.duration = obj.duration;
    }
    setComplete() {
        this.complete ? this.complete = false : this.complete = true;
    }
    isExpired() {
        const durationWeeks = Math.floor(this.duration / 7);
        const durationDays = this.duration - durationWeeks * 7;
        const expirationWeek = this.startWeek + durationWeeks;
        const expirationDay = this.startDay + durationDays;
        if (expirationWeek < weekOfYear) {
            return true;
        } else if ( expirationWeek > weekOfYear) {
            return false;
        } else if (expirationWeek == weekOfYear) {
            if (expirationDay < dayOfWeek) {
                return true
            } else {
                return false
            }
        }
    }
}