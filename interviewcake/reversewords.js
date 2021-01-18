// You're working on a secret team solving coded transmissions.
// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.
// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴
// Why an array of characters instead of a string?
// The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.
// For example:
//   const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];
// reverseWords(message);
// console.log(message.join(''));
// // Prints: 'steal pound cake'
// JavaScript
// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

function reverseWords(array) {
    let i = 0;
    let j = array.length - 1;

    while (j > i) {
        let temp = array[i];
        let end = array[j];
        // console.log(temp, end)
        array[i] = end;
        array[j] = temp;
        i++;
        j--;
    }
    let holder = 0;
    for (let z = 0; z < array.length; z++) {
        // console.log(z);
        if (array[z] === " ") {
            let check = z - 1;
            while (holder < check) {
                let temp = array[holder];
                let end = array[check];

                array[holder] = end;
                array[check] = temp;
                holder++;
                check--;

            }
            holder = z + 1;
        }

        if (z === array.length - 1) {
            console.log(holder);
            console.log("in here");
            let check = z;
            while (holder < check) {
                let temp = array[holder];
                let end = array[check];
                array[holder] = end;
                array[check] = temp;
                holder++;
                check--;
            }
        }
    }
    return array;
}

const message = [
    "c",
    "a",
    "k",
    "e",
    " ",
    "p",
    "o",
    "u",
    "n",
    "d",
    " ",
    "s",
    "t",
    "e",
    "a",
    "l",
];
console.log(reverseWords(message));
