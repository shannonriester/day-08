console.dir(document.querySelector('.answer'));


document.querySelector('.button').onclick = calculate;
function calculate () {
  var userInput1 = document.querySelector('.input1').value;
  var userInput2 = document.querySelector('.input2').value;
  var sum = Number(userInput1) + Number(userInput2);
  console.log(sum);


// My failed attempt, below:

 //  function display() {
 //    document.querySelector(".answer").style.backgroundColor = "blue";
 // }
  // document.querySelector('.answer').value = sum;
}
