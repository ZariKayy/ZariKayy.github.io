function displayThermo() {
    //gather data
    const fundsRaised = document.getElementById("funds-raised-txt").value;
    const thermometer = document.getElementById("thermometer-bar");

    //validate data
    const goalError = isBlank(fundsRaised, "error-funds");

    if(goalError) return;

    //determine %
    if(fundsRaised >= 10000) {
        thermometer.classList.remove("half", "almostfull", "full", "seventyfive", "twentyfive");
        thermometer.classList.add("full");
    } else if (fundsRaised > 7500 && fundsRaised < 10000) {
        thermometer.classList.remove("half", "almostfull", "full", "seventyfive", "twentyfive");
        thermometer.classList.add("almostfull");
    } else if (fundsRaised <= 7500 && fundsRaised > 5000) {
        thermometer.classList.remove("half", "almostfull", "full", "seventyfive", "twentyfive");
        thermometer.classList.add("seventyfive");
    } else if (fundsRaised <= 5000 && fundsRaised > 2500) {
        thermometer.classList.remove("half", "almostfull", "full", "seventyfive", "twentyfive");
        thermometer.classList.add("half");
    } else if (fundsRaised <= 2500 && fundsRaised > 0) {
        thermometer.classList.remove("half", "almostfull", "full", "seventyfive", "twentyfive");
        thermometer.classList.add("twentyfive");
    } else {
        console.log("error");
    }
    
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
const btnDisplay = document.getElementById("goal-display");
btnDisplay.onclick = displayThermo;


const navToggle = document.getElementById("hamburger");
navToggle.onclick = toggleNav;


