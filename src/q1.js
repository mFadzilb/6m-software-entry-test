/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y) {
    // Task 1: Check if both x and y are numeric
    if (typeof x !== 'number' || typeof y !== 'number') {
        return -1;
    }
    
    // Swap the values
    let temp = x;
    x = y;
    y = temp;
    
    // Print the swapped values
    console.log('Swapped values:', x, y);
}

// Task 2: Invoke the function with the given scenarios
console.log(swap("Apple", 10)); // Should return -1
swap(9, 17); // Should print "Swapped values: 17 9"
