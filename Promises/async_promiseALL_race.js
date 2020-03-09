function pr1(num) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			num < 0 ? rej('the first is less than 0') : console.log(num);
			res('FIRST NUMBER');
		}, 3000);
	});
}

function pr2(num) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			num < 0 ? rej('the second is less than 0') : console.log(num);
			res('SECOND NUMBER');
		}, 2000);
	});
}

function pr3(num) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			num < 0 ? rej('the third is less than 0') : console.log(num);
			res('THIRD NUMBER');
		}, 1000);
	});
}

// ! warming up a little =))

// pr1(1)
//     .then(a => {
//         console.log(`the ${a} was printed`)
//         return pr2(2)
//     })
//     .then(a => {
//         console.log(`the ${a} was printed`)
//         return pr3(3)
//     })
//     .then(a => {
//         console.log(`the ${a} was printed`)
//     })
//     .catch(err => console.err(err));

// ! promise all

// Promise.all([pr1(1), pr2(2), pr3(3)])
//     .then(arr => {
//         console.log(arr)
//         arr.forEach(a => console.log(`the ${a} has been resolved`))
//         return arr
//     })
//    .then(arr2 => {
//        console.log(arr2)
//    })
//    .catch((e) => {console.error(e)})

// ! promise race

// Promise.race([pr1(1), pr2(2), pr3(3)])
// 	.then(result => {
// 		console.log(result);
// 		return result;
// 	})
// 	.then(result => {
// 		console.log(result);
// 	});

// ! async await

async function go() {
	try {
		let first = await pr1(1);
		console.log(first);
		let second = await pr2(2);
		console.log(second);
		let third = await pr3(3);
		console.log(third);
	} catch (e) {
		console.log(e);
	}
};

go();