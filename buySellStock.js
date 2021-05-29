var maxProfit = function(prices) {
    var min = Number.MAX_SAFE_INTEGER; 
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    
    return max;
};

function maxProfit2(prices) {
    let maxCur = 0, maxSoFar = 0;
    for(let i = 1; i < prices.length; i++) {
        maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
        maxSoFar = Math.max(maxCur, maxSoFar);
    }
    return maxSoFar;
}




console.log(maxProfit(prices = [7,6,4,3,1]));