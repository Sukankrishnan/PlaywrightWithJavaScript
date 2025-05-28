function hi(myName: string){
    return myName
}

function calc (num1:number, num2: number): number{
    return num1*num2;
}

console.log(calc(2,5))

// ? - optional parameter
// If the parameter is not passed, it will be undefined
function greet(name: string, greetMessage?: string){
    if(greetMessage){
        return `Hi ${name}, ${greetMessage}`;
    }
    return `Hi ${name}`;
}

console.log(greet("Sukanya"))
console.log(greet("Sukanya", "Welcome to the world!"));

//default parameter
function add(a: number, b: number =10): number{
    return a * b;
}

console.log(add(5)); // 5 * 10 = 50
console.log(add(5,8)); // 5 * 8 = 40

//arrow function
const multiple = (a: number, b: number): number => a*b;
console.log(multiple(2.5,5));

let c=45;
let d=56;
type matchOperation = (a: number, b: number) => number;
const addNew:matchOperation = (c,d) => c+d;
console.log(addNew(c,d));
