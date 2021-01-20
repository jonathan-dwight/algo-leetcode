var findItinerary = function(tickets) {
    let map = new Map();
    let result = [];
    let numberOfTickets = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (map.has(tickets[i][0])) {
            map.get(tickets[i][0]).push(tickets[i][1]);
            let sortedDestinations = map.get(tickets[i][0]).sort();
            map.set(tickets[i][0], sortedDestinations);
        } else {
            let destinations = [];
            destinations.push(tickets[i][1]);
            map.set(tickets[i][0], destinations);
        }
    }
    result.push("JFK");
    function DFS(key) {
        if (!map.has(key)) return;
        let destinations = map.get(key);
        for (let i = 0; i < destinations.length; i++) {
            let neighbor = destinations[i];
            destinations.splice(i, 1);
            result.push(neighbor);
            numberOfTickets++;
            DFS(neighbor);
            if (tickets.length === numberOfTickets) return;
            destinations.splice(i, 0, neighbor);
            result.pop();
            numberOfTickets--;
        }
    }
    DFS("JFK");

    return result;
}