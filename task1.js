function sumNumeric(args) {
    let total = 0;
    let foundNumber = false;

    for (let arg of args) {
        if (typeof arg === 'number' && !(arg)) {
            total += arg;
            foundNumber = true;
        }
    }

    return foundNumber? total : 0;
}

// בדיקות לפונקציה
console.log(sumNumeric(7, 3, 3));            // Output: 13
console.log(sumNumeric(5, 'a', 0, 4));   // Output: 9
console.log(sumNumeric('a', 'b', 'c'));      // Output: 0
console.log(sumNumeric(10, 6, 3));        // Output: 19
console.log(sumNumeric(0, 'r', 0));            // Output: 0


