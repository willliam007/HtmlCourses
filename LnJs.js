// <<var dev = {
// name: "william",
// surname: "willos",
// age: 24,
// favoriteLanguage: "JavaScript",

// favProg: function() {
//     return console.log(`${this.name}' favorite language is ${this.favoriteLanguage}`);
// }
// };

// dev.favProg();>>

// ------------   object literrals -----------

let programmer  = {
    name : "Steven",
    preferredLanguage : 'javaScript',

    writeCode: function(){
        console.log(`${this.name} write ${this.preferredLanguage} code`);
    },
    dirnkCoffe(){
        console.log(`${this.name} dinks coffee.`);
    },
}

// programmer.writeCode();

// exemple : creer une Grocery list item

const GroceryListIem = {
    name : 'Apples',
    quantity : 20,

    display(){
        console.log(`${this.quantity} x ${this.name}`);
    },
}  

// GroceryListIem.display();


// function calculatePice(item, price) {
//     return item.quantity*price;
// }
//  const  performCalculation = calculatePice;

// console.log(`the total amount of the Grocerie shop is : ${performCalculation(GroceryListIem,1)}`);

// --------------------------------------------- Vakues and different types ----------------------------------------------------------

// .number                           .boolean 
// .string                           .BigInt
// .Object                           .Symbol
// .null                             .undefined

// ----------------------------exemble d'un passage de valeur par refference -------------------------
//  let  dell ={
//     calue : 'okay',
// }

// let b = dell;

// dell.calue = 'bete ca !!';

// console.log(dell);

// console.log(b);

// ----------------------------Ajouter ou retirer des proprietés  -------------------------

// const person={
//     name : 'william',
// }

// person.preferredLanguage = 'c#';
// console.log(person);

// person['game'] = 'ea sport';
// console.log(person);

// delete person.game;
// console.log(person);

// person.favfood= function () {
//     console.log(`${this.name} like code in ${this.preferredLanguage}`);
    
// }

// person.favfood();

// ----------------------------enumeration-properties (boucles) -------------------------


// let numero  = [1,2,3,5,4];
// for(const element of numero){
//     console.log(element);
    
// }
// typeof(numero);

const car = {
    namecar: "toyota",
    model : 'yyv',
    annee  : 2005,
    color : "red"
};
// for(const val in car){
//     console.log(car[val]);
    
// }
// console.log(car);

// const keys  = Object.keys(car);
// console.log(keys);


// for(const clé of keys){
//     console.log(clé);
    
// }
// const valu  = Object.values(car);
// console.log(valu);


// for(const valut of valu){
//     console.log(valut);
    
// }

// const enter  = Object.entries(car);

// for(const entrer of enter){
//     console.log(`key:${entrer[0]} => value : ${entrer[1]}`);
    
// }

// 1. Filtrage de données


const products = {
    apple: 1.99,
    banana: 0.99,
    orange: 1.49
};

const entries = Object.entries(products);
for(const vel of entries)
console.log(`key:${vel[0]} => value : ${vel[1]}`);

// Trouver tous les produits moins chers que 1.50
const affordableProducts = Object.entries(products)
    .filter(([_, price]) => price < 1.50)
    .map(([name]) => name);
    console.log(affordableProducts);
    

// 2. Transformation de données
const users = {
    user1: { name: "John", age: 30 },
    user2: { name: "Jane", age: 25 }
};
// console.log(users);

// Créer un tableau de noms
const userNames = Object.values(users)
    .map(user => user.name);

console.log(userNames);


// 3. Validation de formulaire
const formData = {
    username: "john",
    email: "john@example.com",
    password: "123456"
};

// Vérifier si tous les champs sont remplis
const isValid = Object.values(formData)
    .every(value => value !== "" );
console.log(isValid);

// 4. Création d'un menu dynamique
const menu = {
    home: "/home",
    about: "/about",
    contact: "/contact"
};

// Générer des liens de navigation
Object.entries(menu).forEach(([name, path]) => {
    console.log(`<a href="${path}">${name}</a>`);
});

// mini-test 1 : les bases 
// ecris une fonction qui reteourne le carré

 function caree(nbre) {
    return nbre**2 ; 
}

 var  tab1 = ["william","njandjo","wilfrid","Maie","gaolet"];


 for (const value of tab1){
    console.log(value);
 }

 // Projet 1 : calculatrice simple 

 function add(val1,val2){
    return val1 + val2 ;
 }

 function subtract(val1,val2){
    return val1 - val2 ;
 }

 function multiply(val1,val2){
    return val1 * val2 ;
 }

 function divide(val1,val2){
    return val1 / val2 ;
 }

 console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 6)); // 24
console.log(divide(10, 2)); // 5


