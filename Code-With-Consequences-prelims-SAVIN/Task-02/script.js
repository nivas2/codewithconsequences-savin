const root = document.querySelector('html');


const cursor = document.createElement('div');
cursor.classList.add('cursor');
root.appendChild(cursor);


const follower = document.createElement('div');
follower.classList.add('cursor', 'cursor__follower');
root.appendChild(follower);


root.addEventListener('mousemove', e => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

function update(value) {
    var stretch = ['ultra-condensed','extra-condensed','condensed','semi-condensed','normal','semi-expanded','expanded','extra-expanded  ','ultra-expanded'];
    document.getElementById("work").style.fontWeight=value*100;
    document.getElementById("work").style.fontStretch=stretch[value-1];
    document.getElementById("life").style.fontWeight=(1000-value*100);
    document.getElementById("life").style.fontStretch=stretch[9-value];
}

var redx = document.getElementById("red-slider");
var greenx = document.getElementById("green-slider");
var bluex = document.getElementById("blue-slider");

function updateColor() {
  var redValue=redx.value;
  var greenValue=greenx.value;
  var blueValue=bluex.value;
  const aum = document.getElementById("wrapper");
  var colorString = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
  aum.style.color = colorString;



  // Todo: Update the text color


}

redx.addEventListener('input', updateColor);
greenx.addEventListener('input', updateColor);
bluex.addEventListener('input', updateColor);
