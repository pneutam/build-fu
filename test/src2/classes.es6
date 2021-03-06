export class Person {                                   // The 'class' keyword
    constructor(name, age) {                            // Constructors
        this.name = name;
        this.age = age;
    }
}

export class Developer extends Person {                 // The 'extends' keyword
    constructor(name, age, ...languages) {              // Rest parameters
        super(name, age);                               // Super calls
        this.languages = [...languages];                // The spread operator
    }

    printLanguages() {                                  // Short method definitions
        for(let lang of this.languages) {               // The for..of loop
            console.log(lang);
        }
    }

    getLanguages() {
        return this.languages;
    }
}

export let me = new Developer("James", 23, "ES5", "ES6");     // Block scoping