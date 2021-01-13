var MyCalendar = function () {
    this.calendar = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
    if (this.calendar.length === 0) {
        this.calendar.push([start, end]);
        return true;
    }

    for (let i = 0; i < this.calendar.length; i++) {
        let timeSlot = this.calendar[i];
        let bookStart = timeSlot[0];
        let bookEnd = timeSlot[1];
        if (start < bookEnd && end > bookStart) {
            return false;
        }
    }
    this.calendar.push([start, end]);
    return true;
};
