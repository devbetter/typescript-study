export {};

class Person {
    // public name: string;
    // protected age: number;

    constructor(public name: string, protected age: number) {
        // this.name = name;
        // this.age = age;
    }
}

const ichiro = new Person('Ichiro', 40);
console.log(ichiro);
