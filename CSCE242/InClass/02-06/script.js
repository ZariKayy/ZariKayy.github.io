function displayInfo() {
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    let ex1Result= document.getElementById("ex1-result");

    /*
    let price = parseFloat(document.getElementById("txt-price").value);
    parseInt("^")
    */

    console.log("Your first name is: "+firstName+". Your fav color is: "+favColor+". Your emotion is: "+emotion);
    ex1Result.innerHTML = `Your first name is: ${firstName}. Your favorite color is: ${favColor}. Your current emotion is: ${emotion}.`;

}



const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayInfo;

