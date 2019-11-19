/*
How much money would you have made yesterday if you spent all day 
trading Google stocks (GOOG; ABC)?

1. get historic stock prices from yesterday, store in a list
2. list may be an array with with minutes after open bell (9:30AM) as indices.
Values are price (in USD) of one share of stocks at that time.

    ex. if stock lost $500 at 10:30AM,
    `stockPrice[60] = 500`

goal: Write efficient function that takes the stock price data and returns the best profit you could make from one purchase and one sale of one share yesterday;

have to buy before you sell, need to wait min of one minute between buying and selling

```javascript
stockPrices[12,41,20,14,19]
getMaxProfit(stockPrices) // 29 (buy for $12, sell for $41)
```
*/
const stockPrices = [
  1250,
  1300,
  1237,
  1323,
  1356,
  1415,
  1110,
  1200,
  1330,
  1190,
  1410
]; //10 minutes {mock data for now}

function getMaxProfit(prices) {
  let v1,
    v2,
    temp = 0;
  let swapped = false;
  v1 = prices[0]; //select first value
  /* 
  need to check sell value. 
  need to store it somewhere with the values so I know what I have at all times
  */
  for (let i = 1; i < prices.length; ) {
    //start at index 1, since we got first element already
    v2 = prices[i]; //now index 1
    console.log(`FOR-T::   v1: ${v1} || v2: ${v2} || temp: ${temp}`);
    //check values
    swapped = false;
    if (v2 <= v1) {
      v1 = v2;
      swapped = true;
      console.log(`IF v2<::  v1: ${v1} || v2: ${v2} || temp: ${temp}`);
      i++;
    }
    if (v2 > v1) {
      console.log(`IF v1<::  v1: ${v1} || v2: ${v2} || temp: ${temp}`);
      if (swapped) {
        temp = 0;
      } else if (v2 >= temp) {
        temp = v2;
        console.log(`ELSE-T::  v1: ${v1} || v2: ${v2} || temp: ${temp}`);
      }
      i++;
    } else {
      //just continue
      console.log(`ELSE::    v1: ${v1} || v2: ${v2} || temp: ${temp}`);
      i++;
    }
    console.log(`FOR-B::   v1: ${v1} || v2: ${v2} || temp: ${temp}`);
  }
  console.log(`v1: ${v1} || temp: ${temp}`);

  return temp - v1;
}

console.log(getMaxProfit(stockPrices));
