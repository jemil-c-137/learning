// Exercise 2.17: 
// Define a procedure last-pair that returns the list that 
// contains only the last element of a given (nonempty) list:

function lastPair(list) {
    if (list.length === 1) {
        return list;
    } else {
        return lastPair(list.slice(1))
    }
}

console.log(lastPair([3, 72, 149, 34]))