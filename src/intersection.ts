export {};

type p1 = {
    pSpeed: number;
}

type b1 = {
    bSpeed: number;
}

const tanaka: p1 = {
    pSpeed:156,
}

const ichiro: b1 = {
    bSpeed:0.666
}

type bp = p1 & b1;
const oodani: bp = {
    pSpeed: 165,
    bSpeed:0.666,
}

console.log(oodani);
