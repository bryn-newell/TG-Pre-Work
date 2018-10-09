// Information to reach API
const apiKey = '<327c0b09a20c4921857e643bff744b17>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) { renderResponse(xhr.response); }
  }
  xhr.open('POST',url);
  xhr.setRequestHeader('Content-type', 'application/json'); xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);



/* JSON.stringify({destination: urlToShorten}) - is included because the API expects to see an
object with a key destination that has a value of a URL. To access the Rebrandly API, we need a header
with two key-value pairs. In the header, you must include values for 'Content-type' and an 'apikey'.
To set the header, we have to include the following code below our .open() method.

xhr.setRequestHeader('Content-type', 'application/json'); xhr.setRequestHeader('apikey', apiKey);
*/
