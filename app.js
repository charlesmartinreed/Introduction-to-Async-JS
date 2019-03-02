// EVENT LISTENER
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
	// 1. Create an XHR Object
	const xhr = new XMLHttpRequest();

	// 2. Use the OPEN method - (typeOfRequest, file to make request to, async?)
	xhr.open('GET', 'data.txt', true);

	console.log('READYSTATE', xhr.readyState); //1

	// OPTIONAL - used for spinners or loaders, while fetch occurs
	xhr.onprogress = function(){
		console.log('READYSTATE', xhr.readyState) //3
	}

	// 3. This occurs at object load
	xhr.onload = function(){ //readyState step 4
		//if status 200, everthing went well
		// 200 = 'OK', 404 = 'Page not Found', 403: 'Forbidden', 500: Generic server error code indicating a server side failure
		if(this.status === 200) {
				// this referring to the xhr object
				//console.log(this.responseText);
				document.querySelector('#output').innerHTML = `<p>${this.responseText}</p>`
		}
	}

	// ERROR CATCHING
	xhr.onerror = function() {
		console.log('Request error...');
	}

	// 4. Finalize
	xhr.send();

	// readyState values
	// 0: request not initalized
	// 1: server connection established
	// 2: request received
	// 3: processing request
	// 4: request finished and response is ready

	//before onload was introduced, state change would have to be checked
	// xhr.onreadystatechange = function() {
	// 	if(this.status === 200 && this.readyState === 4) {
	// 		///
	// 	}
	// }


}
