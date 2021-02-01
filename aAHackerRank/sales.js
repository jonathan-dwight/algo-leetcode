const cuttingMetalSurplus = (salePrice, costPerCut, lengths) => {
    
    let minimumRevenue = -Infinity;
    let minimumAmount = Math.min(...lengths);

    while (minimumAmount > 0) {
        let pieces = [];
        let cuts = 0;

        for (let i = 0; i < lengths.length; i++) {
            if (lengths[i] / minimumAmount === 0) {
                pieces.push(1);
            } else {
                pieces.push(Math.floor(lengths[i] / minimumAmount))
            }
        }

        for (let j = 0; j < lengths.length; j++) {
            if (lengths[j] % minimumAmount !== 0) {
                cuts += pieces[j];
            } else {
                cuts += pieces[j] - 1;
            }
        }
        pieces = pieces.reduce((acc, curr) => acc + curr);

        let checkRevenue = (salePrice * pieces * minimumAmount) - (cuts * costPerCut)
        if (minimumRevenue < checkRevenue) {
            minimumRevenue = checkRevenue;
        }

        minimumAmount--;
    }

    return minimumRevenue;
}

console.log(cuttingMetalSurplus(10, 1, [1, 10, 3, 26, 103, 59]));