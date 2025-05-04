class Point{

    // add static property here

    static coordinateSystem = "cartesian";

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getCoordinateSystem(){
        return this.coordinateSystem;
    }
}

class Point3D extends Point{
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}

console.log(Point.coordinateSystem);    // cartesian
console.log(Point3D.coordinateSystem);  // cartesian
