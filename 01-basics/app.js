"use strict";
// class Animal{
//     private legs : number;
//     private species : string; 
//     constructor(legs : number, species : string){
//         this.legs = legs;
//         this.species = species;
//     }
exports.__esModule = true;
var tiger_1 = require("./tiger");
var tiger = {
    legs: 4,
    species: "Cat"
};
var cat = { legs: 2, species: "Cat" };
var bunny = { legs: 4, species: "Rabbit" };
var t2 = new tiger_1.Tiger(cat);
var t1 = new tiger_1.Tiger(tiger);
var t3 = new tiger_1.Tiger(bunny);
t1.getDetails();
t2.getDetails();
t3.getDetails();
