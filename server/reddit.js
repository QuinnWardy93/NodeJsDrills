let path = require('path')
let fs = require('fs')
let request = require('request-promise')

let dataPath = path.join(__dirname, '../popular-articles.json');



request('https://reddit.com/r/popular.json', (err, res, body) => {
if (err) console.log(err);
    let articleArr = []
    JSON.parse(body).data.children.forEach(item => {
    articleArr.push(
        {title:item.data.title,
        url:item.data.url,
        author:item.data.author})
     let articles = JSON.stringify(articleArr)
    fs.writeFileSync(dataPath, articles)
    })
    })