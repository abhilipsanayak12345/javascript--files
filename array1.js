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
// let a=[19,17,16,14,2222,21]
// function isPrime(num){
//     if(num<=1) return false;
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0) return false
//     }
//     return true;
// }
// for(let i=0;i<a.length;i++){
//     console.log(isPrime(a[i]));
// }

// arr=[48,12,66,68,1];
// for(i=0;i< arr.length;i+=2);
// console.log(arr[i]);

//find smallest element
// arr=[10,20,4,556,4891,1,12,46]
// function smallest(arr){
//     let min=arr[0];
//     for(let i=1;i<arr.lemgth;i++){
//         if(arr[i]<min){
//             min=arr[i];
//             console.log(min);
//         }
//     }
//     return min;
// }
// const arr=[10,20,4,556,4891,1,12,46];
// console.log(smallest (arr));

 //create an array
// let fruits=["Apple","Banana","Lichi","orange"];
// console.log(fruits);

// Accessing array element
// console.log(fruits[0]);
// console.log(fruits[1]);

//Modifying an array
// fruits[1]="mango";
// console.log(fruits);

//Adding Elements to the Array 
//Elements can be added to the array using methods like push() and unshift().
// let fruits=["Apple","Banana","Lichi","orange"];
// fruits.push("lemon"); //  Add Element to the end of Array
// console.log(fruits);
//unshift  // Add Element to the beginning 
// let fruits=["Apple","Banana","Lichi","orange"];
// fruits.unshift("lemon"); 
// console.log(fruits);

// Removing Elements from an Array
//pop(Remove last element)

// let fruits=["Apple","Banana","Lichi","orange"];
// console.log("Original Array: " + fruits); 
// let lst=fruits.pop();
// console.log("After Removing the last: " + fruits); 

//shift(Removes and returns the first element )

// let fruits=["Apple","Banana","Lichi","orange"];
// console.log("Original Array: " + fruits); 
// let fst=fruits.shift();
// console.log("After Removing the First: " + fruits); 

//splice( Removes 2 elements starting from index 1)

// let fruits=["Apple","Banana","Lichi","orange"];
// console.log("Original Array: " + fruits);
// fruits.splice(1,3);
// console.log("After Removing 2 elements starting from index 1: "+fruits);

//Array length
// let a = ["HTML", "CSS", "JS"]; 
// let len = a.length; 
// console.log("Array Length: " + len); //3

//increase array length to 6

// let a = ["HTML", "CSS", "JS"]
// a.length = 7; 
// console.log("After Increasing Length: ", a);

//decrease array length to 2

// let a = ["HTML", "CSS", "JS"]
// a.length = 2; 
// console.log("After Decreasing Length: ", a);

//using for loop
// let a = ["HTML", "CSS", "JS"];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// Concatination (a concat b)
// let a = ["HTML", "CSS", "JS", "React"]; 
// let b = ["Node.js", "Expess.js"]; 
// let concateArray = a.concat(b); 
// console.log("Concatenated Array: ", concateArray);

//Concatination (b concat a)
// let a = ["HTML", "CSS", "JS", "React"]; 
// let b = ["Node.js", "Expess.js"]; 
// let concateArray = b.concat(a); 
// console.log("Concatenated Array: ", concateArray);

//conversion from array to string
// let a = ["HTML", "CSS", "JS"];
// console.log(a.toString());

// let a = ["1", "55", "20"];
// console.log(a.toString());

//type of array
// let a = ["1", "55", "20"];
// console.log(typeof a);

//
