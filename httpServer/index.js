const http  = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const data = fs.readFileSync(`${__dirname}/userApi/api.json`, 'utf-8');
    // console.log(req.url);
    if(req.url == '/') {
        res.end('Hello from the other side!')
    }
    else if(req.url == '/about') {
        res.end('About page!')
    }
    else if(req.url == '/contact') {
        res.end('Contact page!')
    } 
    else if(req.url == '/api') {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(data);
    } 
    else {
        res.writeHead(404, { "Content-type": "text/html"});
        res.end('<h1> 404 ERROR! PAGE NOT FOUND! </h1>')
    }
});

server.listen(8000, 'localhost', () => {
    console.log('listening to the port no 8000');
});