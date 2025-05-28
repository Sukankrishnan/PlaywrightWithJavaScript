//tuple is a data structure to store ordered elements of different types

let person: [string, number]= ['Lica', 24];
console.log("Person is ", person);

let username: string = person[0];
let userage: number = person[1];
console.log("Username is ", username);
console.log("User age is ", userage);

person[0] = 'Lica Updated'; //update first element
console.log("Updated person is ", person);          
// person[2] = 30; //error: tuple can only have two elements

//tuple vs array
/* 1. Type consistency - tuples can have different types for each element, while arrays are typically homogeneous (all elements of the same type)
2. Type safety - tuples enforce the types of elements at specific positions
3. Mutability - tuples are mutable, but the length and types are fixed
4. Use cases - tuples are used for fixed-size collections of heterogeneous data, while arrays are used for homogeneous data collections


array - allow to change type and expand the array
tuple - fixed size, fixed type for each element
*/
