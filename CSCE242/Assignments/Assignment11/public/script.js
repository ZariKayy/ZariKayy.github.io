async function getConsoles(){
    let response = await fetch("http://localhost:3000/api/Assignment11");
    let consolesJSON = await response.json();
    let consolesDiv = document.getElementById("console-list");

    for(i in consolesJSON) {
        let gConsole = consolesJSON[i];
        consolesDiv.append(getConsoleItem(gConsole))
    }
}

function getConsoleItem(gConsole) {
    let consoleSection = document.createElement("section");
    consoleSection.classList.add("oneConsole");
    
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = gConsole.name;
    consoleSection.append(h3Elem);

    let imgElem = document.createElement("img");
    imgElem.src = `images/${gConsole.name}.jpg`;
    consoleSection.append(imgElem);

    let ulElem = document.createElement("ul");
    consoleSection.append(ulElem);

    let liManufacturer = document.createElement("li");
    liManufacturer.innerHTML = `<strong>Manufacturer</strong>: ${gConsole.manufacturer}`;
    ulElem.append(liManufacturer);
    
    let liCurrentModel = document.createElement("li");
    liCurrentModel.innerHTML = `<strong>Current Model:</strong> ${gConsole.currentModel}`;
    ulElem.append(liCurrentModel);

    let liPastModels = document.createElement("li");
    liPastModels.innerHTML = `<strong>Past Models:</strong> ${gConsole.pastModels}`;
    ulElem.append(liPastModels);

    let liMSRP = document.createElement("li");
    liMSRP.innerHTML = `<strong>MSRP:</strong> ${gConsole.MSRP}`;
    ulElem.append(liMSRP);

    let liExclusiveGames = document.createElement("li");
    liExclusiveGames.innerHTML = `<strong>Exclusive Games (y/n):</strong> ${gConsole.exclusiveGames}`;
    ulElem.append(liExclusiveGames);

    let liRating = document.createElement("li");
    liRating.innerHTML = `<strong>Rating:</strong> ${gConsole.rating}`;
    ulElem.append(liRating);

    return consoleSection;
}

window.onload = function(){
    getConsoles();
}