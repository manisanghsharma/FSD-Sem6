const http = require('http');
const fs = require('fs');
let users = [];
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.url === '/setdata' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const user = JSON.parse(body);
            users.push(user);
            fs.writeFileSync('./data.json', JSON.stringify(users));
            res.end("Data received!");
        });
    }
    else if (req.url === '/getdata' && req.method === 'GET') {
        const data = fs.readFileSync('data.json');
        res.end(data);
    } else {
        res.end("Invalid Endpoint");
    }
}
);
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});