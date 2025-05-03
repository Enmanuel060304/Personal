let add = function (a, b){
    return a + b;
}


// declare the summarizer variable here
let summarizer;
// assign the value of the `add` variable to summarizer
summarizer = add;
console.log(summarizer(1,5));  // prints 6
