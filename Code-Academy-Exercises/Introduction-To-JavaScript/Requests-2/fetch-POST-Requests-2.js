fetch('https://api-to-call.com/endpoint',{
  method: 'POST',
  body: JSON.stringify({id: '200'}),
}).then(response => {
  if (response.ok) {
    return response.json();
  } throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
});

// The second argument determines that this request is a POST request and what information will be sent to
// the API. The code inside .then() will execute when the promise returned from fetch() is resolved. When
// returned, this information will be passed on to the next .then() callback function. The purpsone of the code
// blcok in the final then() is to view the JSON that was returned from the previous .then().
