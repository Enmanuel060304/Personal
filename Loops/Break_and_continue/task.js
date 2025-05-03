function maxNegRow(matrix){
    // declare an array to store the negative numbers from each row
    let array = [];

    // find the first negative number for each row and store it in the array declared earlier

    for(const items of matrix){
        for (const item of items)
        {
            if (item < 0){
                array.push(item);
                break;
            }
        }
    }

    let maxVal = array[0];
    for (const item of array){
        maxVal = item > maxVal ? item : maxVal;
    }
    return maxVal;
    // find the maximum among the stored numbers and return it as the result
}

let matrix = [
    [-5,  -1, 14],
    [2,  -45, 35],
    [17, 37, -20],
    [-7,  30, -25]
];

console.log(maxNegRow(matrix));  // -5

// you can use the arrayMax function from the previous task
