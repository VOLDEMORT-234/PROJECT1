// important to learn java script.
// let hobbies = ["hi", "bye", "hello"];
// alert(hobbies[0]);

// function name() {
//   alert("hi buddy");
// }
// name();

// let age = 18;

// let tr = function name(age) {
//   return age;
// };

// alert(tr);

// console.log(16 + 7);

//console.log("max" + "Deepesh");
//console.log(4 ** 3);
//console.log(2 + "2");

// let name = "deepesh";
// console.log(name.length);
// DOM document object model
// console.log(window);
// console.log(window.document);
// console.dir(document);
// document.body.children[0]
// let another = document.querySelector("h1");
// another.remove();
// very important query selector

// add event listner
// ==,===,>=,<=
//document.queryselector(".class").click() (automatically get clicked)
//document.getElementById("id name").click()
// ************************************************************************************************************************************
// f1
// <div id=​"f1" class=​"container">​…​</div>​
// f1.innerHTML="hello deepesh"
// 'hello deepesh'
//         f1.innerHTML= "<b>deepesh</b>"
// '<b>deepesh</b>'
// ************************************************************************************************************************************
// select element
// document.getElementById("h1")
// null
// document.getElementsByTagName("h1")
// HTMLCollection(2) [h1, h1]
// document.getElementsByTagName("h1")[0]
// <h1>​Null point​</h1>​
// document.getElementsByTagName("h1")[0].style.fontSize="88px"
// '88px'
// ************************************************************************************************************************************
// document.getElementsByTagName("h1")[0].style.visibility = "hidden";
// // document.getElementsByTagName("h1")[0].style.display = "none";
// console.log("we will win");
// document.write("hey guys this is written by document write");
// console.warning("warn"); warn you
// console.error("this");
// console.clear()
// console.assert(4 == 5);
// ************************************************************************************************************************************

// javascript variable

// contain store value
// var number = 34;
// console.log(number);

// var marks = {
//   rt: 34,              //objects
//   ry: 32,
// };

// console.log(marks.rt);
// var a = true;
// var b = false;

// console.log(a, b);

// ************************************************************************************************************************************
//var und = undefined;
//var und; //then also undefined very important
//console.log(und);
//var und = null;
//null is different
//console.log(und);

// arrays in java script

//*primitive data type: undefined,null,nummber,string,boolean,symbol*
// *Refernce data type: Arrays and objects*

// ************************************************************************************************************************************
// var arr = [1, 2, 3, 4, 4];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// var arr = [1, 2, 3, 4, "bablu"];
// console.log(arr[4]);
// ************************************************************************************************************************************
// Operators in java script
// console.log(3 * 90);
// console.log(4 < 3);
// console.log(4 > 3);
//&& || !
// ************************************************************************************************************************************
// functions;
// function avg(a, b) {
//   return (a + b) / 2;
// }

// c1 = avg(4, 6);

// console.log(c1);
// if (5 > 4) {
//   console.log("BYE");
// }
// if (4 > 5) {
//   console.log("BYE");
// }
// https://youtu.be/hKB-YGF14SY?t=5899
// ************************************************************************************************************************************
// for loop
// var arr = [1, 2, 3, 4, 5, 6, 7];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(function (element) {
//   console.log(element);                  //very important syntax
// });

// let j = 0; //let should be used
// const a=0; //can't be changed
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// do {

// } while (condition);

// break and continue statment

// let arr = [
//   "deepesh",
//   true,
//   1,
//   function greet() {
//     console.log("hey");
//   },
// ];

// arr.pop(); //last element gone
// arr.push(""); //last element add
// arr.shift(); //first element gone
// arr.unshift(""); //first element add
// Array.toString() //convert whole array to string
// Array.sort() //sort the array
// ************************************************************************************************************************************
// strings methods in java script
// let ty = "deepesh agrawal";
// console.log(ty.length);//gives length of string
// console.log(ty.indexOf("agrawal")); //gives starting index of letter
// console.log(ty.lastIndexOf("deepesh")); //gives starting index of letter

// console.log(ty.slice(3, 6)); //pes output
// d = ty.replace("deepesh", "Karan");//replace only first string
//  console.log(d); //old string will not change only copy is done
// ************************************************************************************************************************************
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// ************************************************************************************************************************************
// DOM //how to use document

// document.getElementById("h1")[0].style.color = "red";
//  document.getElementById("click").click();
// document.getElementById("click").style.border = "2px solid blue";
// let hey = document.getElementById("click");
// // console.log(hey);
// let bye = document.getElementsByClassName("header");
// console.log(bye);
// bye[0].style.background = "yellow";
// bye[0].classList.add("vrt"); //add new class name
// bye[0].classList.remove("vrt"); //remove new class name

// ************************************************************************************************************************************

// console.log(bye.innerHTML); //give html code under this
// console.log(bye[0].innerHTML); //give text under this

// let tn = document.getElementsByTagName("div");
// console.log(tn);
// let created = document.createElement("p");

// tn[0].appendChild(created);

// created.innerText = "HEY GUYS HELLO";

// let createdf = document.createElement("p");

// createdf.innerText = "HEY GUYS BYE";

// tn[0].replaceChild(createdf, created);

// document.location
// Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/project/', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
// document.scripts
// HTMLCollection(2) [script, script]
// document.links
// HTMLCollection []
// document.URL
// 'http://127.0.0.1:5500/project/'
// document.images
// let sel = document.querySelector(".container");
// console.log(sel);
// let se = document.querySelectorAll(".container");
// ************************************************************************************************************************************
// events in javascript

// function click() {
//   console.log("Button was clicked"); //onclick in html button
// }

// window.onload = function () {
// console.log("hey");              //on loading
// };

// let tr = document.getElementById("ft");

// tr.addEventListener("click", function () {
//   document.querySelectorAll(".header")[0].innerHTML = "<b>we have clicked</b>";
//   console.log("click hua");
// });

// tr.addEventListener("mouseover", function () {
//   console.log("click hua");
// });

// tr.addEventListener("mouseout", function () {
//   console.log("click hua");
// });

// tr.addEventListener("mouseup", function () {
//   console.log("click hua");
// });

// tr.addEventListener("mousedown", function () {
//   console.log("click hua");
// });
// ************************************************************************************************************************************

// set timeout set interval

// arrow function

// sum = (a, b) => {
//   return a + b;
// };
// logkaro = () => {
//   console.log("I am log");
// };
// setTimeout(logkaro, 2000); //2s after we get i am log
// setInterval(logkaro, 2000); //repeat afer every 2s

// let clr = setInterval(logkaro, 2000);
// clearInterval(clr);
// local storage
//use to save data in user computer
// localStorage.setitem('deepesh',agrawal)
//a kind of storage
// ************************************************************************************************************************************
// JSON
// help to exchange data
// obj = { name: "har\\ry", length: 1 };
// jso = JSON.stringify(obj);
// console.log(jso);
// json standard require double quotes
//
// console.log(parsded);
//
//  https://youtu.be/hKB-YGF14SY?t=10447
// let ar ;
// let y1 ;
// let time;
// setInterval(() => {
//   ar= new Date();
//    y1=ar.toLocaleDateString();
//    time= ar.getHours() + ":" + ar.getMinutes() + ":" + ar.getSeconds();
//   let show = (document.getElementById("ft").innerHTML = y1 + " on " + time);
// }, 1000);
// ************************************************************************************************************************************
// ************************************************************************************************************************************
// deeper in java script


// more on function and array 