function getSmallestOff(A) {
    const ordered = removeDuplicates(A).sort((a, b) => a - b);
    const lessOnePositive = ordered.some((value) => value > 0);

    if (lessOnePositive) {
        let smallestOff;
        
        return ordered.reduce((acc, curr, index, original) => {
            const last = original[index - 1];
            const less = curr - last;
            
            if (curr > acc && less > 1 && smallestOff === undefined) {
                smallestOff = last + 1;
                if (smallestOff === 0 && !original.includes(smallestOff + 1)) {
                    return smallestOff + 1;
                } else if ( smallestOff === 0 && original.includes(smallestOff + 1)) {
                    return smallestOff + 2;
                }
                return smallestOff;
            }
            else if (curr > acc && smallestOff === undefined) {
                return curr + 1;
            }
            return acc;
        }, 0)
    }
    return 1;
}

function removeDuplicates(array) {
    return [...new Set(array)];
}

const result = getSmallestOff([1, 3, 6, 4, 1, 2, 9, 10]);

// const result = getSmallestOff([-1, -3, 1]);

// const result = getSmallestOff([1, 2, 3])

console.log(result);