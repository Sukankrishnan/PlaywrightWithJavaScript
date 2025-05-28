const personNew ={
    name: "Sukanya",
    age: 18,
    isStudent: true,
    hobbies: ['chatting', 'traveling', 'gossiping']
}

console.log("Person is ", personNew);
console.log("Person name is ", personNew.name);

//assign new value to existing property
const personNew2: {name: string, age: number, isStudent: boolean, hobbies: string[]}={
name: "Finley",
age: 50,
isStudent: false,
hobbies: ['reading', 'swimming']
}

console.log("Person 2 is ", personNew2)

const contactInfo={
    email: "test@abc.com",
    phone: "1234"
}
//merge objects [... - object spread operator]
const mergedPerson = {...personNew, ...contactInfo};
console.log("Merged person is ", mergedPerson);

type person = {
    name: string,
    age: number
}

const person3:person={
    name: "John",
    age: 23,
    //email: abc@gmail.com - It gives error since 'email' is not defined in the type 'person'
}
