function* makeGen() {
    console.log('first line of gen')
    yield "Hello";
    console.log('third line of gen')
	yield "World";
} 

const g = makeGen(); // g is a generator
console.log(g.next()) // { value: 'Hello', done: false }
console.log(g.next()) // { value: 'World', done: false }
console.log(g.next()) // { value: undefined, done: true }console.log()
