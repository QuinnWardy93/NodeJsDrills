let path = require('path')
let fs = require('fs')
let requestPromise = require('request-promise')


requestPromise('https://reddit.com/r/popular.json', (err, res, body, base64) => {
    if (err) console.log(err)

    JSON.parse(body).data.children.forEach(item => {
        if (path.extname(item.data.url) === ".jpg") {
            requestPromise(item.data.url)
                .then(res => {
                    fs.appendFile(`./downloads/${item.data.id}.jpg`, res, 'base64',
                        function (err) {
                            if (err) throw err;
                            // if no error
                            console.log("Data is appended to file successfully.")
                        })
                })
        }
    })
})
