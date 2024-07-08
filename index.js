document.getElementById("h1").innerHTML="Hello World";
console.log()


document.getElementById("demo").innerHTML = "Javascript is connected.";

alert("Welcome to JavaScript")
document.write("Hello DOM!"+"<br>");
console.log("Check the console");

var FirstName="Snigdha";
document.write(FirstName+"<br>");

const cars = ["Binary", "Octal", "binary"]
cars[0] = "Decimal";
cars.push("Hexadecimal")
document.getElementById("Var").innerHTML = cars; 

let a = 5; //assign values to the variable
let b = 10;
let c = a + b; /*adding two variables*/
console.log(c);

let Number=5;
  {
   let Number=10;
   document.write(Number+"<br>");
  }
document.write(Number+"<br><br>");

const PI = 3.141592653589793;
document.write(PI);

const P = 3.141592653589793;
P = 3.14159 //it won't show result if you try to change the value
document.write(P);

//let x=5;
//y+=6;

var name1= "student1";
var id= 123;
var section= "A";
document.write("Our new student name is: "+name1+"<br>"+"His ID is: "+id+"<br> His section is: "+ section);
var name= "student2";
var id= 456;
var section= "B";
document.write("Our new student name is: "+ name1 +"<br>"+"His ID is: "+id+"<br> His section is: "+ section);

let o = 100;
let q = 50;
let r = o + q;
document.getElementById("Th").innerHTML = r;

function studentInfo( namer, idr, sectionr){
      let name= namer;
      let id= idr;
      let section= sectionr;
      document.write("<br>Our new student name is: "+name+"<br>"+"His ID is: "+id+"<br> His section is: "+ section);
  }
  studentInfo("Student1",123,"A");
  studentInfo("Student2",345,"B");