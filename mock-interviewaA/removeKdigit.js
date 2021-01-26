// remove k
// // has two inputs return one
// // inputs = number (number in string form), k =  (interger)
// // remove k digits 
// // output smallest possible value in terms of value

// // return string = 1219
// // 4 
// num = ‘1432219’
// k = 3
// output = ‘1219’

// Num = ‘1576893’ - 153
// K = 4
// Output = “153”

// 1325 k = 1

// 1119 k = 2

// 12345 k = 2

// 12365 k = 2

// 1235 k = 1;

// 43619 k = 3
// 319
// 3



// // remove number if next value is less than current value
// // dont remove number is next value is greater than
// // remove string up until value if k remainders

// // initial iteration to grab current string
// // if k === 0 return string || k === initial k input return sliced string

// // if k < initial k input === reiterate the new string
// // if k remains the same === just slice the new string up to the remainder needed
// 4634556 k = 4
// 345 k = 4
// Const removeKString = (string, k) => {
// 	Let checkVal = k; // 4
// Let newString = “”; // 4
	
// 	Let initial = parseInt(string[0]) // 6
// 	// k = 2
// 	For (let i = 1; i < string.length; i++) {
// 		Let check = parseInt(string[i]); // 
// 		If (initial < check) {
// 	newString+=initial.toString();
// 	k--;
// }
// If (k === 0) return newString;
// Initial = check;  
// 	}
// 	If (k === checkVal) return string.slice(0,string.length - k);
	
// 	// remainder k
// 	let finalString = “”;
// 	Let secondCheck = k;
// 	Let newInitial = parseInt(newString[0])

// 	For (let j = 1; j < newString.length; j++) {
// 		Let newCheck = parseInt(string[j]);
// 		If (newCheck < newInitial) {
// 	finalString+=newCheck.toString();
// 	k--;
// }
// If (k === 0) return finalString;
// newInital = check;
// 	}

// 	If (k === secondCheck) return newString.slice(0,newString.length - k)
// }


// 4634556 k = 4


// // assume that the array is queue
// 4634556 k = 0
// stack = [1,2,]
// qu = [ 1,9]


// stack + qu 

// https://leetcode.com/problems/remove-k-digits/
