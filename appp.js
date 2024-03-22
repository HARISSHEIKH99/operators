"use strict";
let a = 5;
let b = 2;
let c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
// 6  +  6   +  1  + 1    + 7 +  0  + 1
