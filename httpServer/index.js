const http  = require('http');

const server = http.createServer((req, res) => {
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
    else {
        res.writeHead(404, { "Content-type": "text/html"});
        res.end('<h1> 404 ERROR! PAGE NOT FOUND! </h1>')
    }
});

server.listen(8000, 'localhost', () => {
    console.log('listening to the port no 8000');
});