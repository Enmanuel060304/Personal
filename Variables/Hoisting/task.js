func();

function func() {
    let b;
    let a = 10;
    console.log("[func] a:", a);
    b = 20;
    console.log("[func] b:", b);
}

let a = 10;
console.log("[global] a:", a);

let b;
b = 20;

console.log("[global] b:", b);
