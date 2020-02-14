function displayOldest() {
    //gather all 6 pieces of information & write to console
    const firstName = document.getElementById("Name1-txt").value;
    const secondName = document.getElementById("Name2-txt").value;
    const thirdName = document.getElementById("Name3-txt").value;
    const firstAge = document.getElementById("Age1-txt").value;
    const secondAge = document.getElementById("Age2-txt").value;
    const thirdAge = document.getElementById("Age3-txt").value;

    let displayOldest = document.getElementById("oldest-result");

    //validate data
    const name1Error = isBlank(firstName, "error-name1");
    const name2Error = isBlank(secondName, "error-name2");
    const name3Error = isBlank(thirdName, "error-name3");
    const age1Error = isBlank(firstAge, "error-age1");
    const age2Error = isBlank(secondAge, "error-age2");
    const age3Error = isBlank(thirdAge, "error-age3");

    if(name1Error || name2Error || name3Error || age1Error || age2Error || age3Error ) return;

    //sort results
    var ages = [firstAge, secondAge, thirdAge]
    ages.sort();
    var sortedNames = [];
    var i;
    
    if(ages[0] == firstAge) {
        sortedNames[2] = firstName;
    } else if(ages[0] == secondAge) {
        sortedNames[2] = secondName;
    } else if(ages[0] == thirdAge) {
        sortedNames[2] = thirdName;
    } else {
        sortedNames[2] = "?";
    }

    if(ages[1] == firstAge) {
        sortedNames[1] = firstName;
    } else if(ages[1] == secondAge) {
        sortedNames[1] = secondName;
    } else if(ages[1] == thirdAge) {
        sortedNames[1] = thirdName;
    } else {
        sortedNames[1] = "?";
    }

    if(ages[2] == firstAge) {
        sortedNames[0] = firstName;
    } else if(ages[2] == secondAge) {
        sortedNames[0] = secondName;
    } else if(ages[2] == thirdAge) {
        sortedNames[0] = thirdName;
    } else {
        sortedNames[0] = "?";
    }
    //Display results
    displayOldest.innerHTML = `Names listed from Oldest to Youngest: ${sortedNames[0]}, ${sortedNames[1]}, ${sortedNames[2]}`;
    displayOldest.classList.add(firstName.toLowerCase());
    displayOldest.classList.add(secondName.toLowerCase());
    displayOldest.classList.add(thirdName.toLowerCase());
    displayOldest.classList.add(firstAge.toLowerCase());
    displayOldest.classList.add(secondAge.toLowerCase());
    displayOldest.classList.add(thirdAge.toLowerCase());

    //Debug
    console.log("HELLOOOO");
}

function isBlank(data, errorSpanId){
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}
function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");

}
const btnDisplay = document.getElementById("oldest-display");
btnDisplay.onclick = displayOldest;


const navToggle = document.getElementById("hamburger");
navToggle.onclick = toggleNav;
