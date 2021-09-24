function* createGen() {
    yield 'start';
    const a = yield;
    console.log(a);
    yield 'middle';
    return 'end';
}

const gen = createGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next(10));
console.log(gen.next());


function* counter() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
const g = counter();
console.log(g.next());
console.log(g.next());