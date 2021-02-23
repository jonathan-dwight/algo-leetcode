// const addBinaryStrings = (s1, s2) => {
//   let s1Num = parseInt(s1, 2);
//   let s2Num = parseInt(s2, 2);

//   let sum = s1Num + s2Num;
//   return sum.toString(2);
// }

// like the linkList sum

// i guess with binary strings to convert want to process backwards?
const addBinaryStrings = (s1, s2) => {
    let i = s1.length - 1;
    let j = s2.length - 1;

    let s = "";
    let carry = 0;

    while (i >= 0 || j >= 0) {
        let sum = carry;
        console.log(sum);
        if (i >= 0) {
            sum += parseInt(s1.charAt(i));
            i--;
        }
        if (j >= 0) {
            sum += parseInt(s2.charAt(j));
            j--;
        }

        s += sum % 2;
        carry = Math.floor(sum / 2);
    }

    if (carry) {
        s += carry;
    }

    return s.split("").reverse().join("");
};
