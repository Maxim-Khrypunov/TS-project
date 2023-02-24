// for(let i = 0; i < 3; i++)
// {
//     setTimeout(()=> console.log(i));
// }
let num: number;
num = 12;
let str: string = "say my name";
str ="lmn";
let color: "red" | "blue" | "green";
function f1(n1: number, n2: number):number
{
    return n1+n2;
}
function f2(array: number[]):number
{
return array.reduce((res, cur) => res + cur)
} 
function stringNumberAction(strNum: string|number): number
{
    let res:number;
if (typeof strNum == "string")
{
    res = strNum.length;
}
else { res = strNum*2;}
return res;
}
console.log(stringNumberAction("10"));
let ar: number[] | string [];
ar = [1, 2, 3];
let ar1 :(number|string)[];
ar1 = [1, 2, "str"];
type Color = "red"| "blue"| "green"| "yellow";
let someColor: Color;
someColor = "blue";
type Comparator = (num1: number, num2: number)=> number | ((array:number[]) => number);
let someComparator: Comparator;
someComparator = (n1, n2) => n1 - n2;
someComparator = f1;

type Person = 
{
    id: number;
    name: string;
    age?: number;
}
const person: Person ={id:12345678 , name: "Maxim", age:20}

function shiftRound (str:string, shift:number = 1):string
{
    //TODO
    //
    return ""
}
function unshiftRound (str:string, shift:number = 1):string
{
    //TODO
    //
    return ""
}
