export {};

let bmi = (h: number, w: number, pFlg?: boolean): number => {
    const bmi=w / (h * h);
    if (pFlg) {
        console.log(bmi);
    }
    return bmi
}

let ret = bmi(1.78, 76,false);
console.log(ret);
