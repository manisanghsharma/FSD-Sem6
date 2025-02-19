const fs = require('fs')

const data = "I am new data"
console.log(data);
fs.writeFileSync("./data.txt", data)

console.log(data);
