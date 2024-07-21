class Point {
    constructor({x=0, y=0}={}) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value=0 ) {
        if(typeof(value)!='number'){
            throw new Error('value must be a number')
        }
        this.y += value;
    }
    moveHorizontal(value=0) {
        if(typeof(value)!='number'){
            throw new Error('value must be a number')
        }
        this.x += value;
    }
}

module.exports = Point