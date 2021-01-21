// The i-th person has weight people[i], and each boat can carry a maximum weight of limit.
// Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.
// Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

// Example 1:
// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)


// Example 2:
// Input: people = [3,2,2,1,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)

// optimal solution
// sort array and pair maximums with minimums
// use two pointers
// move them together
// value is greater than limit and increment 
//not sorted array
// possibly store a hashmap to count how many people i have
// have a counter to know how many boats can be provided


// {0: 1, 1: 2, 2: 2}
// iterate through the value and then check if its compliment is there
// subtract that value -1
// [3,2,2,1], limit = 3
// {0: 0, 1: 1, 2: 0}


// Function boats(array, limit) {
// 	Let check = {};
// 	Let boatCount = 0; //2 
// 	For (let i = 0; i < array.length; i++) {
// 		Let comp = array[i] - limit
// 		If (comp in check) {
// 			Check[comp] += 1;
// 		} else {
// 			Check[comp] = 1;
// 		}
// 	}
// 	For (let j = 0; j < array.length; j++) {
// 		Let comp = array[i] - limit; // 
// 		If (check[comp] > 0) {
// 			Check[comp] -= 1;
// 			If (check[[array][i]] > 0 {
// 				Check[[array[i]] -= 1;
// boatCount += 1;
// }
// 		}
// 	}
// 	Let lastCheck = Object.values(check).filter((val) => val > 0)
// 	For (let z = 0; z < lastCheck.length; z++) {
// 		boatCheck += lastCheck[z]
// 	}
// 	Return boatCheck;
//  }	