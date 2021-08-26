export {};

class VisaCard {
    //readonly owner: string;
    constructor(readonly owner: string) {
    }
}

let myVisaCard = new VisaCard("Ichiro");
console.log(myVisaCard.owner);

// myVisaCard.owner = 'Tanaka';
