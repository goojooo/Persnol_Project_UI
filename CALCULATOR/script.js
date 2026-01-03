const display = document.getElementById("inputBox");

function appendToDisplay(input){
  display.value += input;
}
function clearDisplay(){
  display.value = "";
}
function calculate(){
try{
  display.value = eval(display.value) ;
}  catch(error){
  display.value ="Error";
}
}

// ------------------------------------------------------------------------
// let one;
// document.getElementById("one").onclick = function () {
//   one = Number(document.getElementById("inputBox").value);
//   document.getElementById("inputBox").value = one;
// };
// let two;
// document.getElementById("two").onclick = function () {
//   two = Number(document.getElementById("inputBox").value);
//   document.getElementById("inputBox").value = two;
// };

// // const two = (document.getElementById("two").onclick = function () {
// //   const box = document.getElementById("inputBox");
// //   box.value += "2";
// // });

// // let num;
// // document.getElementById("sub").onclick = function(){
// // num = document.getElementById("myText").value;
// // if(num == 0){
// //     document.getElementById("h1").textContent = `The given number is :  ${num} and its Zero...`
// // }
// // else if(num % 2 == 0){
// //     document.getElementById("h1").textContent = `The given number is :  ${num} and its EVEN...`
// // }
// // else{
// //     document.getElementById("h1").textContent = `The given number is :  ${num} and its ODD...`
// // }
// // // console.log(userName);
// // }
