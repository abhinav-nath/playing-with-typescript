// boolean
let found: boolean = true;

// numbers
let grade: number = 87.9;

// strings
let firstName: string = "Abhinav";  // double quotes work
let lastName: string = 'Nath';      // and single quotes too

// template strings - span multiple lines and have embedded expressions - using back ticks
let fullName: string = `Abhinav Nath`;
let age: number = 29;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old in 2020.`;


// any
let myData: any = 50.0;

// all these will be compiled successfully, but you will lose type-safety !!
myData = false;
myData = 'Abhinav'
myData = 27


// arrays
let numbers_: number[] = [1, 2, 3]; // or let numbers: Array<number> = [1, 2, 3];
numbers_.push(4);
numbers_.push(5);

// enums
enum Color {Red, Green, Blue}
let c: Color = Color.Green;


// type assertions / type casting
// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
let someValue: any = "this is a string";

//angle bracket syntax
let strLength: number = (<string>someValue).length;
// or as-syntax
let strLen: number = (someValue as string).length;