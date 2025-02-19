const fs = require("fs");

fs.unlink('./newDir/data2.txt', (err) => {
    if (err)
        console.error(err);
    else
        console.log("File deleted successfully");
})

fs.rmdir('./newDir', (err) => {
    if (err)
        console.error(err);
    else
        console.log("Directory deleted successfully");
})



