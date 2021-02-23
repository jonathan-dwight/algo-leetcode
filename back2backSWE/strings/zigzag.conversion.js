const zigzag = (s, rows) => {
    if (rows === 1) return s;
    const arr = Array.from(new Array(rows), () => new Array());

    let char = 0;
    let i = 0;
    let increasing = true;

    while (char < s.length) {
        if (i === rows - 1) {
            increasing = false;
        } else if (i === 0) {
            increasing = true;
        }
        if (increasing) {
            arr[i].push(s[char]);
            char++;
            i++;
        } else {
            arr[i].push(s[char]);
            char++;
            i--;
        }
    }

    const newArr = [].concat(...arr);
    return newArr.join("");
};
