// ! callbacks trial, just for understanding

let pr1 = (num, cb) => {
	setTimeout(() => {
		console.log(num);
		console.log(`${num} was printed`);
		cb();
	}, 3000);
};

let pr2 = (num, cb) => {
	setTimeout(() => {
		console.log(num);
		console.log(`${num} was printed`);
		cb();
	}, 2000);
};

let pr3 = (num, cb) => {
	setTimeout(() => {
		console.log(num);
		console.log(`${num} was printed`);
		cb();
	}, 1000);
};

pr1(3, function() {
	pr2(4, function() {
		pr3(5, function() {
			console.log('finished');
		});
	});
});

// ! CALLBACKS again======================================

let one = (num, cb) =>
	setTimeout(() => {
		console.log(num);
		cb();
	}, 3000);

let two = (num2, cb) =>
	setTimeout(() => {
		console.log(num2);
		cb();
	}, 2000);

let three = (num3, cb) =>
	setTimeout(() => {
		console.log(num3);
		cb();
	}, 1000);

one(1, () => {
	two(2, () => {
		three(3, () => {
			console.log('Whoooo it works=))');
		});
	});
});

// ======================================================
// ! PROMISES============================================
// ======================================================

function print1(num) {
	return new Promise(res => {
		setTimeout(() => {
			console.log(num);
			res();
		}, 1000);
	});
}

let print2 = num => {
	return new Promise(res => {
		setTimeout(() => {
			console.log(num);
			res();
		}, 1000);
	});
};

let print3 = num => {
	return new Promise(res => {
		setTimeout(() => {
			console.log(num);
			res();
		}, 1000);
	});
};

print1(1)
	.then(() => {
		print2(2);
	})
	.then(() => {
		print3(3);
	});




// ! promises again ==================================================

function pr5() {
	return new Promise((res, rej) => {
		setTimeout(() => {
			let num = 2;
			if (num < 5) {
				console.log(num);
				res('yes it is less than 5');
			} else {
				rej("damn didn't work=))");
			}
		}, 2000);
	});
}

pr5()
	.then(a => {
		return `${a} than 6`;
	})
	.then(a => console.log(`${a} and less than 7`))
	.catch(a => console.log(a));




