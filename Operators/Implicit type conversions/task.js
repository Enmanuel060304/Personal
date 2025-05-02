let data = {
    a: "",
    b: -2,
    c: null
};
console.log(!!(data.a || data.b));  // should be true
console.log(!!data.b);  // should be true
console.log(!data.c);   // should be true
