const maxProfit = (prices) => {
    // let table = new Array(prices.length).fill(0);

    // // want to be able to grab the max at each difference
    // // table[0] = prices[0];
    // // table[i-1] = math.max
    // let globalMax = 0;
    // // need somethign to check the buy price
    // for (let i = 1; i < prices.length; i++) {

    //   let checkDiff = prices[i] - prices[i-1];
    //   console.log(table, checkDiff);
    //   table[i] = Math.max(0, table[i-1] + checkDiff); // this is saying i bought at this day
    //   globalMax = Math.max(globalMax, table[i]);
    // }

    // return globalMax;

    if (prices.length === 0) return 0;

    let globalMin = prices[0]; //this is the best we can buy at this day
    let globalMax = 0;

    for (let i = 1; i < prices.length; i++) {
        globalMin = Math.min(globalMin, prices[i]); //this is saying is it better to buy on this day
        let profit = prices[i] - globalMin; // this is checking the price if I sell on this day
        globalMax = Math.max(globalMax, profit);
    }

    return globalMax;
};
