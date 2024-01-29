const fs = require('fs');

const myfile = fs.createReadStream(`${__dirname}/node.txt`, 'utf-8')
myfile.on('data', (chank) =>{
    console.log(chank)
})