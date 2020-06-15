const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../configs/currencyAPI');



router.route('/')

    // http://localhost:3000/ps4
    .get(async (req, res, next) => {
        let result = await fetch(CONFIG.url+'?api_key='+CONFIG.api_key+'&from=USD&to=CNY&amount=1');
        let output = await result.json();
        res.render('ps4',
            {title: "Today's exchange rate!",
                currencyFrom: 'USD',
                currencyTo: 'CNY',
                inputAmount: 1,
                outputAmount: output.amount});
    })


    // http://localhost:3000
    // Example:
    //      From:    USD
    //      To:      CNY
    //      Amount:  500
    // submit
    .post(async (req, res, next) => {
        let currencyFrom = req.body.currencyFrom;
        let currencyTo = req.body.currencyTo;
        let inputAmount = req.body.inputAmount;
        let result = await fetch(CONFIG.url+'?api_key='+CONFIG.api_key+'&from='+currencyFrom+'&to='+currencyTo+'&amount='+inputAmount);
        let output = await result.json();
        res.render('ps4',
            {title: "Today's exchange rate!",
             currencyFrom: currencyFrom,
             currencyTo: currencyTo,
             inputAmount: inputAmount,
             outputAmount: output.amount});
    })

module.exports = router;