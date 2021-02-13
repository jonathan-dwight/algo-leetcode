// attempted solution

// MY ATTEMPT failed some test cases
function reverseWordsInString(string) {
  // Write your code here.
	
	let newString = "";
	let right = 0;
	
	let newWord = "";
	
	while (right < string.length) {
		let rightChar = string[right];
		
		if (rightChar === " ") {
			newString = newWord + " " + newString.trim();
			newWord = "";
		} else {
			newWord += rightChar;
		}
		
		if (right === string.length - 1) {
			newString = newWord + " " + newString;
		}
		right++;
	}
  return newString.trim();
}


function reverseWordsInString(string) {
    const words = [];

    let startOfWord = 0;

    for (let idx = 0; idx < string.length; i++) {
        const character = string[idx];

        if (character === " ") {
            words.push(string.slice(startOfWord, idx));
            startOfWord = idx;
        } else if (string[startOfWord] === " ") {
            words.push(" ");
            startOfWord = idx;
        }
    }

    words.push(string.slice(startOfWord));

    reverseList(words);
    return words.join(' ');
}

function reverseList(list) {
    let start = 0;
    let end = list.length - 1;

    while (start < end) {
        const temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start++;
        end++;
    }
}