const kthLargest = (arr, k) => {
    // we would have to do quickSelect
    if (arr.length === 0) return 0;
    const pivot = arr[0];

    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        num <= pivot ? left.push(num) : right.push(num);
    }

    let array;
    if (k > right.length) {
        array = quickSelect(left);
        k = k - right.length;
    } else {
        array = quickSelect(right);
    }

    return array[array.length - k];
    // if the k is bigger than right than that means i need to sort the left
};

const quickSelect = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];

    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];
        num <= pivot ? left.push(num) : right.push(num);
    }

    let leftSort = quickSelect(left);
    let rightSort = quickSelect(right);

    return leftSort.concat(pivot).concat(rightSort);
};
