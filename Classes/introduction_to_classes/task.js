class Point{
    constructor(x, y) {
        // save coordinates into the attributes
        this.x = x;
        this.y = y;
    }

    distanceFromOrigin() {
        // return distance to the origin
        let d = Math.sqrt(this.x**2 + this.y**2);
        return d;
    }
}

let p1 = new Point(3, 4);
let p2 = new Point(42, 56);

console.log(p1.distanceFromOrigin());  // 5
console.log(p2.distanceFromOrigin());  // 70
