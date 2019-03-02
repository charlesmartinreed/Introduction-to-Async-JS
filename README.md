<!-- AJAX OVERVIEW -->
"Asynchronous JavaScript and XML"
AJAX is a set of web tech that is used to send/receive data asynchronously, without interfering with the current web page.

In modern workflows, XML has been replaced by JSON.

AJAX can also be used with plain-text.

<!-- WHAT IS AJAX? -->
Normally, the client sends a common request and receives a common response.

Which AJAX, it's possible to send smaller, more directed calls (say, updating a single piece of text on the page) by sending a XMLHTTPRequest through the AJAX Engine. The response is sent from the server as XML/JSON to the AJAX Engine and back to the client as a HTML response. 

This all happens behind the scene without a page refresh.

<!-- WHAT IS THE XHR OBJECT -->
XHR = XMLHTTPRequest

This is an API in the form of an object, served by the browser's JS environment either on the client or server side.

Uses methods to transfer data between client and server. Primarily works with HTTP.

<!-- Some libraries for AJAX -->
NODE HTTP, jQuery, Fetch API (part of vanilla Javascript), Axios, Superagent...
