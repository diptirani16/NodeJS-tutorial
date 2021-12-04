const EventEmitter = require('events');
const event = new EventEmitter();

event.on('sayMyName', () => {
    console.log('my name is Dipti');
})
event.on('sayMyName', () => {
    console.log('my name is Rani');
})
event.on('checkPage', (status, msg) => {
    console.log(`status code is ${status} and result is ${msg}`);
})

event.emit('sayMyName');
event.emit('checkPage', 200, 'ok');