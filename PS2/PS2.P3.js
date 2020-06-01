// CS412 PS2 P3

const cube= () => {
    return x => x*x*x;
}

const array = [1,2,3,4,5,6,7]
const result = array.map(cube())
console.log(`[${result}]`)