/*
//  Types in TypeScript
let str:string="Hello TypeScript"
console.log(str);

let num:number=42
console.log(num);

let isActive:boolean=true
console.log(isActive);

let arr:number[]=[1,2,3,4,5]
console.log(arr);

let tuple1:[string,number]=["Alice",30]
console.log(tuple1);
tuple1.push(10)
console.log(tuple1);

//enums

//default enum
enum Signal{Red,Green,Yellow}
let currentSignal:Signal=Signal.Green
console.log(currentSignal);

//custom enum
enum Direction{Up=1,Down,Left,Right}
let moveDirection:Direction=Direction.Left
console.log(moveDirection);

enum StatusCode{Success=200,NotFound=404,ServerError=500}
let responseStatus:StatusCode=StatusCode.Success
console.log(responseStatus);

//any type
let randomValue:any=10
console.log(randomValue);
randomValue="Now I'm a string"
console.log(randomValue);
randomValue=true
console.log(randomValue);

//Objects

let student:{readonly id:number,name:string,marks?:number,percentage:(marks:number,total:number)=>void}={
    id:1,
    name:"John",
    percentage:(marks:number,total:number)=>{
        let percent=(marks/total)*100
        console.log(`Percentage: ${percent}%`);
    }
}
student.marks=450
console.log(student);
student.percentage(student.marks,500);

//type aliases objects
type Employee={id:number,name:string,department:string}
let emp1:Employee={id:101,name:"Alice",department:"HR"}
console.log(emp1);

//union type in function
function displayId(id:number|string):void{
    console.log(`ID: ${id}`);
}
displayId(123)
displayId("ABC123")

//function with default values

function add(a:number,b:number=10):void{
    console.log(`Sum: ${a+b}`);
}
add(5)
add(5,15)

//---------------------------type guards-------------------------------------------------------
type ID=number | string
function getId(id:ID)
{
    if (typeof id==="string")
        console.log(`ID is: ${id.toUpperCase()}`);
    else
        console.log(`ID is: ${id.toFixed(2)}`);
}
getId(1011.456)
getId("abc123")
//inetrface type guards
interface User{
    type:"user",
    username:string,
    email:string
}
interface Person{
    type:"person",
    firstName:string,
    lastName:string
}
function getDetails(value:Person|User):void{
    if(value.type=="user")
        console.log(value.username + " - " + value.email);
        
    else if(value.type=="person")
        console.log(value.firstName + " " + value.lastName);
}
let user1 : User = {type:"user",username:"user123",email:"user123@gmail.com"}
getDetails(user1)
let person1:Person={type:"person",firstName:"John",lastName:"Doe"}
getDetails(person1)

//interface type guards with in operator
if("username" in user1)
    console.log("User has username: " + user1.username);
else
    console.log("No username found");
//--------------------------------------------------------------------------------
//type guards instanceof
class Car{
    drive():void{
        console.log("Driving a car");
    }
}
class Boat{
    sail():void{
        console.log("Sailing a boat");
    }
}
function operate(vehicle:Car|Boat):void{
    if(vehicle instanceof Car)
        vehicle.drive()
    else
        vehicle.sail()
}
let benz=new Car()
operate(benz)

let newboat=new Boat()
operate(newboat)
//-----------------------------------------utility types--------------------------------------------------
//Partial<T> 
interface Users{name:string,age:number,email:string}
 let user2:Partial<Users>={name:"Alice"}
 console.log(user2);

//Readonly<T>
 let user3:Readonly<Users>={name:"Bob",age:25,email:"bob@gmail.com"}
 //user3.name="Charlie" // Error: Cannot assign to 'name' because it is a read-only property
 console.log(user3);

//Pick<T,K>
let user4:Pick<Users,"name"|"email">={name:"David", email:"david@gmail.com"}

//Required<T>
let user5:Required<Users>={name:"Jill",age:28,email:"jill@gmail.com"}

//Omit<T,K>
let user6:Omit<Users,"age">={email:"eve@gmail.com",name:"Eve"}

//Exclude<T,U>
type Role="ADMIN" | "USER" | "GUEST"
let user7:Exclude<Role,"GUEST">="ADMIN"
console.log(user7);

//Extract<T,U>
let guest:Extract<Role,"GUEST">="GUEST"
console.log(guest);

//NonNullable<T>
type strings=string| null | undefined |""
let nonNullVal:NonNullable<strings>="this cannot be null"
console.log(nonNullVal);

//ReturnType<T>
function product(a:number,b:number):number{
console.log(a*b);
return a*b;
}
type ProdReturnType=ReturnType<typeof product>
let result:ProdReturnType=product(5,6)
console.log(result);

//Parameters<T>
let param:Parameters<typeof product>

*/

console.log("This is the first statement");

setTimeout(() => {
    console.log("This is the second statement");
},3000);

console.log("This is the third statement");
