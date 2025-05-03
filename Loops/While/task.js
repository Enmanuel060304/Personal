function gcd(a, b) {
    let residuo = a ;
    while (b !==  0){
        // implement the Euclidean algorithm
        residuo = a % b;
        a = b;
        b = residuo;
    }
    // return the result
    return a;
}

console.log(gcd(10, 5));  // 5
console.log(gcd(17, 13)); // 1
console.log(gcd(36, 24)); // 12