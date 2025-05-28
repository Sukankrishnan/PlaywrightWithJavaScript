//array literal
const arr: number[] = [1,2,3,4];

//array constructor
const arr2: number[] = new Array(1,2,3,4);

//initialize an empty array
const arr3: number[]= [];

console.log(arr[1]);

arr[1]= 5;
console.log(arr[1]);

//push, pop
arr.push(6); //add value to the end of the array
console.log(arr);
arr.pop(); //remove value from the end of the array
console.log(arr);

//unshift, shift
arr.unshift(2); // add value to the beginning of the array
console.log(arr);
arr.shift(); // remove value from the beginning of the array
console.log(arr); 

//slice, splice
/* const slicedArray = arr.slice(1,4); //create a new array from index 1 to index 3 (exclusive)
console.log("Sliced array is ", slicedArray); */
arr.splice(1,3,10,20,30); //remove 3 elements from index 1 and add 10, 20, 30
console.log("Array after splice is ", arr);

//map
const doubledArray=arr.map((num)=>num*2)
console.log("Doubled array is ", doubledArray);

//filter
const filteredArray=arr.filter((num)=> num>20)
console.log("Filtered array is ", filteredArray);

//Read Only Arrays
const readOnlyArray: readonly number[]=[1,2,3];
console.log("Read only array is ", readOnlyArray);

