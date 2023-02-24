"use strict";
// for(let i = 0; i < 3; i++)
// {
//     setTimeout(()=> console.log(i));
// }
var num;
num = 12;
var str = "say my name";
str = "lmn";
var color;
function f1(n1, n2) {
    return n1 + n2;
}
function f2(array) {
    return array.reduce(function (res, cur) { return res + cur; });
}
function stringNumberAction(strNum) {
    var res;
    if (typeof strNum == "string") {
        res = strNum.length;
    }
    else {
        res = strNum * 2;
    }
    return res;
}
console.log(stringNumberAction("10"));
var ar;
ar = [1, 2, 3];
var ar1;
ar1 = [1, 2, "str"];
var someColor;
someColor = "blue";
var someComparator;
someComparator = function (n1, n2) { return n1 - n2; };
someComparator = f1;
var person = { id: 12345678, name: "Maxim", age: 20 };
function shiftRound(str, shift) {
    if (shift === void 0) { shift = 1; }
    //TODO
    //
    return "";
}
function unshiftRound(str, shift) {
    if (shift === void 0) { shift = 1; }
    //TODO
    //
    return "";
}
//# sourceMappingURL=app.js.map