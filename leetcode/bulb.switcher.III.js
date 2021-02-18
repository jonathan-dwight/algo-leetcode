// MY ATTEMPT

// var numTimesAllBlue = function(light) {
//     // this would be like dp problem
//     // checking the previous values
//     // if everything before it is blue

//     // if its already blue no need to count?
//     let table = new Array(light.length).fill(false);
//     let count = 0;

//     for (let i = 0; i < light.length; i++) {
//         let lightCheck = light[i] - 1;
//         // console.log(table);
//         if (table[lightCheck] === true) continue;
//         if (table[lightCheck] === false) {
//             table[lightCheck] = true;
//             if (table.every(val => val === true)) {
//                 count += 1;
//                 return count;
//             }
//             // console.log(lightCheck);
//             for (let j = 0; j <= lightCheck; j++) {
//                 // console.log('in here', table[j]);
//                 if (table[j] !== true) break
//                 if (j === lightCheck) count += 1;
//             }
//         }
//     }
//     return count;

// };

var numTimesAllBlue = function (light) {
    //     let total = 0;
    //     let target = 0;
    //     let moments = 0;

    //     for(let i = 0; i < light.length; i++){
    //         console.log(total, target);
    //         total += light[i];      // add up all the bulbs number
    //         target += i + 1;        // add up the index of each array plus 1

    //         if(total === target) moments++;
    //     }

    //     return moments;

    let rightMost = -1; // keeping track of rightmost bulb turned on
    let count = 0;

    for (let i = 0; i < light.length; i++) {
        // i+1 = number of bumbs if turned on
        if (light[i] > rightMost) {
            // this is only changing if the the iteration idx is higher
            rightMost = light[i];
        }
        if (rightMost === i + 1) {
            // we know all the bulbs are changed if the rightMost === i+1
            count++;
        }
    }
    return count;
};
