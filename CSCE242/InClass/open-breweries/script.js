async function showBrews(){
    let response = await fetch('https://api.openbrewerydb.org/breweries');
    let brewsJSON = await response.json();
    let brewDiv = document.getElementById("brews-section");
    
    //loop through the list of breweries from the JSON file
    for(i in brewsJSON){
        let brew = brewsJSON[i];
        brewDiv.append(getBrewItem(brew));
    }
}

function getBrewItem(brew) {
    let brewSection = document.createElement("section");
    brewSection.classList.add("one-brew-section");

    let aElem = document.createElement("a");
    let h3Elem = document.createElement("h3");
    h3Elem.innerText = brew.name;
    aElem.append(h3Elem);
    aElem.href = brew.website_url;
    brewSection.append(aElem);

    let ulElem = document.createElement("ul");
    brewSection.append(ulElem);

    let liType = document.createElement("li");
    liType.innerText = `Type: ${brew.brewery_type}`;
    ulElem.append(liType);

    let liStreet = document.createElement("li");
    liStreet.innerText = `${brew.street}`;
    ulElem.append(liStreet);

    let liCityState = document.createElement("li");
    liCityState.innerText = `${brew.city}, ${brew.state}`;
    ulElem.append(liCityState);

    let liZip = document.createElement("li");
    liZip.innerText = `${brew.postal_code}`;
    ulElem.append(liZip);

    let liCountry = document.createElement("li");
    liCountry.innerText = `${brew.country}`;
    ulElem.append(liCountry);

    let liPhone = document.createElement("li");
    liPhone.innerText = `${brew.phone}`;
    ulElem.append(liPhone);


    return brewSection;
}

window.onload = function() {
    this.showBrews();
}
