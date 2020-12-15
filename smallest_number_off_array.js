function getSmallestOff(A) {
    const ordered = removeDuplicates(A).sort((a, b) => a - b);
    const leastOneGreaterThanZero = ordered.some((value) => value > 0);
    let smallestOff;

    if ( !leastOneGreaterThanZero ) return 1;

    const max = Math.max(...ordered);

    for ( let i = 1; i < max; i++ ) {
        if ( !ordered.includes(i) ) {
            smallestOff = i;
            break;
        }
    }

    if ( smallestOff !== undefined ) return smallestOff;

    return max + 1;
}

function removeDuplicates(array) {
    return [...new Set(array)];
}

const result = getSmallestOff([1, 3, 6, 4, 10, 2, 9, 1]);

// const result = getSmallestOff([-1, -3, 2]);

// const result = getSmallestOff([1, 2, 3]);

// const result = getSmallestOff([-2, -3]);

console.log(result);