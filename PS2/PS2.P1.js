// CS412 PS2 P1

function* fibs() {
    yield 0;
    yield 1;
    let [val1, val2, result] = [0,1,0];
    while(true){
        result = val1 + val2;
        [val1, val2] = [val2, result];
        yield result;
    }
}

function* evenFibs() {
    let myFibs = fibs();
    while(true) {
        let x = myFibs.next().value;
        if(x % 2 == 0) {
            yield x;
        }
    }
}

let evens = evenFibs();
let count = 6;
while(count --> 0) {
    console.log(`${6-count}th even fib: ${evens.next().value}`)
}
