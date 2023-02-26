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

function shiftRound(str: string, shift: number = 1): string 
{
    let res: string[];
    type Number = 122|97|25;
    const maximumNumberOfAski: Number = 122;
    const minimumNumberOfAski: Number = 97; 
    const maximumValueOfShift: Number = 25;
    let arr = str.split('');
    res = arr.map((element) => 
    {
        let number = 0;
        let askiNumber = element.charCodeAt(number);
        if (askiNumber > maximumNumberOfAski || askiNumber < minimumNumberOfAski)
         {
            let newSymbol = String.fromCharCode(askiNumber);
            return newSymbol;
        }
        else if (askiNumber <= maximumNumberOfAski && askiNumber >= minimumNumberOfAski && shift > maximumValueOfShift) 
        {
            let newShift = shift - (Math.floor(shift / maximumValueOfShift) * maximumValueOfShift);
            let counter = askiNumber + newShift;
            if (counter > maximumNumberOfAski) 
            {
                counter = minimumNumberOfAski + (counter - maximumNumberOfAski - 1);
                let newSymbol = String.fromCharCode(counter);
                return newSymbol;
            }
            let newSymbol = String.fromCharCode(counter);
            return newSymbol;
        }
        else (askiNumber <= maximumNumberOfAski && askiNumber >= minimumNumberOfAski && shift <= maximumValueOfShift);
        {
            let counter = askiNumber + shift;
            if (counter > maximumNumberOfAski) {
                counter = minimumNumberOfAski + (counter - maximumNumberOfAski - 1);
                let newSymbol = String.fromCharCode(counter);
                return newSymbol;
            }
            let newSymbol = String.fromCharCode(counter);
            return newSymbol
        }
    })
    return res.join("");
}


function unshiftRound(str: string, shift: number = 1): string {
    let res: string[];
   
    type Number = 122|97|25;
    const maximumNumberOfAski: Number = 122;
    const minimumNumberOfAski: Number = 97; 
    const maximumValueOfShift: Number = 25;
     let arr = str.split('');
     res = arr.map((element) => {
        let number = 0;
        let askiNumber = element.charCodeAt(number);
        if (askiNumber > maximumNumberOfAski || askiNumber < minimumNumberOfAski) 
        {
            let newSymbol = String.fromCharCode(askiNumber);
            return newSymbol;
        }
        else if (askiNumber <= maximumNumberOfAski && askiNumber >= minimumNumberOfAski && shift > maximumValueOfShift) 
        {
            let newShift = shift - (Math.floor(shift / maximumValueOfShift) * maximumValueOfShift);
            let counter = askiNumber - newShift;
            if (counter < minimumNumberOfAski) {
                counter =  maximumNumberOfAski - (minimumNumberOfAski - 1 - counter);
                let newSymbol = String.fromCharCode(counter);
                return newSymbol;
            }
            let newSymbol = String.fromCharCode(counter);
            return newSymbol;
        }
        else (askiNumber <=  maximumNumberOfAski && askiNumber >= minimumNumberOfAski && shift <= maximumValueOfShift);
        {
            let counter = askiNumber - shift;
            if (counter < minimumNumberOfAski) {
                counter = maximumNumberOfAski - (minimumNumberOfAski - 1 - counter);
                let newSymbol = String.fromCharCode(counter);
                return newSymbol;
            }
            let newSymbol = String.fromCharCode(counter);
            return newSymbol
        }
    })
    return res.join("");
}
console.log(shiftRound("zzz!!", 27));

console.log(unshiftRound("bbb!!", 27));

