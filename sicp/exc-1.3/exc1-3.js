/*
“Define a procedure that takes three
numbers as arguments and returns the sum of the squares of the two larger
numbers.
*/

function maxNum(a, b ,c) {
    if (a <= b && a <= c) {
        return [b,c]
    } else if (b <= a && b <= c) {
        return [a,c]
    } else {
        return [a,b];
    }
}

function sqrt(num) {
    return num * num;
}

function maxSqrt(a,b,c) {
    const [max1, max2] = maxNum(a,b,c);
    return sqrt(max1) + sqrt(max2);
}


console.log(maxSqrt(3,4,5))
console.log(maxSqrt(4,3,5))
console.log(maxSqrt(5,4,3))
console.log(maxSqrt(5,3,4))
console.log(maxSqrt(3,5,4))
console.log(maxSqrt(4,5,3))


function largest(a, b) {
    return a > b ? a : b;
}

function square(a) {
    return a * a;
}

function threeLargest(a, b, c) {
    const largestFromThree = largest(largest(a, b), c);
    let secondLargest;

    if (largestFromThree === a) {
        secondLargest = largest(b,c)
    } else if (largestFromThree === b) {
        secondLargest = largest(a, c)
    } else {
        secondLargest = largest(a, b)
    }

    return square(largestFromThree) + square(secondLargest)
}