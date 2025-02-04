export class Countdown {
    seconds;
    futureDate;
    intervalId;
    type;
    callback;
    isEnd

    constructor(sec, type , callback) {
        this.seconds = sec;
        this.type = type;
        this.init(this.seconds);
        this.callback = callback;
        this.intervalId = setInterval(() => this.intervalHandler(), 1000);

    }

    init(seconds) {
        this.futureDate = new Date();
        this.futureDate.setSeconds(this.futureDate.getSeconds() + seconds);
    }

    intervalHandler() {
     this.run();
    }

    run() {
        const diff = Math.round((this.futureDate.getTime() - new Date().getTime()) / 1000);

        if (diff <= 0) {
            this.isEnd = true
            this.callback({value:false , isEnd:this.isEnd});
            clearInterval(this.intervalId);
            return false;
        }

        const time = this.calculateTime(diff);
        this.callback({value:this.formatTime(time) , isEnd:this.isEnd});
    }

    calculateTime(diff) {
        const seconds = diff % 60;
        const minutes = Math.floor(diff / 60) % 60;
        const hours = Math.floor(diff / 3600) % 24;
        const days = Math.floor(diff / 86400) % 30;
        const months = Math.floor(diff / 2592000) % 12;
        const years = Math.floor(diff / 31536000);

        return { years, months, days, hours, minutes, seconds };
    }

    formatTime(time) {
        const { years, months, days, hours, minutes, seconds } = time;

        switch (this.type) {
            case "minuteBase":
                return `${this.pad(minutes)}:${this.pad(seconds)}`;
            case "hourBase":
                return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
            case "dayBase":
                return `${this.pad(days)}:${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
            case "monthBase":
                return `${this.pad(months)}:${this.pad(days)}:${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
            case "yearBase":
                return `${this.pad(years)}:${this.pad(months)}:${this.pad(days)}:${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
            default:
                return "Invalid type";
        }
    }

    pad(value) {
        return value < 10 ? `0${value}` : value;
    }
}