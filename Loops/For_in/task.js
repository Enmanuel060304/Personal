function medalsFilter(object, count) {
    let result = [];  // array for keys that satisfy the condition

    // use a for..in loop to iterate over the keys of the medals object
    for (const key in object) {
        if (object[key] > count) {
            result.push(key);
        }
    }

    // don't forget to return the result
    return result;
}

let medals = {
    usa: 113,
    china: 89,
    australia: 46,
    japan: 58,
    greatBritain: 64,
    canada: 24
};

console.log(medalsFilter(medals, 60));  // [ 'usa', 'china', 'greatBritain' ]