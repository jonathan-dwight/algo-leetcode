var ladderLength = function(beginWord, endWord, wordList) {
    const visited = new Set();
    const queue = [[beginWord, 1]];
    
    while (queue.length > 0) {
        let pair = queue.shift();
        let node = pair[0]
        let nodeCount = pair[1]
        if (!visited.has(node)) {
            visited.add(node);
            if (node === endWord) return nodeCount;
            let neighbors = getWordNeighbors(node, wordList);
            for (let i = 0; i < neighbors.length; i++) {
                queue.push([neighbors[i], nodeCount + 1]);
            }
        }
    }
    return 0;
};

const areNeighbors = (w1, w2) => {
    // if wards are not the same length, return false
    // go through each letter in w1... increment counter for how many letters are different
    // return counter if exactly 1
    
    if (w1.length !== w2.length) return false;
    let counter = 0;
    
    for (let i = 0; i < w1.length; i++) {
        if (w1[i] !== w2[i]) {
            counter++;
            if (counter > 1) return false;
        }
    }
    
    return counter === 1;
}

const getWordNeighbors = (word, wordList) => {
    // compare word to each word in word list
        // call areNeighbors on each
        // if true add to return array
    // Returns an array of all wordds that are one letter away
    
    let neighbors = [];

    for (let i = 0; i < wordList.length; i++) {
        if (areNeighbors(word, wordList[i])) {
            neighbors.push(wordList[i]);
        }
    }
    
    return neighbors;
}

const bfs = (startWord, targetWord, wordList) => {
    // create a visited set to store visited nodes
    // create a queue and put the start node in the queue
    // while the queue is not empty
        // dequeue the first node
        // check if its been visited
        // if not mark it as visited
            // check if its the target node return true if it is
            // put all neighbors in the back of the queue
    // return false
    
    const visited = new Set();
    const queue = [[startWord, 1]];
    
    while (queue.length > 0) {
        let pair = queue.shift();
        let node = pair[0]
        let nodeCount = pair[1]
        if (!visited.has(node)) {
            visited.add(node);
            if (node === targeWord) return nodeCount;
            let neighbors = getWordNeighbors(node, wordList);
            for (let i = 0; i < neighbors.length; i++) {
                queue.push([neighbors[i], nodeCount + 1]);
            }
        }
    }
    return 0;
}
// 3 steps to solving graphs
    // 1 understand what graph, cyclic? unidrected?
    // construct the graph
    // traverse the graph


    // understand problem
    // this is a graph problem
    // edge is a one letter difference in the graph
    // undirected graph
    // this is cyclic
    // unweighted -- no edge weights
    // shortest transformation - BFS
    // graph - node and edges
    // node is word - edges is one letter nuance, 
    // adt - ex stack cause it uses an array
    // data structure - how something is structured in memory and data type
    // graph is an adt -- ex adjacency list, adjacency matrix
    // need get neighbors function

// turn input into a graph
    // define get neighbors function
        // take in a word and word list
        // return all the words in words list that are one letter away

// Traverse from beginning word to end word, counting as we go
    // Breadth First Search



// faster operation
// create the wordList into a Set - unique, unordered, constant time lookup)

//"hit"

// can change each letter with the alphabet?

//set (['hot', 'dog', log, lot, cog])