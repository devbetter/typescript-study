export {};

type DetailProfile = {
    name: string;
    height: number;
    weight: number;
}

type SimpleProfile = Pick<DetailProfile, 'name' | 'weight'>;
type SimpleProfile1 = Omit<DetailProfile, 'height'>;
