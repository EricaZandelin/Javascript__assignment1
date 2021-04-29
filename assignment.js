// Case 1

if (triangleOne > triangleTwo) {
    console.log("Triangle one is bigger");
} else {
    console.log("Triangle two is bigger");
}

//console.log(triangeOne > triangeTwo);

var triangleOne = (10 * 13) / 2;
var triangleTwo = (16.5 * 20.3) / 2;

console.log(`${triangleTwo} is bigger than ${triangleOne}
 and therefore triangle two is biggest`);


// Case 2

if (triangleThree === triangleFour) {
    console.log("Triangles are equal");
} else {
    console.log("Triangle four is bigger");
}


var triangleThree = (16.5 * 20.3) / 2;
var triangleFour = (20.3 * 16.5) / 2;

console.log(`${triangleThree} and ${triangleFour} are equal numbers, therefore 
none are bigger then the other`);


// Case 3

if (triangleFive > triangleSix) {
    console.log("Triangle five is bigger");
} else {
    console.log("Triangle six is bigger");
}

var triangleFive = (7.8 * 5.6) / 2;
var triangleSix = (9.3 * 12.4) / 2;

console.log(triangleFive > triangleSix);
console.log(`${triangleFive} is lower than ${triangleSix} and therefore triangle six
is bigger`);


// Question

/*The highest precedence number will always be executed first/Order of operations...
so if it would be for example (triangleOne - triangleTwo > triangleThree - trianglefour);
it would first calculate the triangles because subtraction is higher on the list than
greater than ">". So after it has calculated the subtraction is calculates the ">".*/

