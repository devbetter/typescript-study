export {};

type profile = {
    name: string;
    age?: number;
};

type pType = Partial<profile>;
type qType = Required<profile>;
