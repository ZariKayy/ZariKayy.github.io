const quotes = ["Don't worry about a thing, 'cause every little thing is gonna be alright. - Bob Marley ","The way I see it, if you want the rainbow you gotta put up with the rain. - Marilyn Monroe","You can't go back and change the beginning, but you can start where you are and change the ending. - C.S. Lewis","Losers quit when they fail. Winners fail until they succeed. - Robert T. Kiyosaki","How you love yourself is how you teach others to love you. - Rupi Kaur","If you were born with the weakness to fall youwere born with the strength to rise. - Rupi Kaur"];
let showingQuote = document.getElementById("showing-quote");
var index = 1;

function showQuote() {
    showingQuote.innerHTML =`${quotes[index]}`;
    index++;
    if(index >= quotes.length) {
        index = 0;
    }
}
showingQuote.innerHTML = `${quotes[0]}`;
setInterval(showQuote, 3000);

function showRed() {
  let rainbow = document.getElementById("rainbow");
  let red = document.createElement("p");
  red.id = "red";
  red.innerHTML = "red";
  rainbow.append(red);
}
function showOrange() {
  let rainbow = document.getElementById("rainbow");
  let orange = document.createElement("p");
  orange.id = "orange";
  orange.innerHTML = "orange";
  rainbow.append(orange);
}
function showYellow() {
  let rainbow = document.getElementById("rainbow");
  let yellow = document.createElement("p");
  yellow.id = "yellow";
  yellow.innerHTML = "yellow";
  rainbow.append(yellow);
}
function showGreen() {
  let rainbow = document.getElementById("rainbow");
  let green = document.createElement("p");
  green.id = "green";
  green.innerHTML = "green";
  rainbow.append(green);
}
function showBlue() {
  let rainbow = document.getElementById("rainbow");
  let blue = document.createElement("p");
  blue.id = "blue";
  blue.innerHTML = "blue";
  rainbow.append(blue);
}
function showViolet() {
  let rainbow = document.getElementById("rainbow");
  let violet = document.createElement("p");
  violet.id = "violet";
  violet.innerHTML = "violet";
  rainbow.append(violet);

  let potOfGold = document.createElement("img");
  potOfGold.src = `images/potOfGold.png`;
  rainbow.append(potOfGold);
}
function click() {
  setTimeout(showRed, 500);
  setTimeout(showOrange, 1500);
  setTimeout(showYellow, 2500);
  setTimeout(showGreen, 3500);
  setTimeout(showBlue, 4500);
  setTimeout(showViolet, 5500);
}
let btnRain = document.getElementById("btn-rain")
btnRain.onclick = click;



























/*var i = 0;
function rain() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("red");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
let btnRain = document.getElementById("btn-rain");
btnRain.onclick = rain;
*/







