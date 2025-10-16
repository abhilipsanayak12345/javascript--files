//  let arr=[10,20,4,556,4891,1,12,46];
//  console.log(arr)

//reverse order
// let arr=[1,2,3,4,5,6,7];
// let reversedArr=arr.reverse();
// console.log(reversedArr);

//second largest element
// function getSecondLargest(arr){
//     let largest=-1; SecondLargest=-1;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i>largest])
//             largest=arr[i];
//     }
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>SecondLargest && arr[i] !==largest)
//                 SecondLargest=arr[i];
//         }
//         return SecondLargest;
//     }
// console.log(getSecondLargest(2,3,6,6,5))

//greatest element
// let arr = [10, 20, 4, 556, 4891, 1, 12, 46];
// let greatest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > greatest) {
//     greatest = arr[i];
//   }
// }

// console.log("Greatest element is:", greatest);

// smallest element
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

//reverse array using function
// function reverseArray(arr0){
//   let left = 0, right=arr0.lenght-1;
//   while(left < right){
//     arr[[left],arr[right]]=[arr[right],arr[left]]
//   }
//   left ++;
//   right--;

// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// reverseArray(arr)
// console.log(arr.join(""))

//switch reverse array
function reverseArray(arr){
  let n=arr.length;
  for(let i=0; i<arr.length/2;i++){
    let temp=arr[i];  //temp=1
    arr[i]=arr[n-i-1]; //arr[i]=7 
    arr[n-i-1]=temp;  //arr[n-i-1]=1
  }

}
const arr=[1,2,3,4,5,6,7]
reverseArray(arr);
console.log(arr.join(""))