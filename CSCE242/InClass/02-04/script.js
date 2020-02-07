function showBoy() {
    console.log("Boy Function");
    let title = document.getElementById("title");
    title.innerHTML = "Boy Stuff";
    item1.innerHTML = "cars";
    item2.innerHTML = "trucks";
    item3.innerHTML = "sports";
}
function showGirl() {
    console.log("Girl Function");
    let title = document.getElementById("title");
    title.innerHTML = "Girl Stuff";
    item1.innerHTML = "shopping";
    item2.innerHTML = "makeup";
    item3.innerHTML = "sparkles";
}
function turnSmile() {
    console.log("Turn Face Function");
    if (face.innerHTML == ":(") {
        face.innerHTML = ":)";
    } 
    else if (face.innerHTML == ":)") {
        face.innerHTML = ":')";
    }
    else if (face.innerHTML == ":')") {
        face.innerHTML = ":O";
    }
    else {
        face.innerHTML = ">:|";
    }
}

let myHeader = document.getElementById("my-header");
myHeader.innerHTML = "Sexisim";
let boyButton = document.getElementById("btn-boy");
boyButton.onclick = showBoy;
let girlButton = document.getElementById("btn-girl");
girlButton.onclick = showGirl;
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let face = document.getElementById("face");
face.onclick = turnSmile;
