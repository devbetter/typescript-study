export {};

const debugProfile = (name: string, age: number) => {
    console.log({ name, age });
};

debugProfile('Ichifo', 40);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Takana', 30];
debugProfile(...profile);
