// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 
// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.
// Initially, all the rooms start locked (except for room 0). 
// You can walk back and forth between rooms freely.
// Return true if and only if you can enter every room.
// Example 1:
// Input: [[1],[2],[3],[]] 
// Output: true
// Explanation:  
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.
 
// Example 2:
// Input: [[3],[1],[2],[0,1]]
// Output: false
// Explanation: We can't enter the room with number 2 in it

// // tracks which keys are in each index
// {0:[3], 1:[1], 2:[2],3:[0,1]}
// Set that stores the keys we have so far = []
// Set that stores the visited rooms = [0,3,1]
// //iterate through the input once to create the object
// input = [[3],[1],[2],[0,1]]
//   ^             
// When the keys stored is empty, we check if visited rooms length === input size, if not return false, else true









// Const canVisit = (rooms) => {
// 	If (rooms.length === 1) return true;
// 	If (rooms[0].length === 0 && rooms.length > 1) return false;

// 	Let keys = {};
// 	For (let i=0; i<rooms.length;i++) {
// 		keys[i]  = rooms[i];
// 	}
// 	Let storedKeys = [];
// 	Let visitedRooms = newSet();
// 	keys[0].forEach(key=>{
// 		storedKeys.push(key)
// 	}
// 	visitedRooms.add(0);

// 	while(storedKeys.length > 0) {
// 		Let currentKey = storedKeys.shift();
// 		While (visitedRooms.has(currentKey) && storeKeys.length > 0) {
// 			currentKey = storedKeys.shift()
// 		}
// 		If (!(visitedRooms.has(currentKey))){
// 			keys[currentKey].forEach(key=>{
// 			storedKeys.push(key);	
// 		}
// 		vistedRooms.add(currentKey);
// 		}
// 	}
// 	Return visitedRooms.size === rooms.length;
// }

// [[3],[1],[2],[0,1]]
// keys ={0:[3], 1:[1], 2:[2],3:[0,1]}
// storedKeys=[]
// visitedRooms=[0,3,1]
// currentKey = 1 
// Return false;
// Time: o(n*m);
// Space: o(n+m);










// Comments:
// 	-Implementation a bit too complicated
// 	-Correct presentational steps
// 	-Corrections:
// 		Space => is o(n*m) space
// What would n+m look like? One row and one column worth of data	
// 		Could have done without the hash map
// 	-Ask interviewer before destroying input

// 	-What to do when stuck?
// 		-Come up with naive approach at least?
// 		-Go back and aggressively start testing inputs and outputs
// 			-Default inputs and outputs are by design not meant to
// 				Give you insight on solution
// -While doing this, go through list of data structures on your list
// 		-If you still aren’t there, then ask for a hint