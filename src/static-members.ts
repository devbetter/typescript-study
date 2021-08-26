export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Ichiro';
    static lastName: string = 'Tanaka';

    static work() {
        return `Hey, ${Me.firstName}`;
    }
}

// let me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());
