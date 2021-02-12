// MY SOLUTION o(n^2) - time o(n + m) - space;

function validStartingCity(distances, fuel, mpg) {
    // Write your code here.
    // fuel is mpg * fuel
    // 30 -15 = 15
    // 25 - 5 = 20
    // 40 -25 = 15
    // 25 - 15 = 10
    // 10 - 10 = 0 - want to be able to travel to all cities

    for (let i = 0; i < distances.length; i++) {
        let newArr;
        let newFuel;
        i === 0
            ? (newArr = distances)
            : (newArr = distances.slice(i).concat(distances.slice(0, i)));
        i === 0
            ? (newFuel = fuel)
            : (newFuel = fuel.slice(i).concat(fuel.slice(0, i)));
        let checkDis = checkDistance(newArr, newFuel, mpg);
        if (checkDis) return i;
    }
    return -1;
}

// helper function to return true or false if hit to the end

function checkDistance(arr, fuel, mpg) {
    let currFuel = 0;

    for (let i = 0; i < arr.length; i++) {
        currFuel += mpg * fuel[i];
        currFuel -= arr[i];
        if (currFuel < 0) return false;
    }

    return true;
}


// ALGO EXPERT - SOLUTION o(n) o(1);

function validStartingCity(distances, fuel, mpg) {
    const numberOfCities = distances.length;
    let milesRemaining = 0;

    let indexOfStartingCityCandidate = 0;
    let milesRemainingAtStartingCityCandidate = 0;

    for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
        const distanceFromPreviousCity = distances[cityIdx - 1];
        const fuelFromPreviousCity = fuel[cityIdx - 1];

        milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity;

        if (milesRemaining < milesRemainingAtStartingCityCandidate) {
            milesRemainingAtStartingCityCandidate = milesRemaining;
            indexOfStartingCityCandidate = cityIdx;
        }
    }

    return indexOfStartingCityCandidate;
}