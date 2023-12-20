async function getCryptoPrice(symbol, date) {
    const timestamp = new Date(date).getTime();
    const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}USDT&interval=1d&startTime=${timestamp}&endTime=${timestamp + 86400000}`;
    const response = await fetch(url);
    const data = await response.json();
    return parseFloat(data[0][1]);
}

async function getExchangeRate(date, apiKey) {
    const url = `http://data.fixer.io/api/${date}?access_key=${apiKey}&symbols=USD,CNY`;
    const response = await fetch(url);
    const data = await response.json();
    return data.rates.CNY / data.rates.USD;
}

async function calculateProfit(transactions, symbol, apiKey) {
    let totalProfitRmb = 0.0;
    for (let transaction of transactions) {
        const [transType, date, amount] = transaction;
        const cryptoPrice = await getCryptoPrice(symbol, date);
        const exchangeRate = await getExchangeRate(date, apiKey);

        if (transType === "buy") {
            totalProfitRmb -= amount * cryptoPrice * exchangeRate;
        } else if (transType === "sell") {
            totalProfitRmb += amount * cryptoPrice * exchangeRate;
        }

        console.log(`${date} - ${transType}: Crypto Price = ${cryptoPrice}, Exchange Rate = ${exchangeRate}`);
    }
    return totalProfitRmb;
}

// 示例用法
// const apiKey = "e94e3f2726c9d7ba01afea35f24e6e66";
// const transactions = [["buy", "2021-01-01", 0.1], ["sell", "2021-06-01", 0.1]];
// const symbol = "BTC";
// calculateProfit(transactions, symbol, apiKey).then(profit => console.log(`Total Profit in RMB: ${profit}`));
