let wordlist = ['APPLE', 'PLEAS', 'PLEASE'];
let keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SALEPRT', 'XAEBKSY'];

// create a hash for the keypads? 
const numKeypadSolutions = (wordlist, keyPads) => {
    let arr = [];

    for (let i = 0; i < keypads.length; i++) {
        let count = 0;
        let keyPad = keyPads[i];
        let key = keyPad[0];

        for (let j = 0; j < wordlist.length; j++) {
            let word = wordlist[j];
            if (!word.includes(key)) continue;
            for (let z = 0; z < word.length; z++) {
                let letter = word[z];
                if (!keyPad.includes(letter)) break;
                if (z === word.length - 1) count += 1;
            }
        }
        arr.push(count);
    }
    return arr;

}

console.log(numKeypadSolutions(wordlist, keypads));
//output = [0, 1, 3, 2, 0]

const numKeypadSolutions = (wordlist, keyPads) => {
    const results = [];
    const newWords = wordlist.join(" ") + " ";
    for (let i = 0; i < keypads.length; i++) {
        const keypad = keypads[i];
        const key = keypad[0];
        let count = 0;
        let charCheck = true;
        let keyCheck = false;
        for (let j = 0; j < newWords.length; j++) {
            let char = newWords[j];
            if (char === key) keyCheck = true;
            if (char !== " " && !keypad.includes(char)) charCheck = false;
            if (char === " " && charCheck && keyCheck) {
                count++;
            }
        }
        results.push(count);
    }
    return results;
};