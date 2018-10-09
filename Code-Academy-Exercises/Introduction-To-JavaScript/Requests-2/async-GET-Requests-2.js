const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
        const jsonResponse = await response.json();
      return jsonResponse;
        } throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
};

/* The boilerplate code!

Using an async function that will return a promise.
await can only be used in an async function. await allows a program to run while waiting for a promise
to resolve. In a try...catch statement, code in the try block will be run and in the event of an
exception/error, the code in the catch statement will run.

The code in the try block will send a request and handle the response. The catch statement will then
take care of an error if it is thrown.
Since this exercise is an example, we’re using console.log() to view the error. Generally, developers
create a more sophisticated way of handling the error, like redirecting their users to another page,
but logging is fine for us at the moment.

Since .json() is an asynchronous method we have to await until the promise status is resolved.
Then we store the value to know what data the JSON holds.
