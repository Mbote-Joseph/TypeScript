// Boolean
let isDone: boolean = false;

// Number
let myNumber: number = 4;

// Text, String
let myName: string = "Joseph";

// Template strings
let greeting: string = `Hello ${myName}`;
let greeting2: string = "Hello " + myName;

// Array
let myArray: number[] = [1, 2, 3, 4];
let myArray2: Array<number> = [1, 2, 3, 4];

// Not sure of the type
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Returning nothing
function warnUser(): void {
  console.log("This is my warning message");
}

function greeter(name: string): void {
  console.log(`Hello ${name}`);
}

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Directions {
  Up,
  Down,
  Left,
  Right,
}
let d: Directions = Directions.Down;

let joystickDirection: Directions = Directions.Left;

// if(joystickDirection == Directions.Up){
//     console.log("Move up");
// }
