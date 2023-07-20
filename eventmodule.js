const EventEmitter=require("events");

const event=new EventEmitter();

// event.on("subscribe",(msg)=>{
//     console.log(`Thanks for suscribing to ${msg}`);
// })

event.emit("subscribe","college Wallah");


const maxListeners = 10;
event.setMaxListeners(maxListeners);


function eventHandler() {
  console.log('Event handler is triggered!');
}


for (let i = 0; i < maxListeners; i++) {
  event.on('customEvent', eventHandler);
}


const currentListeners = event.listenerCount('customEvent');
console.log('Current number of listeners for customEvent:', currentListeners);
