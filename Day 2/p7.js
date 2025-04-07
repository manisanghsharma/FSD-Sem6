const http = require('http');
let users = []

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
            res.end("Data received!");
        });
    }
    else if (req.url === '/getdata' && req.method === 'GET') {
        res.end(JSON.stringify(users));
    } else {
        res.end("Invalid Endpoint");
    }
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});