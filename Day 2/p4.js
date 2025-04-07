const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/about') {
        res.write('<h1>This is about page</h1>');
        res.end();
    }
    else if (req.url === '/contact') {
        res.write('<h1>This is contact page</h1>');
        res.end();
    }
    else {
        res.write('<h1>Hello World!</h1>');
        res.end();
    }});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

