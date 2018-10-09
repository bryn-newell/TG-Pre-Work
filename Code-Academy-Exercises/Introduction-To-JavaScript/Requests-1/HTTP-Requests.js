console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');



/* Javascript has non-blocking properties which means it is an asynchronous language. Usually code is written
so that text is rendered first and then load images in the background so that users can read the page without
having to wait for a giant image to load. JS uses an event loop to handle asynchronous funtion calls.
Function calls are made and added to a stack, the ones that make requests need to wait for servers to respond
then get sent to a separate queue. Once the stack has cleared then the functions in the queue are executed.
Web developers use the event loop to create a smoother experience by deciding when to call functions and how
to handle asynchronous events. AJAX is one system of technologies; which stands for Asynchronous JavaScript
and XML. */
