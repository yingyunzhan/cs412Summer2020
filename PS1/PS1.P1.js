// CS412 PS P1

const reorder = (input) => {
    return input.split('').sort().join('');
}

console.log(`Result: ${reorder('supercalifragilisticexpialidocious')}`)

module.exports = {reorder}

