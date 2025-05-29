// // definir le niveau d'accession a un proprieté en js
// let person ={
//     name : 'william',
//     surname : "tabaki",
//     age : 25,
// };

// //cette methode permet de definir le niveau d'accessiblité de la proprieté de l'objet person (ex:name)
// Object.defineProperty(person,'name',{
//     writable: false,
//     enumerable : false,
//     configurables : true
// });

// for(key in person)
//     console.log(key);

// console.log(Object.keys(person)); 

// // pour acceder au propriétes de l'objet (person )
// let objectBase = Object.getPrototypeOf(person);
// const propertyDescriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// console.log(propertyDescriptor);


//  function  Circle(){
//     // contructor
//  }

// //  console.log(Circle.prototype);

// let obj = {};
// console.log(obj.__proto__);
// console.log(Object.prototype);

// // heritage avec prototypage en Js : declarer une fonction puis l'herité des methode par la suite
// function Programmer (name, preferredLanguage){
//     this.name = name;
//     this.preferredLanguage=preferredLanguage;
// }

// Programmer.prototype.writeCode = function(){
//     console.log(`${this.name} writes in ${this.preferredLanguage}`);
// }

// Programmer.prototype.toString = function(){
//     return `Programer : ${this.name}, Language : ${this.preferredLanguage}`;
// }

// const jsProgrammer = new Programmer('alice', "JS");
// jsProgrammer.writeCode();

// output : alice writes in JS

// function Programmer(name, preferredLanguage){
//     this.name = name;
//     this.preferredLanguage = preferredLanguage;
// }

// const Programer = new Programmer('Eve', "HTML");

// Programmer.prototype.WriteCode = function(){
//     console.log(`${this.name} writes code in ${this.preferredLanguage}`); 
// }; 

// // Programer.WriteCode();
// // for (let key in Programer)
// //     console.log(key);

// console.log(Programer.hasOwnProperty('name'));
// // console.log(Programer.hasOwnProperty('WriteCode')); ceci herite du prototype c'est prk c'est false
// console.log(Programer.hasOwnProperty('preferredLanguage'));

// Array.prototype.shuffle = function(){
//     console.log('shuffle');
// }    

// function shuffleArray(array){
//     return array;
// }


// const array = [];
// // array.shuffle();

// const tab = shuffleArray(array) ;

// if(typeof Array.prototype.shuffle !== 'function'){
//     Array.prototype.shuffle = function(){
//         console.log('shuffle');
//     }  
// }

// create your own prototype in js

// function Programmer(name){
//     this.name = name;
// }

// Programmer.prototype.code = function(){
//     console.log(`${this.name} start coding.`);
// }

// Programmer.prototype.debug = function(){
//     console.log(`${this.name} is debugging.`);
// }

// Programmer.prototype.meething = function(){
//     console.log(`${this.name} is attending meeting.`);
// }

// const alice = new Programmer('Alice');
// const marven =  new Programmer('marven');

// // alice.code();
// // marven.code();

// // console.log(alice.code === marven.code);

// function FrontEndProgrammer(name){
//     Programmer.call(this, name);
// }

// function BackEndProgrammmer(name){
//     Programmer.call(this, name);
// }

// FrontEndProgrammer.prototype = Object.create(Programmer.prototype);

// FrontEndProgrammer.prototype.constructor = FrontEndProgrammer;

// const steven = new FrontEndProgrammer('steven');
// console.log(FrontEndProgrammer.prototype.constructor === Programmer);


// BackEndProgrammmer.prototype = Object.create(Programmer.prototype);

// FrontEndProgrammer.prototype.constructor = FrontEndProgrammer;
// BackEndProgrammmer.prototype.constructor = BackEndProgrammmer;

// function Programmer(name, specialisation){
//     this.name = name;
//     this.specialisation = specialisation;
// }

// function FrontEndProgrammer(name , specialisation ,preferredLanguage){
//     Programmer.call(this, name, specialisation);
//     this.preferredLanguage = preferredLanguage;
// }

// const steven = new FrontEndProgrammer('maliik', "Front-end", 'React');

// console.log(steven.specialisation); 
// console.log(steven.preferredLanguage);
// console.log(steven.preferredLanguage);

// function Programmer(name){
//     this.name = name;
// }

// Programmer.prototype.code = function(){
//     console.log(`${this.name} start coding.`);
// };

// function FrontEndProgrammer (name){
//     Programmer.call(this, name);
// }

// function BackEndProgrammmer(name){
//     Programmer.call(this,name)
// }

// function extend (Child, Parent){
//     Child.prototype=Object.create(Parent.prototype );
//     Child.prototype.constructor = Child;
// }



// extend(FrontEndProgrammer, Programmer);
// extend(BackEndProgrammmer, Programmer);
// // ovveride function
// FrontEndProgrammer.prototype.code = function(){
//     Programmer.prototype.code.call(this); // cal the base method implementation
//     console.log(`${this.name} is code in c#/css/Js`);
    
// }

// const steven = new FrontEndProgrammer('alice');
// // const alice = new BackEndProgrammmer('steven');
// steven.code();

// function extend(Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.construtor = Child;
// }

// function Programmer (name){
//     this.name = name;
// }

// Programmer.prototype.work = function(){
//     console.log(`${this.name} is working on programming tasks.`);
// };

// function FrontEndProgrammer(name){
//     Programmer.call(this, name);
// }

// function BackEndProgrammmer(name){
//     Programmer.call(this, name);
// }

// extend(FrontEndProgrammer ,Programmer);
// extend(BackEndProgrammmer, Programmer);

// FrontEndProgrammer.prototype.work = function(){
//     console.log(`${this.name} is designing and code the front end` );
// }
// BackEndProgrammmer.prototype.work = function(){
//     console.log(`${this.name} is developing server-side logic`);
// }

// const stevan = new FrontEndProgrammer("steven");
// const alice = new BackEndProgrammmer("alice");
// const william = new FrontEndProgrammer('william');

// const Programers = [
//     stevan,
//     william,
//     alice
// ];

// for (let Programer of Programers){
//     Programer.work();
// }

// ----------------- inheritance and composition ----------------------------

// function Employee (name){
//     this.name = name;
// }
// const canCode = {
//     code(){
//         console.log(`${this.name} is coding`);
//     }
// };
// const canRewiew = {
//     review(){
//         console.log(`${this.name} is reviewing code`);
//     }
// }

// function Programmer(name){
//     Employee.call(this, name);
    // Object.assign(this, canCode, canRewiew); on utlise object.assign pour copier les proprietés d'un objet vers un autre objet
// }

// function Manager(name){
//     Employee.call(this, name);
// }

// const william = new Programmer('william');

// william.code();
// william.review();

// ---------------------mixin object------------------------------
//  mixin object c'est quoi ?
// c'est un objet qui contient des methodes et proprietés qui peuvent etre utilisées par d'autres objets
// exemple : on peut creer un objet canCode qui contient les methodes code() et review()
// puis on peut utiliser cet objet canCode dans un autre objet Programmer
// on peut aussi utiliser cet objet canCode dans un autre objet Manager
// exemple : on peut utiliser cet objet canCode dans un autre objet Programmer
// exemple : on peut utiliser cet objet canCode dans un autre objet Manager
// exemple : on peut utiliser cet objet canCode dans un autre objet Manager   


// function mixin(target, ...sources){
//     Object.assign(target, ...sources);
// }

// const canEat = {
//     eat : function(){
//         this.hunger--;
//         console.log(`${this.name} is eating `);
//     }
// }

// const canWalk = {
//     walk : function(){
//         this.hunger--;
//         console.log(`${this.name} is walking `);
//     }
// }

// const canCode = {
//     code : function(){
//         this.hunger--;
//         console.log(`${this.name} is coding `);
//     }
// }

// function Programmer(name){
//     this.name = name;
//     this.hunger=10;
// }

// // Object.assign(Programmer.prototype, canCode,canEat,canWalk);

// const programmer = new Programmer('william');
// mixin(programmer, canCode,canEat,canWalk);

// console.log(programmer);
// programmer.eat();
// programmer.code();
// programmer.walk();


// Es6 Classes 

class GroceryItem {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;   
    }
    display = function () {
            console.log(`${this.name} x ${this.quantity}`);
        };
}

const item =  new GroceryItem("banae", 2);
item.display();


var personArr = [
    {
    "personId": 123,
    "name": "Jhon",
    "city": "Melbourne",
    "phoneNo": "1234567890"
    },
    {
    "personId": 124,
    "name": "Amelia",
    "city": "Sydney",
    "phoneNo": "1234567890"
    },
    {
    "personId": 125,
    "name": "Emily",
    "city": "Perth",
    "phoneNo": "1234567890"
    },
    {
    "personId": 126,
    "name": "Abraham",
    "city": "Perth",
    "phoneNo": "1234567890"
    }
    ];
    // console.table(personArr, ['name', 'personId','city','phoneNo']);

for(val of personArr){
    console.log(val);
}

const enteo = Object.entries(personArr);
console.log(enteo);
typeof enteo


