// declare class

// export class using module.exports
class Shape {
    constructor() {
        this.color = "#FF40FF";
        this.state = () => { return 5 }
    }
    drawShape() {
        return this.color
    }
    calculateArea() {
        return 1;
    }
}

module.exports = Shape
