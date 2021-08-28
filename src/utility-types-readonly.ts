export {};

type Profile = {
    name: string;
    age: number;
}

const ichiro: Profile = {
    name: 'Ichiro',
    age:40
}

ichiro.age++;

console.log(ichiro);

type pDataType = Readonly<Profile>;
const friend: pDataType = {
    name: 'Tanaka',
    age: 40
};

// friend.age++;

type YomitoriSenyo<T> = {
    readonly [P in keyof T]: T[P];
}

type readOnlyProfile = YomitoriSenyo<Profile>;
