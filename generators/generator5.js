function * makeInfiniteSequence() {
    let curr = 1;
    while (true) {
      yield curr;
      curr += 1;
    }
  }

  const is = makeInfiniteSequence();

  is.next(); //{ value: 1, done: false }
  is.next(); //{ value: 2, done: false }
  is.next(); //{ value: 3, done: false }
  // It will never end