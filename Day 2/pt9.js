const fs = require("fs");
//create a new file in newDir

const write = () => {
    fs.writeFile('./newDir/data2.txt', "", (err)=>{
        if (err)
            console.error(err);
        else
            console.log("File created successfully");
    })}
write()