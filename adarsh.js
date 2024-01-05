// mkdir     => to make directory
// cd        => to change directory
// code .    => to open VS code of that file

// console.log("hello world!");

// let, var, const

// let a = 100;
// a = "adarsh";

// console.log(a);
// let a = 100;
// a = 2000;
// console.log(a);

// let x = 100;
// x = 500;

// console.log(x);

// var b = 100;

// function numberChange() {
//   var b = 99999;
//   console.log(b);
// }

// numberChange();

// console.log(b);

// data Types
// String = "100"
// Number = 554465416532865
// Bool = true , false

let a = "156";

// if (a === 156) {
//   console.log("this is true");
// } else {
//   a = 156;
//   if (a === 156) {
//     console.log("this is nested true");
//   }
// }

// a === 156 ?  = false

// if (true) {
//   console.log(1);
// } else if (true) {
//   console.log(5);
// }

// let adarsh = "boy";
// let age = 20;

// email = "mail.com";
// password = "1111111";

// if (email === "adarshv.more18@gmail.com") {
//   if (password === "12345678") {
//     console.log("Welcome Adarsh");
//   } else {
//     console.log("wrong Password");
//   }
// } else {
//   console.log("bhai tera account nahi hai yaha ,u  need to register first");
// }

// + , - , ++ , -- , < , < , <= , >= , ===

// for (let i = 0; i <= 10000; i+100) {
//   i = i + 1;
//   console.log(i);
// }

// 0 <= 10000
// 1 <= 10000
// 2 <= 10000
// 2 + 1 = 3
// 10000 + 1 = 10001 <= 10000

// Question : 1
// let firstName = "Adarsh";
// let lastName = "More";

// console.log("Good Morning " + firstName + " " + lastName);

Question: 2;
// let firstName = "XYZ";
// let lastName = "ABC";
// let gender = "boy";

// if (gender === "boy") {
//   console.log("Good Morning Mr " + firstName + " " + lastName);
// } else if (gender === "girl") {
//   console.log("Good Morning Ms " + firstName + " " + lastName);
// }

// Question : 3
// for (let i = 0; i <= 10000; i+100) {
//   i = i + 1;
//   console.log(i);
// }

// let x = [10, 20, 25, 30, 35];
// let z = ["hii", "hello", "GM", "GN"];

let y = {
  name: "adarsh",
  age: 25,
  college: "GIT",
  KT: true,
};

// console.log(x[3] + 1000);

// console.log(y.KT);

// let User = {
//   email: "adarsh@gmail.com",
//   password: "11111111",
// };

// userData[i];

// function addition(a, b) {
//   let c = a + b;
//   console.log(c);
// }

// addition(15, 20);

// async function greeting(fname, lname, gender) {
//   if (gender === "boy") {
//   } else if (gender === "girl") {
//     // console.log("Good Morning Ms " + fname + " " + lname);
//     console.log(`good morning Ms ${fname} ${lname}`);
//   }
// }

// greeting("qqq", "www", "girl");

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);

function asyncExample() {
  console.log(1);

  setTimeout(async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const dataxxxxx = await response.json();
    console.log(dataxxxxx.value);
    return dataxxxxx.value;
  }, 5000);

  console.log(3);

  setTimeout(() => {
    console.log(4);
  }, 1000);

  console.log(5);

  setTimeout(() => {
    console.log(6);
  }, 4000);
}

asyncExample();
