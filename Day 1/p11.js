const fs = require('fs/promises')

const read = async() => {
    const data = await fs.readFile("./data.txt", "utf8")
    console.log(data);
}

const write = async(str) => {
    await fs.writeFile("./data.txt", str)
    console.log("File written successfully");
}

read();
write("Hello World");