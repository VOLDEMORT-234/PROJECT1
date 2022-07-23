// function greetuser(greetingprefix, username = "user") {
//   //we can pass parameter
//   //here user is a default case
//   console.log(greetingprefix + username + " hi" + " why");
// }

// greetuser("hi", "max");
// greetuser();
//give undefined

// function sumup(num1, num2, num3 = 0 /* now we not get NaN*/) {
//   return num1 + num2 + num3;
// }

// console.log(sumup(1, 2));
// NaN

// function sumup(...numbers) {
//   //three dot special character

//   let result = 0;

//   for (const number of numbers) {
//     result += number;
//   }

//   return result;
// }

// const inputnumber = [1, 2, 3, 4, 5];

// console.log(sumup(1, 5, 4, 3, 2)); //sumup([1, 5, 4, 3, 2]) we cannot rap into a array

// rest argument

// function sumup(...numbers) {
//   //three dot special character
//   let result = 0;
//   for (const number of numbers) {
//     result += number;
//   }

//   return result;
// }
// const inputnumber = [1, 2, 3, 4, 5];
// console.log(sumup(...inputnumber)); //if you are passing a array then also put three dot on array;
// const person={
//   name:'deepesh',age:23//function are also object;
// }
// console.log(sumup);
// const name = `hi i am deepesh `; //`we can use double tick`
// const hello = `${greetinguser}`; //this is use to make dynamic things in string;


