const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const rstream = fs.createReadStream('streams.md');

    // rstream.on('data', (chunkData)=>{
    //     res.write(chunkData);
    // })
    // rstream.on('end', ()=>{
    //     res.end();
    // })
    // rstream.on('error', (err)=>{
    //     console.log(err);
    // })

    rstream.pipe(res);
})

server.listen(8000, 'localhost');