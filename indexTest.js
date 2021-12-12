const xrpl = require('xrpl');


(async function() {
    const client = new xrpl.Client('wss://xrplcluster.com');
  
    await client.connect();
  
    // Your code here
    const reqAsk = {
        "command": "book_offers",
        "taker_gets": {
          "currency": "5041524300000000000000000000000000000000",
          "issuer": "rE42R1mbjGtMzzFTL5aqpbTrj3TDVq71jo"
        },
        "taker_pays": {
          "currency": "XRP"
        },
        "limit": 1
      }

      const reqBid = {
        "command": "book_offers",
        "taker_gets": {
            "currency": "XRP"
        },
        "taker_pays": {
          "currency": "5041524300000000000000000000000000000000",
          "issuer": "rE42R1mbjGtMzzFTL5aqpbTrj3TDVq71jo"
        },
        "limit": 1
      }

      const responseAsk = await client.request(reqAsk);
      const responseBid = await client.request(reqBid);
      var ask = responseAsk.result.offers;
      var bid = responseBid.result.offers;
      console.log(ask,bid);

      console.log(ask[0].quality,bid[0].quality);
      askNormalized = parseFloat(ask[0].quality / 1000000).toFixed(2);
      bidNormalized = parseFloat((1 / (bid[0].quality * 1000000))).toFixed(2);

      console.log(askNormalized,bidNormalized);
  
    client.disconnect();
  })();