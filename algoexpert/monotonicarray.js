// my solution
// Const monotonicArray = (array) => {
// 	Let decreasing = false; // true;
// 	Let increasing = false;

// 	Let prev = array[0]; -9001

// 	For (let i = 1; i < array.length; i++) {
// Let check = array[i]; -9001
// 	If (prev === check) continue;

// If (decreasing === false && increasing === false) {
// 	Check > prev ? increasing = true : decreasing = true;
// } else If (decreasing) {
// 	If (check > prev) return false;
// } else if (increasing) {
// 	If (check < prev) return false;
// }
// Prev = check;
// 	}
// 	Return true;
// }

// algo expert email
// function isMonotonic(array) {
//   let nonIncreasing = true;
// 	let nonDecreasing = true;
	
// 	for (let i = 1; i < array.length; i++) {
// 		let prevNum = array[i-1];
// 		let currNum = array[i];
		
// 		if (currNum > prevNum) nonIncreasing = false;
// 		if (currNum < prevNum) nonDecreasing = false;
// 	}
	
// 	return nonIncreasing || nonDecreasing 
// }
