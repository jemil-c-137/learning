function improve(guess, x) {
    const result = ((x / (guess * guess) + (2 * guess)) / 3);
    return result;
}

function cube(x) {
    return x * x * x;
}

function goodEnough(guess, x) {
    return (Math.abs(cube(guess) - x)) < (guess * 0.001)
}

function findCubeRoot(x) {
    let guess = x / 3;
    do {
        guess = improve(guess, x);
    } while (!goodEnough(guess, x));

    return guess;
}