const canVisitAllRooms = (rooms) => {
    if (rooms[0].length === 0) return false;

    const queue = [];

    const firstRoom = rooms[0];
    for (let i = 0; i < firstRoom.length; i++) {
        queue.push(firstRoom[i]);
    }

    const checkSet = new Set();
    checkSet.add(0); // add the first room

    while (queue.length > 0) {
        let roomCheck = queue.shift();
        checkSet.add(roomCheck);
        let openRoom = rooms[roomCheck];

        for (let j = 0; j < openRoom.length; j++) {
            queue.push(openRoom[j]);
        }
    }

    return checkSet.size === rooms.length;
};
