// > Arrow Functions
// - With curly braces  (argsList) => {function body}
// - Without Curly braces

// var numbers = [1,2,3,4,5];
// // ES5 way
// var doubleValueArray = numbers.map(function(value){
//     return value * 2;
// })
// console.log(doubleValueArray);

// // ES6 way

// var tripleValueArray = numbers.map( (value) => {
//     return value * 3;
// })
// var tripleValueArray = numbers.map( (value) => value * 3)
//  Array -> forEach, filter, find

// console.log(tripleValueArray);

// var demo = (question, a, b) => confirm(question) ? a() :  b();

// demo(
//   "Are you sure to quit?",
//   () => console.log("Thanks, Visit again!") ,
//   () => console.log("Welcome to our jounery!")
// );





// > Destructuring : "unpacking the collection" Array | Object

// var friends = ["foo", "bar", "bam", "baz"]

// var [f1,f2,f3,f4] = friends;

// f3 = "John";

// friends[3] = "jenny";

// console.log(friends);       //   ["foo", "bar", "bam", "jenny"]


// var fruits = ["apple", "grapes", "oranges"]

// var [fruit1, fruit2, fruit3] = fruits;

// // console.log(fruit2);        // "grapes"
// // console.log(fruit3);        // "oranges"

// fruits[2] = "Guava";

// // console.log(fruits)         // ["apple", "grapes", "guava"]

// // console.log(fruit3);        // "oranges"

// fruit3 = "Kiwi";

// console.log(fruits);            // ["apple", "grapes", "Guava"]

// Array are ordered collection
// Objects are unordered collection
// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 32
// }

// var  {lastName, firstName, age} = user

// firstName = "Baz";

// console.log(user)           // {firstName : "Foo", lastName : "Bar", age : 32}



// var userOne = {
//     name : "Foo"
// }

// var userTwo = userOne;

// userTwo.name = "Bar";

// console.log(userOne)            // {name : "Bar"}



// var books = ["book1", "book2", "book3"]

// var myBooks = books;

// myBooks.push("book4");

// console.log(books.length);          // 4


// var user = {
//     email : "test@test.com",
//     age : 32,
//     address : {
//         city : "Bengaluru",
//         street : "201 Main Road, Marathahalli"
//     },
//     friends : ["Foo", "Bar"]
// }

// var {
//     email, age, address : { city, street }, friends : [f1, f2]
// } = user;


















// > Rest / Spread Operators (...)
//  Rest Operator : creates the collection from individual elements; 
    //  : always present in function argument list
    //  : must be the last argument in function argument lsit 
//  Spread Operator : split/spreads the collection into individual elements
    //  : always worked with collection

// var display = ( email, age, ...args) => {
//     console.log(args);           // true
// }

// // display("test@test.com")
// // display("test@test.com", 33)
// display("test@test.com", 33, true, "Foo", "Bar" )


// var numbers = [3,4,5];
// console.log(numbers);            // [3,4,5]
// console.log(...numbers);            // 3,4,5 
// var newArray = [1,2, ...numbers, 6,7,8];

// console.log(newArray);      //[1,2, [3,4,5] ,6,7,8]

// var userFirst = {
//     email  :"test@test.com",
//     name : "John Doe",
//     age : 35
// }

// var userSecond = {
//     ...userFirst,
//     age : 32
// }

// console.log(userSecond);            // {  email  :"test@test.com", age : 32 }














// > Template Literals - " " | ' ' | ` ` (back tick)
    // - Write variables within string without concatenation ( + )
    // - Write multiline string without new line operator ( \n )

    // var username = "Foo Bar";
    // var age = 32;
    // var str = `
    // Hello ${username}!
    // I'm ${age} years old.
    // `
    // console.log(str);



















// > Block scope variable : restricts the variable scope to the nearest block ( { } )
//  - let : all other types
//  - const : creating constants

// JavaScript engine - runs in two phases
    // - Creation phase : all the variables and functions get memory allocation; 'undefined'
    // - Execution phase : executes code

// var display = (arr) => {
//     if(arr.length > 2){
//         let LOAD = "LOADING..."
//         console.log(FLASH);     // undefined
//     }else{
//         let FLASH = "FLASHING..."
//     }
// }

// display([1,2,3,4]);


// const username = "Foo";
// username = "Bar";

// const user = {              // Memory address / Reference -> xx0xoiuyx
//     name : "Foo"
// }

// // user.name = "Bar";           // xx0xoiuyx [name = "Bar"]

// user = {                    // Changing memory address / Reference -> xxx898iuyxf
//     name : "Baz"
// }

// console.log(user);      // Error | Bar


// const arr = ["A Bag", "A Carpet"];
// arr.push("A Pen");                                  // Immutable Change

// // console.log(arr);           // ?

// arr = ["A Bag", "A Carpet", "A Pen"]                // Mutable Chnage
















// > Classes and Modules
class Student{
    constructor(email, age){
        this.email = email;
        this.age = age;
    }
    getDetails () {
        return `Hello from ${this.email}, I'm ${this.age} years old!`;
    }
}

let foo = new Student("foo@test.com", 32);
console.log(foo.getDetails())