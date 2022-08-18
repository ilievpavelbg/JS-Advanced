class Person{

    constructor(firstName, LastName, age, email){

        this.firstName = firstName
        this.LastName = LastName
        this.age = age
        this.email = email
    }

    

    toString(){
        return `${this.firstName} ${this.LastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person = new Person(`Pesho`, `Petrov`, 23, `abv`)
let person2 = new Person(`Softuni`)
let person3 = new Person(`Pesho`, `Petrov`, 23)
console.log(person.toString());
console.log(person2.toString());
console.log(person3.toString());