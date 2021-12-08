const request = require('request');
const cheerio = require('cheerio');


request('https://www.nfl.com/', (error, response, html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        const siteNewsHeadLineSelector = $('.nfl-o-headlinestack__list');

        const siteNewsHeadLineList = siteNewsHeadLine.text();
 
    }

});
