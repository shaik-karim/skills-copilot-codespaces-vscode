// Create web server
// 1. Create a web server
// 2. Add two routes
// 3. Route 1: /comments
//    - Send back some text
// 4. Route 2: /about
//    - Send back some html

// 1. Create a web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    // 3. Route 1: /comments
    if (req.url === '/comments') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('This is comments page');
    }
    // 4. Route 2: /about
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        // res.end('<h1>This is about page</h1>');
        fs.createReadStream('./about.html').pipe(res);
    }
    else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('Page not found');
    }
});

server.listen(3000, '