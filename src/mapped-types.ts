export {};

type Profile = {
    name: string;
    age: number;
}

type pType = Partial<Profile>;
type propertytypes = keyof Profile;

type Optional<T> = {
    [P in keyof T]?: T[P];
};
type oType = Optional<Profile>;
