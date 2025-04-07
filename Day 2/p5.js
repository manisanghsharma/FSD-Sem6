const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
            let data ={
            name: 'John Doe',
            age: 25,
            city: 'New York'}
    if (req.url === '/getdata' && req.method === 'GET') {
            res.end(data)
        }
    else if (req.url === '/getdata' && req.method === 'POST') {
        res.end({message: 'Data received successfully'});
    }
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});