/* Lesson 7: Object basics
In this lesson, you will learn the syntax to create objects, how to use them with functions,
and see how they are passed by reference. */

// Syntax to create objects with properties.
let car = {
    brand: 'Toyota',
    year: 2005,
    color: 'Blue'
};

console.log(car);
// Objects can be accessed by using the . operator.
car.brand = 'Honda';
console.log(car);

/* Objects can be passed into functions and be manipulated by them. Objects are passed by
reference. This means that if the object is modified in the function, the object
will be changed if accessed outside the function */
let changeColor = function(car, newColor) {
    car.color = newColor;
};

changeColor(car, 'Green');
console.log(car); // car will now be green

/* Note: You can declare an object with the const keyword. You can still change variables
inside the object, but you can't reassign the object. */

const house = {
    rooms: 4, 
    bathrooms: 2
};

house.rooms = 0; // this will work

// house = {} <= this will cause the program to crash
