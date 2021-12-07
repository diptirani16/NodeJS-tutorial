const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Home page!');
})

app.get('/about', (req, res) => {
    res.send('Hello from About page');
})

app.listen(8000, () => {
    console.log('listening to the port at 8000');
})