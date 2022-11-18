// import using require

// declare class


// export class using module.exports

const Shape = require('./shape')

class Circle extends Shape {
    calculateArea() {
        return 3.14;
    }

}
module.exports = Circle
