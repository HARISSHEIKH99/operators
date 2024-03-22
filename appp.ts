let a: number = 5;
let b: number = 2;
let c: number;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
// 6  +  6   +  1  + 1    + 7 +  0  + 1