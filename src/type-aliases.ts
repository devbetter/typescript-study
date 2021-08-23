export {};

type Mojiretsu = string;

const fooString: string = 'test';
const fooMojiretsu: Mojiretsu = 'Test';

const examples2 = {
    name: 'Ham',
    age: 43,
    }

type Profile = {
    name: string;
    age: number;
}

const examples: Profile = {
name: 'Ham',
age: 43,
}

type Profile2 = typeof examples2
