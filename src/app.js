"use strict";
// for(let i = 0; i < 3; i++)
//  {
//     setTimeout(()=> console.log(i));
//  }
var num;
num = "12";
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
console.log(stringNumberAction("2123"));
var ar;
ar = [1, 2, 3];
var ar1;
ar1 = [1, 2, "str"];
var someColor;
someColor = "yellow";
var someComparator;
someComparator = function (n1, n2) { return n1 - n2; };
someComparator = f1;
var person = { id: 12345678, name: "Maxim", age: 20 };
// HOME WORK 29
function shiftRound(str, shift) {
    if (shift === void 0) { shift = 1; }
    var res;
    var arr = str.split('');
    res = arr.map(function (element) {
        var number = 0;
        var askiNumber = element.charCodeAt(number);
        if (askiNumber > 122 || askiNumber < 97) {
            var newSymbol = String.fromCharCode(askiNumber);
            return newSymbol;
        }
        else if (askiNumber < 122 && askiNumber > 97 && shift > 25) {
            var newShift = shift - (Math.floor(shift / 25) * 25);
            var counter = askiNumber + newShift;
            if (counter > 122) {
                counter = 97 + (counter - 123);
                var newSymbol_1 = String.fromCharCode(counter);
                return newSymbol_1;
            }
            var newSymbol = String.fromCharCode(counter);
            return newSymbol;
        }
        else
            (askiNumber < 122 && askiNumber > 97 && shift < 25);
        {
            var counter = askiNumber + shift;
            if (counter > 122) {
                counter = 97 + (counter - 123);
                var newSymbol_2 = String.fromCharCode(counter);
                return newSymbol_2;
            }
            var newSymbol = String.fromCharCode(counter);
            return newSymbol;
        }
    });
    return res.join("");
}
// function unshiftRound (str:string, shift:number = 1):string
// {
//     //TODO
//     //
//     return ""
// }
console.log(shiftRound("aabx!!", 4));
//# sourceMappingURL=app.js.map