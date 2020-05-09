import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 4, 5);

// declare an array of shapes - initially empty
let allShapes: Shape[] = [];

allShapes.push(myCircle);
allShapes.push(myRectangle);

for (let shape of allShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}