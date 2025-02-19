const fs = require("fs");

const append = () => {
    const data = "i am appended data";
    fs.appendFile('./data.txt', data, (err)=>{
        if (err)
            console.error(err);
        else
            console.log("File updated successfully");
    })}

append()