// 6 . fint the sum of all array in the elements

let arr=[1,2,3,4,5,6];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum +=arr[i];
}
console.log("The sum values is",sum);

// 7 .Remove the duplicate elements in the array
let duplicate=[1,2,4,2,4,4,6,2,8,1];
let unique=[];
for(let i=0;i<duplicate.length;i++){
    if(!unique.includes(duplicate[i])){  // if the same values does not avaliable in the unique variable than push the array
        unique.push(duplicate[i]);
        
    }

}
    console.log("This is the unique array values", unique);

// count vowels strings

let str="Javascript"; //2=a,i=1, total=3
let count=0;
let vowels="aeiou";
for(let char of str){
    if(vowels.includes(char)){
        count++;
    }
}
console.log("The vowels count  is ",count);
// find the factorial number
let num=5;
let fact=1;
for(let i=1;i<=num;i++){ 
    fact*=i;
}
console.log("The factorial number is",fact);

//find second largest numer in array;
let largestarr=[1,2,3,4,5,6,7];
let max=-Infinity;
let secondMax=-Infinity;
for(let numbers of largestarr){
    if(numbers>max){
        secondMax=max;
        max=numbers;
    }else if(numbers>secondMax && numbers!==max){
        secondMax=numbers;
    }
}
console.log(secondMax);