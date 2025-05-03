function arrayMax(array){
    // save the array[0] element to the maxVal variable
    let maxVal = array[0];
    // compare all elements to maxVal
    for (const item of array){
        maxVal = item > maxVal ? item : maxVal;
    }
    // don't forget to return the result
    return maxVal;
}

let array = [-2, 6, 14, 4, 50, -11, 1];
console.log(arrayMax(array));  // 50

array = [6, 1, 2, 3, 4, 5];
console.log(arrayMax(array));  // 6

array = [-4, -3, -2, -1, 0];
console.log(arrayMax(array));  // 0