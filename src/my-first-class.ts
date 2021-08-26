export {};

class Person {
    private name: string;
    public age: number;
    protected nationality: string;

    constructor(name: string, age:number,nationality:string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }
    profile():string {
    return `name:${this.name}, age:${this.age}`;
    }
    getName(): string {
        return this.name;
    }
}

class Android extends Person {
    constructor(name: string, age:number,nationality:string) {
        super(name, age, nationality);
    }
    profile(): string {
        return `name:${super.getName()}, age:${this.age}, nationality:${this.nationality}`;
    }
}

let taro = new Person('Taro', 30,'JP');
console.log(taro.getName());
console.log(taro.age);
console.log(taro.profile());
// console.log(taro.profile());
// let hanako = new Person();
