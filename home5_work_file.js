//1створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const numMin = (num1, num2, num3) =>  {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1);
//         console.log(num1);
//     } else if (num2 < num3 && num2 < num1) {
//         console.log(num2);
//         document.write(num2);
//     } else {
//         console.log(num3);
//         document.write(num3);
//     }
// };
// numMin(400, 200, 70);
//2 створити функцію яка приймає три числа та виводить найбільше.
// let someValue = (num1, num2, num3) => {
// if (num1 > num2 && num1 >num3){
//     document.write(num1);
//     console.log(num1);
// }else if(num2 > num1 && num2 > num3){
//     document.write(num2);
//     console.log(num2);
// } else {
//     document.write(num3);
//     console.log(num3);
// }
// }
// someValue(22,44,55);
//3 створити функцію яка повертає найбільше число з масиву
// let someValu = [22, 34, 23, 45, 53];
// let maxValue = (array) => {
// let max = array[0];
// for (let element of array){
//     if (element > max){
//         max=element;
//     }
// }
// return max;
// }
// console.log(maxValue(someValu));
//4створити функцію яка повертає найменьше число з масиву
// let someValu = [22, 34, 23, 45, 53];
// let minValue = (array) =>{
//     let min = array[0];
//     for (let element of array){
//         if (element < min){
//             min=element;
//         }
//     }
//     return min;
// }
// console.log(minValue(someValu));
//5ворити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let someValue=[244,352,54,255,635];
// let differentValu = (array)=>{
//     let sum = 0;
//     for (let arrayNumber of array){
//         sum = arrayNumber + sum;
//     }
//     return sum;
// }
//     console.log(differentValu(someValue));
//6створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let someValue=[244,352,54,255,635];
// let serednieValue = (array)=>{
//     let sum = 0;
//     for (let element of array){
//         sum = element + sum;
//     }
//     return sum/array.length;
// }
// console.log(serednieValue(someValue));
//7 створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let someValue = (...arg)=>{
//     let min = arg[0];
//     let max = arg[0];
//     for (let element of arg) {
//         if (element > max) {
//             max = element;
//         } else if (element < min) {
//             min = element;
//         }
//     }
//     console.log(max);
//     return min;
// }
// document.write('Мінімальне число з введених: ' + someValue(131,23,22,142));
//8створити функцію яка заповнює масив рандомними числами
// let someNumber=(some)=>{
// let arrayValue= [];
// for (let i=0;i < some; i++){
//    arrayValue.push(Math.floor(Math.random()*100));
// }
// return arrayValue
// };
// console.log(someNumber(10));\