var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


const numberOfRounds = lines[0]
const roof = lines[1].split(' ')
const floor = lines[2].split(' ')
let position = 'r'
let shouldRunTwice = true

if (roof[0] === '0') {
    position = 'f'
    shouldRunTwice = false
}

let counter = 0

for (let i = 0; i < numberOfRounds; i++) {
    if (i === (numberOfRounds - 1)) {

        break;
    }

    let currentPosition = position === 'f' ? floor[i] : roof[i]
    let nextPosition = position === 'f' ? floor[i + 1] : roof[i + 1]

    if (nextPosition > currentPosition || nextPosition === '0') {
        counter++;
        position = position === 'f' ? 'r' : 'f'
    }
}

if (!shouldRunTwice) {
    console.log(counter);

    return;
}

let counterTwo = 0

position = 'f'

for (let i = 0; i < numberOfRounds; i++) {
    if (i === (numberOfRounds - 1)) {

        break;
    }

    let currentPosition = position === 'f' ? floor[i] : roof[i]
    let nextPosition = position === 'f' ? floor[i + 1] : roof[i + 1]

    if (nextPosition > currentPosition || nextPosition === '0') {
        counterTwo++;
        position = position === 'f' ? 'r' : 'f'
    }
}

console.log(counter > counterTwo ? counterTwo : counter);
