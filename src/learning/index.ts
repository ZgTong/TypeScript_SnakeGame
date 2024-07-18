let fn: typeof sum;
let sum = (a: number, b: number): number => {
    return a + b;
}
fn = (x:number, y:number):number => {
    return x + y;
}

let list: number[] = [1],vec: number[][] = [[1]]
let tuple: [string, number] = ["1",1]

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let d: Direction = Direction.Down
// Direction.Up === 0
let n: number = Direction.Down
// Interface, describe ObjLiteral, Func, Indexable, Class
interface Person {
    readonly name: string;
    age: number;
}
// wrong
// let man: Person = {
//     name: 'zgt',
//     age: 28,
//     gender: "male"
// }
// right
let male = {
    name: 'zgt',
    age: 28,
    gender: "male"
}
let man: Person = male


interface MyFuc {
    (): void;
    test: string;
}
const myFunc = (value: string): string => value;
const myFunc1 = function (){};
myFunc1.test = "11";
let newFunc: MyFuc = myFunc1

interface MyIndexableArray {
    [index: number]: string
}
interface MyIndexableObj {
    [index: string]: string
}
interface MyIndexableArrayLikeObj {
    [index: number]: string
    [index: string]: string
}

class NewClass {}
interface MyClass {
    new(): NewClass
}
let myClass: MyClass = NewClass