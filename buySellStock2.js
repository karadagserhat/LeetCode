const maxProfit = prices => {
    // Start with nothing and take every profitable opportunity from time travel
    let profit = 0;
    // Start from the second day (because that is the first day you could sell)
    for (let i = 1; i < prices.length; i++) {
      // Our Delorean only goes back 1 day, but that is all we need
      const [priceYesterday, priceToday] = [prices[i - 1], prices[i]];
      // Whenever there is profit, engage that Flux Capacitor!
      if (priceYesterday < priceToday) profit += priceToday - priceYesterday;
      // Buy yesterday; sell today
    }
    // Take every Monday off!
    return profit;
    // Time travel trading makes every weekend is a three-day weekend!
  };


  var maxProfit2 = function(prices) {
    let diff = 0
    if (prices.length > 0) { // []
        prices.reduce((acc, next) => {
            if (next > acc) {
                diff += next - acc
            }
            return next
        })
    }
    return diff
};


var maxProfit3 = function (prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let prev = prices[i - 1];
        let current = prices[i];

        if (prev < current) {
            profit += current - prev;
        }
    }
    
    return profit;
};
  console.log(maxProfit(prices = [7,1,5,3,6,4]));