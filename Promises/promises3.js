// ! warming up ========================================

// let p = new Promise((success, fail) => {
// 	let a = 1;
// 	if (a + 1 === 2) {
// 		success(`success for ${a}`);
// 	} else {
// 		fail(`rejected for ${a}`);
// 	}
// });

// p.then(a => console.log(a)).catch(a => console.log(a));

// ! CALLBACKS =========================================

// const posts = [
// 	{ title: 'Post One', body: 'This is post one' },
// 	{ title: 'Post Two', body: 'This is post two' }
// ];

// function getPosts() {
// 	setTimeout(() => {
// 		let output = '';
// 		posts.forEach(a => {
// 			output += `<li>${a.title}</li>`;
// 		});
// 		document.body.innerHTML = output;
// 	}, 1000);
// }

// function addPost(post, callback) {
// 	setTimeout(() => {
// 		posts.push(post);
// 		callback();
// 	}, 2000);
// }

// addPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

// ======================================================
// ! PROMISES============================================
// ======================================================

const posts2 = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
	return new Promise(res => {
		setTimeout(() => {
			let output = '';
			posts2.forEach(a => {
				output += `<li>${a.title}</li>`;
			});
			document.body.innerHTML = output;
			res('All posts were posted');
		}, 1000);
	});
}

function addPost(post) {
	return new Promise(res => {
		setTimeout(() => {
			document.body.innerHTML = 'the first is done';
			posts2.push(post);
			res();
		}, 3000);
	});
}

async function go() {
	await addPost({ title: 'Post Three', body: 'This is post three' });
	let finish = await getPosts();
	document.body.innerHTML += finish;
}

go();
