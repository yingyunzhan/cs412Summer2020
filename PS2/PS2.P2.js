// CS412 PS2 P2

function* word(input) {
    let words = input.split(" ")
    yield* words;
}

const x = word("All I know is something like a bird within her sang");
let result = x.next();
while(!result.done){
    console.log(`${result.value}`);
    result = x.next();
}
