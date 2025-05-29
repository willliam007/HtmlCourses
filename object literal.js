// import programmerPrototype from 'programmerPrototype';
// 1. Création d'un objet littéral basique
const person = {
    name: "John",
    age: 30
};

// 2. Objet avec méthodes (fonctions)
const car = {
    brand: "Toyota",
    model: "Camry",
    // Méthode traditionnelle
    start: function() {
        console.log("The car is starting");
    },
    // Méthode raccourcie (ES6)
    stop() {
        console.log("The car is stopping");
    }
};

// 3. Ajout dynamique de propriétés
const computer = {};
computer.brand = "Dell";
computer["model"] = "XPS";

// 4. Utilisation de variables comme noms de propriétés
const propertyName = "color";
const house = {
    [propertyName]: "blue"  // La propriété sera 'color': "blue"
};


// function Programmer(name, preferredLanguage) {
//     this.name = name;
//     this.preferredLanguage = preferredLanguage;


//     this.writCode = function () {
//         console.log(`${this.name} write ${this.preferredLanguage} code`);
        
//     }

//     const dirnkCoffe = function(){
//         console.log(`${name} drinks coffee.`);
        
//     }

//     this.startDay = function(){
//         dirnkCoffe();
//         this.writCode();
//     }.bind(this)
    
// }

// const dev1 = new Programmer("betol" , "c#");
// dev1.startDay;


// function GrocerieItem(name, quantity){
//     this.name = name;
//     this.quantity = quantity;

//     this.display = function(){
//         console.log(`${this.quantity} x ${this.name}`);
//     };
// }

// function GroceryList(){
//     const items = [];

//     const calculateTotalQuantity = function(){
//         return items.reduce((total,item) => total + item.quantity, 0 ) 
//     }

//     this.addItem = function(name,quantity){
//         const item = new GrocerieItem(name ,quantity);
//         items.push(item);
//     }

//     this.displayItems = function(){
//         items.forEach(item => item.display());
//     }

//     this.getTotalQuantity = function(){
//         return calculateTotalQuantity();
//     }

// }

// const maList  = new GroceryList();
// maList.addItem('apples',25);
// maList.addItem('avocats', 12);
// maList.displayItems();

// console.log(`${maList.getTotalQuantity()}`);

// function example(){
//     const num = 5;

//     return function logNum(){
//         console.log(num);
        
//     }

//     // logNum();
// }

// const innerFunction = example();
// innerFunction();

// // example();

// function makeFunctions(){
//     let privateNum = 0;

//     function privateIncrement(){
//         privateNum++;
//     }

//     return {
//         logNum: ()=> console.log(privateNum),
//         increment: ()=> {
//             privateIncrement();
//             console.log('increment');
            
//         }
//     }
// }

// const {logNum, increment}= makeFunctions();
// logNum();
// increment();
// logNum();
// increment();
// logNum();

function Devops(name, preferredLanguage){
    // private property
    let privateName = name;

    Object.defineProperties(this,{
        'name':{
            get:function(){
                return privateName;
            },
            set:function(newName){
                if(!newName){
                    console.log('name cant be empty');
                return;
                }
                privateName = newName;

            }
            
        }
    });

    // Public property 
    this.preferredLanguage = preferredLanguage;

    // Public method 
    this.writCode = function(){
        console.log(`${privateName} code in ${this.preferredLanguage}`);
    }

    // Private method 
    let dirnkCoffe = function(){
        console.log(privateName + ' take a cup of chocolate...');
    }

    // Public method that use a closure 
    this.startDay = function(){
        dirnkCoffe();
    }
}

const dev = new Devops("willos", "c#");
console.log(dev.name);
dev.name = 'william';
console.log(dev.name);


// dev.writCode();
// dev.startDay();


// BankAccount exercice 

function BankAccount(initialBalance){
    let balance = initialBalance;

    // pivate method to validate the amount 
    const isValidAmount = function(amount){
        return typeof amount === 'number' && amount >0;
    }

    // public method to deposit money 
    this.deposit = function(amount){
        if(isValidAmount(amount)){
            balance += amount;
            console.log(`Deposit : $${amount}`);
            
        }else{
            console.log('invalid deposit amount ');
            
        }
    };

    // Public method to withdraw money
    this.withdraw = function(amount){
        if(isValidAmount(amount))
        {
            if(amount>balance){
                console.log("balance is insuffisant ");    
            }else{
                balance-=amount;
            console.log(`Withdraw : $${amount}`);
            }            
            
        }else
        {
            console.log('Ivalid withdraw ');
            
        }
    };

    // public method to get the current balance
    this.getBalance = function(){
        return console.log(balance);
    }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(25);
myAccount.getBalance();
myAccount.withdraw(100);
myAccount.getBalance();

// heritage avec prototype && heritage avec Object.set et Object.defineProperties

let user ={
    name : 'steven',
    surname:'Garcia',
    email : 'william@gmail.com',
    isActive : true,

    // user.fullname = 'bruce wayne';
    set fullname(value){
        [this.name, this.surname] = value.split(' ');
    },
    get fullname(){
        return `${this.name} ${this.surname}`;
    },

    login(){
        console.log(`${this.fullname} logged in`);
        
    },
    logout(){
       return  console.log(`${this.fullname} logged out`);
        
    }

};

let admin = {
    __proto__ : user,
    isAdmin: true,
    managerUser(){
        console.log(`${this.fullname} is managing users`);
        
    }
};

let guest = {
    __proto__ : user,
    isAdmin: true,
    browseContent(){
        console.log(`${this.fullname} is browsing content`);
        
    }
};

let superAdmin = {
    __proto__ : admin,
    isSuperAdmin : true,
    managerAdmins(){
        console.log(`${this.fullname} managing Admins`);
    }
};

// admin.fullname = 'bruce bambi';
// console.log(admin.fullname);
// console.log(user.fullname);

for(let key in admin){
    console.log(key);  
}

console.log(Object.keys(admin));
console.log(Object.entries(admin));
console.log(Object.values(admin));
console.log(Object.values(superAdmin));


const ProgrammerPrototype = {
    writCode: function(){
        console.log(`writing code in ${this.preferredLanguage}`);
        
    },
    drinkCoffee : function(){
        console.log('boire du café');
        
    }
};

function Programmer(name ,preferredLanguage){
    let privateName = name;
    this.preferredLanguage = preferredLanguage;

    Object.defineProperties(this,{
        'name': {
            get: function(){
                return privateName;
            },
            set: function(newName){
                privateName = newName
            }
        },

    }); 
    // Inherit common behavior
    Object.setPrototypeOf(this, ProgrammerPrototype);
    
}


const jsProg = new Programmer('alice' ,'js');

jsProg.writCode();
jsProg.drinkCoffee();
console.log(jsProg.name);
jsProg.name = "william";
console.log(jsProg.name);

// multilevel-inheritance in Js

let myArray = [];