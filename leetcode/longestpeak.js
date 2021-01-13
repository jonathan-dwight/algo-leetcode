function longestPeak(array) {
    let longest = 0;
    let i = 1;
    while (i < array.length) {
        let peak = array[i] > array[i + 1] && array[i] > array[i - 1];
        if (!peak) {
            i++;
            continue;
        }
        let leftIndex = i - 2;
        while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
            leftIndex--;
        }
        let rightIndex = i + 2;
        while (
            rightIndex < array.length &&
            array[rightIndex] < array[rightIndex - 1]
        ) {
            rightIndex++;
        }
        let currentPeak = rightIndex - leftIndex - 1;
        longest = Math.max(longest, currentPeak);
        i = rightIndex;
    }
    return longest;
}
