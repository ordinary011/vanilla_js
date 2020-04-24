function * makeGen() {
  const foo = yield 'Hello world';
  console.log(foo);
}
const g = makeGen();

g.next(1) // { value: 'Hello world', done: false }
g.next(2); // logs 2, yields { value: undefined, done: true }