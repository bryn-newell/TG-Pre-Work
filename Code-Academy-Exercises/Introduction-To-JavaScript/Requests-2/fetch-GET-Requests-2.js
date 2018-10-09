fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json()
 } throw new Error('Request failed!');
  }, networkError => {
  console.log(networkError.message)
}).then(jsonResponse => {
  return jsonResponse;
});

/* The first argument in fetch() determines the endpoint of the request. Chain a .then() method to the end
of the fetch() function and pass it the success callback arrow function as its first argument. The
success callback function takes one parameter, response. .then() will fire only after the promise status
of fetch() has been resolved. The reason we're testing the ok property of the response object is that
it will be a Boolean value. If there were no errors response.ok will be true and then your code will
return response.json(). When response.ok is falsy your code will throw the error.

A second argument is added to .then() which is an arrow function that handles the failures, separated
from the first callback function with a comma.The second callback function takes a single parameter,
networkError. In the code block of the second callback function, log networkError.message to the console.
If we could not reach the endpoint at all, e.g., the server is down, then we would get this networkError.

We then add a second .then() method to the end of the first one. The second .then()'s success
callback won’t run until the previous .then() method has finished running. It will also not run if
there was an error was thrown previously.
*/
