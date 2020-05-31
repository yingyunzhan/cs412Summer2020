// CS412 PS P3

const output = (input, func) => {
    return func(input);
}

const function1 = (input) => {
    return input.replace(/c/gi,",c").split(",");
}

const function2 = (input) => {
    const result = {
        originalString: input,
        modifiedString: input.replace(/a/gi,"A"),
        numberReplaced: (input.match(/a/gi) || []).length,
        length: input.length
    };
    return result;
}

let input = 'supercalifragilisticexpialidocious';
console.log(output(input, function1))
console.log(output(input, function2))


module.exports = {output}