// EVENT LISTENER
document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'customers.json', true);

	xhr.onload = function(){
		if(this.status === 200) {
			//update div contents

			//first, parse as an object
			const customers = JSON.parse(this.responseText);

			let table = document.querySelector('#customers-table-body');
			let output = '';

			customers.forEach(function(customer){
				output = `
				<tr>
					<td>${customer.id}</td>
					<td>${customer.name}</td>
					<td>${customer.company}</td>
					<td>${customer.phone}</td>
				</tr>`
				table.innerHTML += output;
			});
		}
	}

	xhr.send();
}

function loadCustomer(e) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'customer.json', true);

	xhr.onload = function(){
		if(this.status === 200) {
			//update div contents

			//first, parse as an object
			const customer = JSON.parse(this.responseText);
			const output = `
				<ul>
					<li>ID - ${customer.id}</li>
					<li>Name - ${customer.name}</li>
					<li>Company - ${customer.company}</li>
					<li>Phone Number - ${customer.phone}</li>
				</ul>
			`

			//add our output to the DOM
			document.querySelector('#customer').innerHTML = output;

		}
	}

	xhr.send();
}
