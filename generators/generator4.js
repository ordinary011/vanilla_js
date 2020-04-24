function request(url) {
	fetch(url)
		.then((response) => response.json())
		.then((res) => {
			it.next(res); // Resume iterator execution
		});
}

function* main() {
	const rawResponse = yield request("https://jsonplaceholder.typicode.com/todos/1");
	const returnValue = synchronouslyProcess(rawResponse);
	console.log(returnValue);
}

const it = main();
it.next(); // Remember, the first next() call doesn't accept input
