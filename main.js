//////////////////////////////////////ARRAY TASKS////////////////////////////////////

// The output of the function should be 8
let arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
function findMisingElem(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);
  let missing = [];
  for (i = min; i <= max; i++) {
    if (!array.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
}
console.log(findMisingElem(arrayOfIntegers));
// /////////////task2 unique element
// let arr = [1, 2, 2, 2, 4, 3, 3, 2, 4, 7, 5, 7, 6];

// function removeDublicates(array){
//     return array.filter((element,index)=>array.indexOf(element)===index)

// }
// function removeDublicates2(array) {
//   let result = [];
//   for (let item of array) {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }
// function removeDublicates2(array) {
//   let result = [];
//   array.forEach((element) => !result.includes(element) && result.push(element));
//   return result;
// }
// function removeDublicates3(array) {
//   return [...new Set(array)];
// }

/////////////////task 3
// let array1 = [7, 8, 4, 9, 9, 15, 3, 1, 10];
// function indLargestDifference(array) {
//   let maxValue = Math.max(...array);
//   // let minValue = array[0];
//   // for (i = 0; i <= array.length; i++) {
//   //   if (array[i] == maxValue) {
//   //     break;
//   //   } else if (array[i] < minValue) {
//   //     minValue = array[i];
//   //   }
//   // }

//   let minValue=Math.min(...array.filter((item,index,array)=>index<array.indexOf(maxValue)))
//   return `${maxValue-minValue}`;
// }
// console.log(indLargestDifference(array1));

//////////////////////////task4
// let firstArray = [2, 2, 4, 1];
// let secondArray = [0, 0, 0, 2];
// let thirdArray = [-2, -2, -3, 2];
// function productExceptSelf(array) {
//   let multValue=array.reduce((acc,curr)=>curr!=0?acc*curr:acc);
//   let result=array.map((item)=>item===0?multValue:multValue/item)
//   return result
// }
// console.log(productExceptSelf(firstArray)); // [8, 8, 4, 16]
// console.log(productExceptSelf(secondArray)); // [0, 0, 0, 0]
// console.log(productExceptSelf(thirdArray)); // [12, 12, 8, -12]///////////////not bad

///////////////////////task5
// var firstArray = [2, 2, 4, 1];
// var secondArray = [1, 2, 0, 2];
// function productExceptSelf(arr) {
//   return arr.map((_, i) => {
//       return arr.reduce((mult, prev, j) => i !== j ? mult * prev : mult, 1)
//   })
// }
// console.log(productExceptSelf([2, 2, 4, 1]))
// console.log(productExceptSelf([0, 0, 0, 0]));
// console.log(productExceptSelf([-2, -2, -3, 2]));/////////////////perfect

/////////////////////task6
// let firstArray = [2, 2, 4, 1];
// let secondArray = [1, 2, 0, 2];
// intersection(firstArray, secondArray); // [2, 1]
// function intersection(firstArray,secondArray) {
//   let uniqueElemArrays=[]
//   firstArray.forEach(el=>{
//     secondArray.forEach(item=>el===item&&!uniqueElemArrays.includes(el)&&uniqueElemArrays.push(el))
//   })
//   return uniqueElemArrays
// }
// console.log(intersection(firstArray, secondArray));
