const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
return xhr.response;
}
};

xhr.open('GET', url);
xhr.send();

// To create the XMLHttpRequest it is common practice to name the object xhr. The The purpose of the
// conditional statement in the .onreadystatechange event handler checks to see if the request has finished.
// .open() creates a new request and the arguments passed in determine the type and URL of the request.
// This is all the boilerplate code for an AJAX GET request using an XMLHttpRequest object.
