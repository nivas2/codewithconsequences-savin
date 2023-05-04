const root = document.querySelector("html");

let isRadian = false;
let isLog10 = false;

const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

const follower = document.createElement("div");
follower.classList.add("cursor", "cursor__follower");
root.appendChild(follower);

root.addEventListener("mousemove", (e) => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

function addChar(input, character) {
  if (input.value == null || input.value == "0") input.value = character;
  else input.value += character;
}

function cos(form) {
  form.display.value = Math.cos(form.display.value);
}

function sin(form) {
  form.display.value = Math.sin(form.display.value);
}

function tan(form) {
  form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
  form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
  if (isLog10) {
    // Todo: Update the display value with log10 of the input
    display.value = Math.log(10) * Math.log10(eval(form.display.value));
  } else {
    // Todo: Update the display value with log of the input
    display.value = (Math.log(eval(form.display.value))) / Math.log(10);
  }
}

function exp(form) {
  display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
  value = input.value.substring(0, input.value.length - 1);
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
  if (input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length);
  else input.value = "-" + input.value;
}

function compute(form) {
  form.display.value = eval(form.display.value);
}

function square(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value);
}

function checkNum(str) {
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
      if (
        ch != "/" &&
        ch != "*" &&
        ch != "+" &&
        ch != "-" &&
        ch != "." &&
        ch != "(" &&
        ch != ")" &&
        ch != "%" &&
        ch != "sin" &&
        ch != "cos" &&
        ch!= "tan"
      ) {
        alert("invalid entry!");
        return false;
      }
    }
  }
  return true;
}

function switchTheme() {
    // Todo : toggle the dark class on the calculator element
    // Todo : toggle the dark class on the calculator element
    // Todo : You may further move with your own css to change the theme of the calculator
    var body = document.body;
         // toggle the theme
         body.classList.toggle("dark-theme");
}

function toggleRad() {
  // Todo //: use isRadian to determine which conversion to use and hence update the #display value
  if(isRadian){
    display.value = eval(form.display.value) * (180 / Math.PI);
  }
else{
    display.value = eval(form.display.value) * (Math.PI / 180);
}
}

function toggleLog() {
  // Todo: use isLog10 to determine which log function to use and hence update the button text
if(isLog10){
  display.value = Math.log2(10) * Math.log10(eval(form.display.value));
}
else{
  display.value =  (Math.log2(eval(form.display.value)))/Math.log2(10);
}
}
