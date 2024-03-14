
let i = 0;

function findNumber(number, array) {
    i++
    const middleIndex = Math.floor((array.length / 2))

    if (array[middleIndex] === number) {
        console.log(`Found ${number} at index ${middleIndex}, iterations: ${i}`);
        return middleIndex;
    }

    if (array.length === 1) {
        console.log(`${number} not found, iterations: ${i}`);
        return;
    }

    const newArray = array[middleIndex] > number ? array.slice(0, middleIndex) : array.slice(middleIndex, array.length);

    return findNumber(number, newArray);
}

const arr = Array.from({length: 100}, (_, i) => i + 1)

console.log(arr)

findNumber(51, arr);