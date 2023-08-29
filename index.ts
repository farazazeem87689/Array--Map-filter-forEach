// Write the program that uses filter to remove all negative numbers from an array of number

let arr2:number[]=[2,4,-5,-6,12,-1]
console.log("Original Array",arr2);  
let arriUpdated1=arr2.filter((data)=>{
    
 if (data>0)
 {
    return data;
 }
});
console.log("Updated Data",arriUpdated1);







// Given an array of string [apple,banana,cheery, date, grape, ] use the filter method to create the new array containing only the fruits with more than 5 characters?
let FruitArray:string[]=["apple","banana","cheery","date","grape"];
console.log('Fruits',FruitArray);
let NewFruitArray=FruitArray.filter((arr)=>{
    return arr.length>5;
});
console.log('Updated Fruits',NewFruitArray);








// Given of array of number[1,2,3,4,5], use the map method to create a new array where each number is multiply by 2?

let arr1:number[]=[1,2,3,4,5]
console.log("Original Data ",arr1);  //original array
let arriUpdated=arr1.map((data)=>{
    
    return data*2;
});
console.log("Updated Data",arriUpdated);








// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers?

let arrSaqure:number[]=[1,2,3,4,5,6,7,8,9,10]
console.log('Original Value of Array ',arrSaqure);
let SaqureEvenNumber=arrSaqure.filter((evenNum)=>{
    return evenNum%2==0;

}).map((evenNum)=>{
    return evenNum*evenNum;
    
});
console.log('Saqure of evan number',SaqureEvenNumber)









// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.?

let tempOfCalsius:number[]=[0,10,20,30,40];
console.log('Temperature of Celsius',tempOfCalsius);

let tempToFahrnheit=tempOfCalsius.map((Celsius)=>{
return (Celsius*9/5)+32

});
console.log('Celsius to Fahrnheit',tempToFahrnheit);











// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers in typescript?

let OldNumberValue:number[]=[3,6,9,12,15,18]
console.log('Original Value of array',OldNumberValue)

let DoubleOddNumber=OldNumberValue.filter((value)=>{

    return value % 2 !==0;
}).map((OddValue)=>{
    return OddValue*2;
})
console.log('Double Odd Numbers',DoubleOddNumber);










// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!"?

let UserName:String[]=["Alice","Bob","Charlie","David","Emily"];
console.log('Original Name',UserName);
UserName.forEach((name)=>{
    console.log(name+'!');
});






































