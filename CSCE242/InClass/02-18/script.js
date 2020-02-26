function displayEmotion() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    
    let displayP = document.getElementById("ex1-result");
    let displayEmotion = document.getElementById("ex1-emotion");

    //clear all errors before

    //validate data
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError) return;

    //display results
    displayP.innerHTML = `Welcome ${firstName}!<br>You are ${emotion} today`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red", "green", "yellow", "blue");
    displayEmotion.classList.add(favColor.toLowerCase());
}

function isBlank(data, errorSpanId){
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function getEmoji(emotion){
    const emoCI = emotion.toLowerCase();

    if(emoCI == "happy")
    {
        return ":)"
    }
    else if(emoCI == "sad"){
        return ":(";
    }
    else if(emoCI == "silly"){
        return ":p";
    }
    else if(emoCI == "angry"){
        return ">:|";
    }

    return "";
}

function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");

}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;

/*Example 3*/

function isNotValidNum(data, errorSpanId) {
    if(isNaN(data)) {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function countDown() {
    let startNum = parseInt(document.getElementById("txt-start").value);
    let endNum = parseInt(document.getElementById("txt-end").value);
    //check if input is a valid number
    if(isNotValidNum(startNum, "error-start") | isNotValidNum(endNum, "error-start")) return;

    //check if endNum <= to startNum... show error if so
    if(startNum >= endNum) {
        resultDiv.innerHTML = "End num must be larger than start num";
        return;
    }

    //populate result after button
    let ulElem = document.createElement("ul");
    btnGo.after(ulElem);

    for(let i = startNum; i <= endNum; i++) {
        let liElement = document.createElement("li");
        liElement.textContent = i;
        ulElem.append(liElement);
    }


    
    console.log(`Counting from ${startNum} to ${endNum}`);
}
 const btnGo = document.getElementById("btn-go");
 btnGo.onclick = countDown;