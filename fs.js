const fs = require("fs")

//sync
// fs.writeFileSync('node.txt', "hello world");
// const file = fs.readFileSync("node.txt");
// console.log(file.toString())

//async
fs.readFile('node.txt', (err, data)=>{
    console.log(data.toString())
})

console.log('async hello world')


