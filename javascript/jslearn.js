// varialbles 

var x=5;
var y=10;
var z=x+y;
console.log(z);

var x=10;
console.log(x); 

// let x=20; // no redecared

{
    let x=20;
    console.log(x);
}
{
    const x=30;
    console.log(x);
}


// const example
const cars=["Saab","Volov","BMW"];
console.log(cars[2]);
cars.push("Audio");
console.log(cars);
// cars=["mahendha","due"];
// console.log(cars);  type error


// operators
/*
+,-,*,/
*/ 
//decrement operator
{
    let x=5;
    x++;
    let z=x;
    console.log(z);

    let a=5;
    let b=a**3;
    console.log(b);
}

//condition

if(x>5){
    console.log("X is Greater than 5");
}

// The age is 18 to alllow the voter Id
{
    let age=prompt("Enter the Age:");
    let name=prompt("Enter the Name:");
    if(age>18){
        console.log(name + " Eligible for Voter Id");
    }
    else{
        console.log("The Person not 18 years old");
    }
}

// switch funcition

{
    let x=prompt("Enter the Number :");
    let y=prompt("Enter the Number : ");
    let operator=prompt("Enter the operation");
    switch(operator){
        case "+":
            z=x+y;
            console.log(z);
           break;
        case "-":
            z=x-y;
            console.log(z);
            break;
        case "*":
            z=x*y;
            console.log(z)
            break;    
        case "/":
            z=x/y;
            console.log(z);
            break;    
        default:
            console.log("The entry values are incorrect");    

    }

}