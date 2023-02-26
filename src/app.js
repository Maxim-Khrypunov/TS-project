"use strict";
// for(let i = 0; i < 3; i++)
//  {
//     setTimeout(()=> console.log(i));
//  }
// let num: string;
// num = "12";
// let str: string = "say my name";
// str ="lmn";
// let color: "red" | "blue" | "green";
// function f1(n1: number, n2: number):number
// {
//     return n1+n2;
// }
// function f2(array: number[]):number
// {
// return array.reduce((res, cur) => res + cur)
// } 
// function stringNumberAction(strNum:string|number): number
// {
// let res:number;
// if (typeof strNum == "string")
// {
//     res = strNum.length;
// }
// else { res = strNum*2;}
// return res;
// }
// console.log (stringNumberAction("2123"))
// let ar: number[] | string [];
// ar = [1, 2, 3];
// let ar1 :(number|string)[];
// ar1 = [1, 2, "str"];
// type Color = "red"| "blue"| "green"| "yellow";
// let someColor: Color;
// someColor ="yellow"
// type Comparator = (num1: number, num2: number)=> number | ((array:number[]) => number);
// let someComparator: Comparator;
// someComparator = (n1, n2) => n1 - n2;
// someComparator = f1;
// type Person = 
// {
//     id: number;
//     name: string;
//     age?: number;
// }
// const person: Person ={id:12345678 , name: "Maxim", age:20}
// HOME WORK 29
function shiftRound(str, shift) {
    if (shift === void 0) { shift = 1; }
    var res;
    var maximumNumberOfAski = 122;
    var minimumNumberOfAski = 97;
    var maximumValueOfShift = 25;
    var arr = str.split('');
    res = arr.map(function (element) {
        var number = 0;
        var askiNumber = element.charCodeAt(number);
        if (askiNumber > maximumNumberOfAski || askiNumber < minimumNumberOfAski) {
            var newSymbol = String.fromCharCode(askiNumber);
            return newSymbol;
        }
        else if (askiNumber <= maximumNumberOfAski && askiNumber >= minimumNumberOfAski && shift > maximumValueOfShift) {
            var newShift = shift - (Math.floor(shift / maximumValueOfShift) * maximumValueOfShift);
            var counter = askiNumber + newShift;
            if (counter > maximumNumberOfAski) {
                counter = minimumNumberOfAski + (counter - maximumNumberOfAski - 1);
                var newSymbol_1 = String.fromCharCode(counter);
                return newSymbol_1;
            }
            var newSymbol = String.fromCharCode(counter);
            return newSymbol;
        }
        else
            (askiNumber <= maximumNumberOfAski && askiNumber >= minimumNumberOfAski && shift <= maximumValueOfShift);
        {
            var counter = askiNumber + shift;
            if (counter > maximumNumberOfAski) {
                counter = minimumNumberOfAski + (counter - maximumNumberOfAski - 1);
                var newSymbol_2 = String.fromCharCode(counter);
                return newSymbol_2;
            }
            var newSymbol = String.fromCharCode(counter);
            return newSymbol;
        }
    });
    return res.join("");
}
function unshiftRound(str, shift) {
    if (shift === void 0) { shift = 1; }
    var res;
    var maximumNumberOfAski = 122;
    var minimumNumberOfAski = 97;
    var maximumValueOfShift = 25;
    var arr = str.split('');
    res = arr.map(function (element) {
        var number = 0;
        var askiNumber = element.charCodeAt(number);
        if (askiNumber > maximumNumberOfAski || askiNumber < minimumNumberOfAski) {
            var newSymbol = String.fromCharCode(askiNumber);
            return newSymbol;
        }
        else if (askiNumber <= maximumNumberOfAski && askiNumber >= minimumNumberOfAski && shift > maximumValueOfShift) {
            var newShift = shift - (Math.floor(shift / maximumValueOfShift) * maximumValueOfShift);
            var counter = askiNumber - newShift;
            if (counter < minimumNumberOfAski) {
                counter = maximumNumberOfAski - (minimumNumberOfAski - 1 - counter);
                var newSymbol_3 = String.fromCharCode(counter);
                return newSymbol_3;
            }
            var newSymbol = String.fromCharCode(counter);
            return newSymbol;
        }
        else
            (askiNumber <= maximumNumberOfAski && askiNumber >= minimumNumberOfAski && shift <= maximumValueOfShift);
        {
            var counter = askiNumber - shift;
            if (counter < minimumNumberOfAski) {
                counter = maximumNumberOfAski - (minimumNumberOfAski - 1 - counter);
                var newSymbol_4 = String.fromCharCode(counter);
                return newSymbol_4;
            }
            var newSymbol = String.fromCharCode(counter);
            return newSymbol;
        }
    });
    return res.join("");
}
console.log(shiftRound("zzz!!", 27));
console.log(unshiftRound("bbb!!", 27));
//# sourceMappingURL=app.js.map