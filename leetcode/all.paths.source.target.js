// better solution

var allPathsSourceTarget = function(graph) {
    // n^2 * 2^n
    // n is the number of nodes
    // for every single path - the endnode can be or not in the path
    // n^2 because we need to add it? 
    // space = 2^n
    
    // guy did a queue
    
    // could do it like the keys problem
    
    const queue = [[0]];
    const ans = [];
    
    while (queue.length > 0) {
        const deshift = queue.shift();
        const lastElementCheck = deshift[deshift.length - 1];
        // we needed to check if we hit the same end node;
        
        if (lastElementCheck === graph.length-1 ) {
            ans.push(deshift);
        } else {
            for (let i = 0; i < graph[lastElementCheck].length; i++) {
                const element = graph[lastElementCheck][i];
                const addQueue = [...deshift, element];
                queue.push(addQueue);
            }
        }
    }
    return ans;
}

/*

queue would be the paths and then we check the last element in our element

ex [0] => [0,1] => [0,1,3] => we are basically checkinf if there is any where to go


*/


// my attempted solution - dfe

var allPathsSourceTarget = function (graph) {
    // this would be a dfs or bfs
    // want to create a graph with its neighbors
    const constructedGraph = createGraph(graph);
    let ans = [];

    const initialNeighbors = constructedGraph["0"];
    // console.log(constructedGraph);
    // for (let i = 0; i < initialNeighbors.length; i++) {
    //     const route = [0];
    //     const initial = initialNeighbors[i];
    //     route.push(initial);
    //     route.concat(dfsGraph(graph, initial.toString(), route))
    //     ans.push(route);
    // }
    let arr = [0];
    ans.push(dfsGraph(graph, 0, arr, ans));
    return ans;
};


const dfsGraph = (graph, num, arr, ans, visited = []) => {
    visited.push(num);
    if (graph[num].length === 0) {
        console.log(arr);
        console.log("-----");
        ans.push(visited);
        return;
    }
    for (let i = 0; i < graph[num].length; i++) {
        const check = graph[num][i];
        arr.push(check);
        dfsGraph(graph, check, arr, ans, visited);
        visited = [num];
        arr = [];
    }

    return ans;
};

const createGraph = (graph) => {
    const newGraph = {};

    // index is the neighbors;

    for (let i = 0; i < graph.length; i++) {
        const neighbors = graph[i];
        if (newGraph[i]) {
            for (let j = 0; j < neighbors; j++) {
                newGraph[i].push(neighbors[j]);
            }
        } else {
            newGraph[i] = neighbors;
        }
    }
    return newGraph;
};
