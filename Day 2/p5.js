const fs = require("fs");

const write = () => {
    const data = "i am new data";
    fs.writeFile('./data.txt', data, (err)=>{
        if (err)
            console.error(err);
        else
            console.log("File updated successfully");
    })}

console.log("before write");
write()
console.log("after write");

