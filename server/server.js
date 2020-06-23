let path = require('path')
let fs = require('fs')


let chirps = [
    {
        name: "Quinn",
        comment: "hello World"
    },
    {
        name: "Garret",
        comment: "Hello World"
    },
    {
        name: "Alandis",
        comment: "hello World"
    },
    {
        name: "Haley",
        comment: "Hello World"
    }, {
        name: "Jake",
        comment: "Hello World"
    }
]

let dataPath = path.join(__dirname, '../chirps.json')

fs.writeFile(dataPath, JSON.stringify(chirps),(err) => {
    if(err) console.log(err)
})