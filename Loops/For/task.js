function arraySum(array){
    let sum = 0;

    // add the value of each array element to the sum variable using a `for` loop
    for (let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }
    // don't forget to return the result
    return sum;
}

console.log(arraySum([1, 2, 3, 4, 5]));   // 15
console.log(arraySum([-1, -2, 3, 4, 5])); // 9
console.log(arraySum([-10, -20, 30]));    // 0