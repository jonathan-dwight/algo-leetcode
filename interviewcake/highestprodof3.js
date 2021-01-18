const highestProductOf = (array) => {
    // has to be the highest product of 3 integers in the array
    // error for less than 3 numbers in array

    // o(n) - space o(n) - time
    let max = Math.max(...arrayOfInts);
    let min = Math.min(...arrayOfInts);
    let posCounts = Array(max + 1).fill(0);
    let negCounts = Array(Math.abs(min) + 1).fill(0);
    for (let i = 0; i < arrayOfInts.length; i++) {
        if (arrayOfInts[i] >= 0) posCounts[arrayOfInts[i]] += 1;
        else negCounts[Math.abs(arrayOfInts[i])] += 1;
    }
    let sorted = [];
    for (i = negCounts.length - 1; i > 0; i--) {
        if (negCounts[i] > 0) {
            while (negCounts[i] > 0) {
                sorted.push(i * -1);
                negCounts[i] -= 1;
            }
        }
    }
    for (i = 0; i < posCounts.length; i++) {
        if (posCounts[i] > 0) {
            while (posCounts[i] > 0) {
                sorted.push(i);
                posCounts[i] -= 1;
            }
        }
    }
    // sorted = arrayOfInts.sort((a,b)=>a-b)
    let negatives = sorted.filter((num) => num < 0);
    let positives = sorted.filter((num) => num > 0);
    if (negatives.length <= 1 || negatives.length === arrayOfInts.length) {
        return getProduct(sorted.slice(sorted.length - 3, sorted.length));
    } else {
        let negativesProd = negatives[0] * negatives[1];
        let secondThirdPositivesProd =
            positives[positives.length - 3] * positives[positives.length - 2];
        if (negativesProd > secondThirdPositivesProd) {
            return negativesProd * positives[positives.length - 1];
        } else {
            return secondThirdPositivesProd * positives[positives.length - 1];
        }
    }

    //placeholder for max value
};

function highestProductOf3(array) {
    if (array.length < 3) throw new Error("invalid input");

    if (array.length === 3) return array[0] * array[1] * array[2];

    let highest = Math.max(array[0], array[1]);
    let lowest = Math.min(array[0], array[1]);

    let highestOfTwo = array[0] * array[1];
    let lowestOfTwo = array[0] * array[1];

    let highestProdOf3 = array[0] * array[1] * array[2];

    for (let i = 2; i < array.length; i++) {
        let current = array[i];

        highestProdOf3 = Math.max(
            highestProdOf3,
            lowestOfTwo * current,
            highestOfTwo * current
        );

        highestOfTwo = Math.max(
            highestOfTwo,
            highest * current,
            lowest * current
        );
        lowestOfTwo = Math.min(
            lowestOfTwo,
            highest * current,
            lowest * current
        );

        highest = Math.max(highest, current);
        lowest = Math.min(lowest, current);
    }

    return highestProdOf3;
}

let arr = [6, 1, 3, 5, 7, 8, 2];

console.log(highestProductOf3(arr));
