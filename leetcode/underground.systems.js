// THIS ONLY FAILS THE LAST TEST CASE WITH TIME LIMIT EXCEEDED

var UndergroundSystem = function () {
    this.checkIns = {};
    this.checkOuts = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    if (id in this.checkIns) {
        this.checkIns[id + "added"] = [stationName, t];
    } else {
        this.checkIns[id] = [stationName, t];
    }
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    if (!(id in this.checkIns)) return;
    if (id in this.checkOuts) {
        this.checkOuts[id + "added"] = [stationName, t];
    } else {
        this.checkOuts[id] = [stationName, t];
    }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
    startStation,
    endStation
) {
    let arr = [];

    let checkIn = Object.entries(this.checkIns).filter(
        (val) => val[1][0] === startStation
    );
    let checkOut = Object.entries(this.checkOuts).filter(
        (val) => val[1][0] === endStation
    );

    checkIn.sort((a, b) => parseInt(b[0]) - parseInt(a[0]));
    checkOut.sort((a, b) => parseInt(b[0]) - parseInt(a[0]));

    for (let i = 0; i < checkIn.length; i++) {
        for (let j = 0; j < checkOut.length; j++) {
            if (checkIn[i][0] === checkOut[j][0]) {
                let checkInTime = checkIn[i][1][1];
                let checkOutTime = checkOut[j][1][1];
                arr.push(checkOutTime - checkInTime);
                break;
            }
        }
    }

    const sum = arr.reduce((acc, el) => acc + el);
    return sum / arr.length;
};

// console.log(checkIn);
// console.log(checkOut);
// while (i < checkIn.length) {
//     if (checkIn[i][0] === checkOut[j][0]) {
//         let checkInTime = checkIn[i][1][1];
//         let checkOutTime = checkOut[j][1][1];
//         arr.push(checkOutTime - checkInTime);
//         i++;
//         j = 0;
//         }
//     j++;
// }

// solution online 

var UndergroundSystem = function () {
    this.checkIns = {};
    this.trips = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    this.checkIns[id] = {
        t: t,
        stationName: stationName,
    };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    const route = this.checkIns[id].stationName + "=>" + stationName;

    if (!(route in this.trips)) this.trips[route] = [];
    this.trips[route].push(t - this.checkIns[id].t);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
    startStation,
    endStation
) {
    const route = startStation + "=>" + endStation;

    let sum = 0;

    for (let i = 0; i < this.trips[route].length; i++) {
        sum += this.trips[route][i];
    }

    return sum / this.trips[route].length;
};
