var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('flower',function(){
	console.log('jasmine');
});

emitter.on('film',function(){
	console.log('ennum ninte moidheen')
});

emitter.once('flower',function(){
	console.log('rose');
});

emitter.once('film',function(){
	console.log('premem');
});

emitter.emit('flower');
emitter.emit('film');