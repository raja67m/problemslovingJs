
//function 
function add(a,b){
    return a-b;
}
console.log(add(1,5));

//abitray function arguments
function sum(){
    let total=0;
    for( let i=0;i<arguments.length; i++){
        total +=arguments[i];
    }
    return total;
}
console.log(sum(1,4,5,6,7,7));
//with spreate operator

function sumout(...args){
    let totalPrice=0;

    for(let i=0;i<args.length;i++){
        totalPrice +=args[i];
    }
    return totalPrice;
}
console.log(sumout(1,2,3,4,5,7,8,8));


// // function expression

// const added= function(x,y){
// return x+y;
// }
// console.log(added(1,4));


// arrow function

const added=(x,y)=>{
    return x+y;
}
console.log(added(2,4));


// arrow function with array methods

// arrow function with map()

let numbers=[1,2,3,4,5,6,7];
let doublenumbers=numbers.map(numbers=>numbers*2);
console.log(numbers)
console.log(doublenumbers);

// arrow function with filter()

let words=["Apple","banana","orange","Graphys","papaya"];
let filtersWords=words.filter(word=>word.length>5);
console.log(words);
console.log(filtersWords);

// arrow function with reduces

let num=[1,2,3,4,5,6];
let totalReduce=numbers.reduce((sum,number)=>sum+number,0);
console.log(num)
console.log(totalReduce);

// arrow function with clouser
let creatCounter=()=>{
    let count=0;
    return()=>{
        count ++;
        return count;
    }
}

let counter=creatCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// call back function

function higherOrderFunction(callback){
    console.log("This is my first call back function");
}
function mycallBack(){
    console.log("I am call back function");
}
higherOrderFunction(mycallBack());    


// settimeout function

setTimeout(function(){
    console.log("hell words");
},1000);

//setinterval function

// setInterval(function(){
//console.log("setInterval");
// },);