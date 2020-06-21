const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../configs/newsAPI');

const redis = require('redis');
const client = redis.createClient();

router.route('/')

    // http://localhost:3000/ps4
    .get(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?country=us' + '&apiKey=' + CONFIG.key);
        let output = await result.json();

        // redis
        let name = 'us';
        client.exists(name, (err, match) => {  //looks for key
            if(err) { throw new Error(err) }
            if (match) { //key exists, grab value
                client.get(name, (err, response) => {
                    console.table(response);
                    console.log(JSON.stringify(response + ' cached '))
                })
            } else {
                const reversedName = name.split('').reverse().join(''); //reverse the string
                client.set(name, reversedName, (err, response) => { //name = key, reversedName = value
                    console.table(response);
                    console.log(JSON.stringify(reversedName + ' not cached '))

                })
            }
        })
        client.expire(name, 30);

        res.render('news', {title: 'Latest News!', country: 'US',
            author1: output.articles[0].author,
            title1: output.articles[0].title,
            description1: output.articles[0].description,
            url1: output.articles[0].url,
            date1: output.articles[0].publishedAt,
            author2: output.articles[1].author,
            title2: output.articles[1].title,
            description2: output.articles[1].description,
            url2: output.articles[1].url,
            date2: output.articles[1].publishedAt,
            author3: output.articles[2].author,
            title3: output.articles[2].title,
            description3: output.articles[2].description,
            url3: output.articles[2].url,
            date3: output.articles[2].publishedAt,
            author4: output.articles[3].author,
            title4: output.articles[3].title,
            description4: output.articles[3].description,
            url4: output.articles[3].url,
            date4: output.articles[3].publishedAt,
            author5: output.articles[4].author,
            title5: output.articles[4].title,
            description5: output.articles[4].description,
            url5: output.articles[4].url,
            date5: output.articles[4].publishedAt
        });
    })


    // http://localhost:3000
    // Example:
    //          enter CN for country
    //          submit
    .post(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?country=' + req.body.country + '&apiKey=' + CONFIG.key);
        let output = await result.json();

        // redis
        let name =  req.body.country;
        client.exists(name, (err, match) => {  //looks for key
            if(err) { throw new Error(err) }
            if (match) { //key exists, grab value
                client.get(name, (err, response) => {
                    console.table(response);
                    console.log(JSON.stringify(response + ' cached '))
                })
            } else {
                const reversedName = name.split('').reverse().join(''); //reverse the string
                client.set(name, reversedName, (err, response) => { //name = key, reversedName = value
                    console.table(response);
                    console.log(JSON.stringify(reversedName + ' not cached '))

                })
            }
        })
        client.expire(name, 30);

        res.render('news', {title: 'Latest News!', country: req.body.country.toUpperCase(),
            author1: output.articles[0].author,
            title1: output.articles[0].title,
            description1: output.articles[0].description,
            url1: output.articles[0].url,
            date1: output.articles[0].publishedAt,
            author2: output.articles[1].author,
            title2: output.articles[1].title,
            description2: output.articles[1].description,
            url2: output.articles[1].url,
            date2: output.articles[1].publishedAt,
            author3: output.articles[2].author,
            title3: output.articles[2].title,
            description3: output.articles[2].description,
            url3: output.articles[2].url,
            date3: output.articles[2].publishedAt,
            author4: output.articles[3].author,
            title4: output.articles[3].title,
            description4: output.articles[3].description,
            url4: output.articles[3].url,
            date4: output.articles[3].publishedAt,
            author5: output.articles[4].author,
            title5: output.articles[4].title,
            description5: output.articles[4].description,
            url5: output.articles[4].url,
            date5: output.articles[4].publishedAt
        });
    })

module.exports = router;