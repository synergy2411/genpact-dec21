// class Animal{
//     private legs : number;
//     private species : string; 
//     constructor(legs : number, species : string){
//         this.legs = legs;
//         this.species = species;
//     }

//     getDetails() : string {
//         return `${this.species} has ${this.legs} legs...`
//     }
// }

// let tiger = new Animal(4, "Cat");
// console.log(tiger.getDetails());


// let x : number = 201;
// let str : string = "";
// let date : Date = new Date("Dec 27, 2021");
// let isAdmin : boolean = true;
// let user : { name : string } = {name : "Foo"};
// let friends : Array<string> = ["Foo", "bar", "bam"];
// let getDetails : Function = () => {}

// let age : number | string = "Thirty Two"
// age = 32;
// age = true;


// class Foo{}

// let FooObj : Foo = new Foo()

// Foo theFoo = new Foo()





// import { Animal } from './animal.model'
// import { Tiger } from './tiger'

// let tiger : Animal = {
//     legs: 4,
//     species : "Cat"
// }
// let cat : Animal = { legs : 2, species : "Cat"}
// let bunny : Animal = { legs : 4, species : "Rabbit"}

// const t2 = new Tiger(cat)
// const t1 = new Tiger(tiger);
// const t3 = new Tiger(bunny);

// t1.getDetails()
// t2.getDetails()
// t3.getDetails()



// Decorator / Annotations
// - functions with meta information
// - prefixed with '@'
// - can be applied on 4 levels
    // 1. Class
    // 2. Property
    // 3. Method
    // 4. Paramters

// @Component({})
// class UserComponent{
//     @Input()
//     username : string;

//     @HostListener()
//     onMouseEnter(){

//     }

//     onKeyUp(@Inject() val : string){}
// }














