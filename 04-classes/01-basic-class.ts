// the file name can be different than the class name
class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// create an instance
let person = new Person("Abhinav", "Nath");

console.log(person.firstName);
console.log(person.lastName);