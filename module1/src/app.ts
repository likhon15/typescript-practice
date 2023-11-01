{
 let printing : string = "hello world!";
console.log(printing);

let prin : number = 123;
console.log(prin);

let x: boolean = true;
console.log(x);

let y: undefined = undefined;
console.log(y);

let z : null = null;
console.log(z);


// Array 

let numbers: number[] = [1,2,3,4,5]
console.log(numbers);

let names : string[] = ['likhon','robiul', 'farhan']
console.log(names);

// tuple 

let various : [number, string] = [123,"likhon"]
console.log(various);


// Object

let user : {
  readonly fname : string; // readonly means i cant overite it another time
  middleName? : string; // optional chain ...if the value have ...then have ..if not ..then no problem
  lname : string;
  isMarried : boolean;
} = {
  fname : 'md',
  middleName : 'likhon',
  lname : 'mia',
  isMarried : false, 
}


// function 

function add (num1 : number , num2 : number) : number {
 return num1 + num2;
}

add(2,2);

const addArrow = (num1 : number, num2:number) : number => num1+num2;

const poorUser = {
  name : 'likhon',
  balance : 0,
  addBalance(balance : number) : string {
    return `My new balance is ${this.balance + balance}`;
  }
}

const arr : number[] = [1,2,3,4];

const newArray : number[] = arr.map((e: number): number => e*e);

// spread

const b1: string[] = ['a','b','c'];
const b2: string[] = ['d','e','f'];
b1.push(...b2);

const m1 =  {
  name : 'likhon',
  age : 12
}

const m2 = {
  name : 'farhan',
  age : 23
}

const mixed = {
  ...m1,
  ...m2 
}

// rest

const gr = (...friends : string[]) => {
  friends.forEach((friend: string)=> console.log(`Hi ${friend}`))
}

gr("likhon", "farhan", "robiul");

// destructure


}