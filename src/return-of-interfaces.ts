export {};

class Maotsukai { }
class Souryo { }

class Taro extends Maotsukai { }

interface Kenja {
    ionazun(): void;
}
interface Senshi{
    lougeki(): void;
 }

class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log('ionazun');
    };
    lougeki(): void {
        console.log('lougeki');
    }
 }

const jiro = new Jiro();
jiro.ionazun();
jiro.lougeki();
