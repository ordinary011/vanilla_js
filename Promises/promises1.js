// ! just for understanding

// function applyForVisa1(doc, res, rej) {
// 	setTimeout(() => {
// 		Math.random() > 0.5 ? res() : rej();
// 	}, 2000);
// }

// applyForVisa1(
// 	{},
// 	function(visa) {
// 		console.log('the visa has been received');
// 	},
// 	function() {
// 		console.error('Sorry you have been rejected');
// 	}
// );

// ! callbacks trial

// function applyForVisa2(doc, resolve, reject) {
// 	setTimeout(() => {
// 		Math.random() > 0.5 ? resolve() : reject('rejected');
// 	}, 1000);
// 	console.log('check for tickets in the internet');
// }

// function bookHotel2() {
// 	setTimeout(() => {
// 		console.log('you have booked the hotel');
// 	}, 1000);
// }

// function buyTickets2() {
// 	setTimeout(() => {
// 		console.log('you have bought the tickets');
// 	}, 1000);
// }

// applyForVisa2(
// 	{},
// 	function(visa) {
// 		console.log('the visa has been received');
// 		bookHotel2(
// 			visa,
// 			function(reservation) {
// 				buyTickets2(reservation, function() {}, function() {});
// 			},
// 			function(error) {}
// 		);
// 	},
// 	function(reason) {
// 		console.error(reason);
// 	}
// );

// * was too lazy to move on with callbacks=))

// ======================================================
// ! PROMISES============================================
// ======================================================

function applyForVisa() {
	let promise = new Promise((res, rej) => {
		setTimeout(() => {
			Math.random() > 0.5 ? res({ visa: 'visa1' }) : rej('rejected');
		}, 1000);
	});
	console.log('the fastest action');
	return promise;
}

let getVisa = visa => {
	// console.log(`the ${visa} has been received`)
	console.log(visa);
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(visa);
		}, 5000);
	});
};

let bookHotel = visa => {
	console.log('reserving a hotel', visa);
	// return Promise.reject('no dude, not today=))');
	// return Promise.resolve(visa);
	return new Promise((a, b) => {
		Math.random() > 0.5 ? a(visa) : b('no dude, not today=))');
	});
};

let buyTickets = visa => {
	console.log(visa, 'buying tickets');
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log('the tickets were bought');
			res(visa);
		}, 2000);
	});
};

applyForVisa()
	.then(getVisa)
	.then(visa => {
		console.log(`the ${JSON.stringify(visa)} has been received`);
		return visa;
	})
	.then(bookHotel)
	.then(buyTickets)
	.catch(a => console.error(a))
	.then(visa => console.log(`I am still here`));
