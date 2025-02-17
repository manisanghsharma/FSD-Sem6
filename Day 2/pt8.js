//Make directory

const fs = require("fs");

fs.mkdir('./newDir', (err)=>{
    if (err)
        console.error(err);
    else
        console.log("Directory created successfully");
}
)


