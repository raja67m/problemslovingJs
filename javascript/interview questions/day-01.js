// 1. find largest number in the array

let arr=[10,90,56,78,23,6];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log("largest number :" ,max);
//2. find the smallest number of the array;

let samllestArr=[20,17,26,48,12,19];
let samllestNum=samllestArr[0];
for(let i=1;i<samllestArr.length;i++){
    if(samllestArr<samllestNum){
        samllestNum=samllestArr[i];
    }
}
console.log("smallest number:" , samllestNum);

// 3.check the number is even or odd; , which number is dived by 2 that is even , which number not dived 2 that is odd
let num =7;
if(num %2 ===0){
    console.log("The given number is even :",num);
}
else{
    console.log("The given number is odd:",num);
}

//reverse a string

let str="hello";
let reverse="";
for(let i=str.length-1;i>=0;i--){
    reverse+=str[i];
}
console.log("The reverse number is :",reverse);

// 5. check the number is paindrome string , that string is revesed give same meaning that is paindrome
let paidromeStr="madam";
let reversed=paidromeStr.split("").reverse().join("");

if(paidromeStr===reversed){
    console.log("The given string is paindrome", paidromeStr);
}
else{
    console.log("The given string is not Paindrome",paidromeStr);
}