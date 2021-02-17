function hasSingleCycle(array) {
    // Write your code here.
    // represents a jump per index
    // if at end of array and mattering index we can modulo?
    // subtract one to get where the index is

    // can start at any direction
    // have helper function todo an iteration on each?
    // for (let i = 0; i < array.length; i++) {
    let checkIdx = checkCycle(array, 0);
    if (checkIdx) return true;
    return false;
}

// helper function

function checkCycle(array, idx) {
    const visited = new Set();
    visited.add(idx);
    let idxSection = idx; // 0
    let jumpValue = array[idxSection]; // 2
    let check = true;

    while (check) {
        check = false;
        let checkIdx = jumpValue + idxSection;

        if (checkIdx < 0) {
            checkIdx = checkIdx % array.length;
            checkIdx = array.length + checkIdx;
        } else if (checkIdx > array.length - 1) {
            checkIdx = checkIdx % array.length;
        }

        idxSection = checkIdx;
        jumpValue = array[idxSection];

        if (visited.has(idxSection)) {
            return false;
        } else {
            visited.add(idxSection);
            check = true;
        }
        if (visited.size === array.length) {
            console.log(idxSection);
            checkIdx = jumpValue + idxSection;
            if (checkIdx < 0) {
                checkIdx = checkIdx % array.length;
            } else if (checkIdx > array.length - 1) {
                checkIdx = checkIdx % array.length;
            }
            console.log(visited);
            console.log(checkIdx, idx);
            if (Math.abs(checkIdx) === idx) return true;
            return false;
        }
    }
}