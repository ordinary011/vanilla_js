function pr(num) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			num <= 0
				? rej({ resolved: false, info: 'the value can not be less than 0' })
				: res({ resolved: true, info: `${num}` });
		}, 8000);
	});
}

const numbers = [10, 0, 3, 8, 10, 55, -5, -7];

const promises = numbers.map(number => {
	return pr(number).catch(e => e);
});

const resolved = [];

Promise.all(promises)
	.then(res => res.filter(obj => obj.resolved === true))
	.then(res => (resolved = res))
	.then(res => console.log(resolved))
	.catch(error => console.log(`Error in executing ${error}`));
