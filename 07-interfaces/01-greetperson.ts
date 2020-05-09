interface Person {
    firstName: string,
    lastName: string
}

function greetPerson(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let person = { firstName: "Abhinav", lastName: "Nath" }

console.log(greetPerson(person));