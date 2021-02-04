let wordlist = ['APPLE', 'PLEAS', 'PLEASE'];
let keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SALEPRT', 'XAEBKSY'];


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