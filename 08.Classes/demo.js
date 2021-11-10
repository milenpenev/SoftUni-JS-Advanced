class Person {
    constructor(surname) {
        this.name = 'Peter';
        this.surname = surname
    }

    sayHello() {
        console.log(`${this.name} ${this.surname} says hello!`)
    };
}

const person1 = new Person('Georgiev');
const person2 = new Person('Ivanov')

person1.height = 178;

console.log(person1)
console.log(person2)
person1.sayHello();
person2.sayHello();