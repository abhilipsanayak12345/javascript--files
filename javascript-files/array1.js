// let oddNumbers=[];
// for(let i=51;i<=99;i+2){
//         oddNumbers.push(i)
// }
// console.log("oddNumbers are",oddNumbers);

///////////////////
// let x=[{name:"smruti",age:19,branch:"cst",sec:"c"},{name:"sima",age:20,branch:"cse",sec:"d"},{name:"khushi",age:22,branch:"cst",sec:"e"},{name:"shrabani",age:21,branch:"cst",sec:"a"},"smruti",345,true];
// x.splice(0,4);
// console.log(x);

// remove first element form the begining
// x.shift();
// console.log(x);
//remove last element
// x.pop();
// console.log(x);
//prime number using array 
let a=[19,17,16,14,2222,21]
function isPrime(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false
    }
    return true;
}
for(let i=0;i<a.length;i++){
    console.log(isPrime(a[i]));
}